'use server';

import crypto from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import { slugify, plainText, readingTime, extractToc, autoExcerpt } from '@/lib/blog/content';
import type { PostPayload, SaveResult, TranslationInput } from '@/lib/blog/post-types';
import type { BlogTag } from '@/lib/types/db';

const uid = () => crypto.randomUUID();
const nowIso = () => new Date().toISOString();

/** Ensure a slug is unique within (locale, slug); append -2, -3… if taken. */
async function uniqueSlug(base: string, locale: 'EN' | 'AR', excludePostId?: string): Promise<string> {
  const supabase = supabaseAdmin();
  let slug = base || 'post';
  for (let i = 1; i < 50; i++) {
    const { data } = await supabase
      .from('blog_translations')
      .select('id,postId')
      .eq('locale', locale)
      .eq('slug', slug)
      .maybeSingle();
    if (!data || (excludePostId && (data as { postId: string }).postId === excludePostId)) return slug;
    slug = `${base}-${i + 1}`;
  }
  return `${base}-${Date.now()}`;
}

async function ensureTagIds(names: string[]): Promise<string[]> {
  const supabase = supabaseAdmin();
  const clean = Array.from(new Set(names.map((n) => n.trim()).filter(Boolean)));
  const ids: string[] = [];
  for (const name of clean) {
    const slug = slugify(name);
    const { data: existing } = await supabase
      .from('blog_tags')
      .select('id')
      .eq('slug', slug)
      .maybeSingle();
    if (existing) {
      ids.push((existing as BlogTag).id);
    } else {
      const id = uid();
      const { error } = await supabase
        .from('blog_tags')
        .insert({ id, name, slug, createdAt: nowIso() });
      if (!error) ids.push(id);
    }
  }
  return ids;
}

/** Upsert one locale's translation row + its FAQs. Returns the final slug, or an error. */
async function upsertTranslation(
  postId: string,
  locale: 'AR' | 'EN',
  t: TranslationInput,
  excludePostId?: string,
): Promise<{ slug: string; error?: undefined } | { slug?: undefined; error: string }> {
  const supabase = supabaseAdmin();

  const contentText = plainText(t.content);
  const slugBase = slugify(t.slug || t.title);
  const slug = await uniqueSlug(slugBase, locale, excludePostId);
  const toc = extractToc(t.content);
  const excerpt = t.excerpt.trim() || autoExcerpt(t.content);

  const translationRow = {
    postId,
    locale,
    title: t.title.trim(),
    slug,
    excerpt,
    content: t.content,
    contentText,
    readingTime: readingTime(contentText),
    tocJson: toc,
    seoTitle: t.seoTitle.trim() || null,
    metaDescription: t.metaDescription.trim() || null,
    focusKeyword: t.focusKeyword.trim() || null,
    secondaryKeywords: t.secondaryKeywords,
    canonicalUrl: t.canonicalUrl.trim() || null,
    robots: t.robots,
    ogTitle: t.ogTitle.trim() || null,
    ogDescription: t.ogDescription.trim() || null,
    updatedAt: nowIso(),
  };

  const { data: existingT } = await supabase
    .from('blog_translations')
    .select('id')
    .eq('postId', postId)
    .eq('locale', locale)
    .maybeSingle();

  let translationId: string;
  if (existingT) {
    translationId = (existingT as { id: string }).id;
    const { error } = await supabase.from('blog_translations').update(translationRow).eq('id', translationId);
    if (error) return { error: error.message };
  } else {
    translationId = uid();
    const { error } = await supabase
      .from('blog_translations')
      .insert({ id: translationId, createdAt: nowIso(), ...translationRow });
    if (error) return { error: error.message };
  }

  // FAQs — replace the set for this translation
  await supabase.from('blog_faqs').delete().eq('translationId', translationId);
  const faqs = t.faqs.filter((f) => f.question.trim() && f.answer.trim());
  if (faqs.length) {
    const { error } = await supabase.from('blog_faqs').insert(
      faqs.map((f, i) => ({
        id: uid(),
        translationId,
        question: f.question.trim(),
        answer: f.answer.trim(),
        order: i,
      })),
    );
    if (error) return { error: error.message };
  }

  return { slug };
}

function hasContent(t: TranslationInput): boolean {
  return Boolean(t.title.trim() || plainText(t.content));
}

export async function savePost(payload: PostPayload): Promise<SaveResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };

  const { ar, en } = payload;
  if (!ar.title.trim()) return { ok: false, error: 'Arabic title is required.' };
  if (!plainText(ar.content)) return { ok: false, error: 'Arabic content cannot be empty.' };

  // English is required to publish — the site now ships both locales for every
  // live post — but can stay empty while a post is still a draft in progress.
  if (payload.status === 'PUBLISHED') {
    if (!en.title.trim()) return { ok: false, error: 'English title is required to publish.' };
    if (!plainText(en.content)) return { ok: false, error: 'English content is required to publish.' };
  }

  const supabase = supabaseAdmin();
  const isNew = !payload.id;
  const postId = payload.id || uid();

  const publishedAt = payload.status === 'PUBLISHED' ? nowIso() : null;

  // 1) Upsert the post row (locale-independent fields)
  if (isNew) {
    const { error } = await supabase.from('blog_posts').insert({
      id: postId,
      authorId: session.sub,
      categoryId: payload.categoryId,
      featuredMediaId: payload.featuredMediaId,
      status: payload.status,
      publishedAt,
      scheduledAt: payload.status === 'SCHEDULED' ? payload.scheduledAt : null,
      scheduleTz: payload.scheduleTz,
      createdAt: nowIso(),
      updatedAt: nowIso(),
    });
    if (error) return { ok: false, error: error.message };
  } else {
    const { data: current } = await supabase
      .from('blog_posts')
      .select('publishedAt')
      .eq('id', postId)
      .maybeSingle();
    const keepPublished = (current as { publishedAt: string | null } | null)?.publishedAt ?? null;
    const { error } = await supabase
      .from('blog_posts')
      .update({
        categoryId: payload.categoryId,
        featuredMediaId: payload.featuredMediaId,
        status: payload.status,
        publishedAt: payload.status === 'PUBLISHED' ? (keepPublished ?? nowIso()) : keepPublished,
        scheduledAt: payload.status === 'SCHEDULED' ? payload.scheduledAt : null,
        scheduleTz: payload.scheduleTz,
        updatedAt: nowIso(),
      })
      .eq('id', postId);
    if (error) return { ok: false, error: error.message };
  }

  // 2) Upsert translations — Arabic always, English whenever the blogger has
  // started it (or it's required because the post is being published).
  const arResult = await upsertTranslation(postId, 'AR', ar, payload.id);
  if (arResult.error) return { ok: false, error: arResult.error };

  let enSlug: string | undefined;
  if (hasContent(en)) {
    const enResult = await upsertTranslation(postId, 'EN', en, payload.id);
    if (enResult.error) return { ok: false, error: enResult.error };
    enSlug = enResult.slug;
  }

  // 3) Tags — replace the set for this post
  const tagIds = await ensureTagIds(payload.tags);
  await supabase.from('blog_post_tags').delete().eq('postId', postId);
  if (tagIds.length) {
    await supabase.from('blog_post_tags').insert(tagIds.map((tagId) => ({ postId, tagId })));
  }

  revalidatePath('/blogger/posts');
  revalidatePath('/blogger/dashboard');
  revalidatePath('/blog');
  revalidatePath(`/blog/${arResult.slug}`);
  if (enSlug) {
    revalidatePath('/en/blog');
    revalidatePath(`/en/blog/${enSlug}`);
  }
  return { ok: true, id: postId };
}

export async function deletePost(id: string): Promise<SaveResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };
  const supabase = supabaseAdmin();
  // translations/faqs/tags cascade via FK ON DELETE CASCADE
  const { error } = await supabase.from('blog_posts').delete().eq('id', id);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/blogger/posts');
  revalidatePath('/blogger/dashboard');
  return { ok: true };
}
