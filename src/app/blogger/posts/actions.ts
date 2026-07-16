'use server';

import crypto from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import { slugify, plainText, readingTime, extractToc, autoExcerpt } from '@/lib/blog/content';
import type { PostPayload, SaveResult } from '@/lib/blog/post-types';
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

export async function savePost(payload: PostPayload): Promise<SaveResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };

  const ar = payload.ar;
  if (!ar.title.trim()) return { ok: false, error: 'Title is required.' };
  if (!plainText(ar.content)) return { ok: false, error: 'Content cannot be empty.' };

  const supabase = supabaseAdmin();
  const isNew = !payload.id;
  const postId = payload.id || uid();

  // Derived content fields
  const contentText = plainText(ar.content);
  const slugBase = slugify(ar.slug || ar.title);
  const slug = await uniqueSlug(slugBase, 'AR', payload.id);
  const toc = extractToc(ar.content);
  const excerpt = ar.excerpt.trim() || autoExcerpt(ar.content);

  // Publish timing
  const publishedAt =
    payload.status === 'PUBLISHED' ? nowIso() : null;

  // 1) Upsert the post row
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
    // Keep an existing publishedAt if already published
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

  // 2) Upsert the AR translation (primary; unique on postId+locale)
  const translationRow = {
    postId,
    locale: 'AR' as const,
    title: ar.title.trim(),
    slug,
    excerpt,
    content: ar.content,
    contentText,
    readingTime: readingTime(contentText),
    tocJson: toc,
    seoTitle: ar.seoTitle.trim() || null,
    metaDescription: ar.metaDescription.trim() || null,
    focusKeyword: ar.focusKeyword.trim() || null,
    secondaryKeywords: ar.secondaryKeywords,
    canonicalUrl: ar.canonicalUrl.trim() || null,
    robots: ar.robots,
    ogTitle: ar.ogTitle.trim() || null,
    ogDescription: ar.ogDescription.trim() || null,
    updatedAt: nowIso(),
  };

  const { data: existingT } = await supabase
    .from('blog_translations')
    .select('id')
    .eq('postId', postId)
    .eq('locale', 'AR')
    .maybeSingle();

  let translationId: string;
  if (existingT) {
    translationId = (existingT as { id: string }).id;
    const { error } = await supabase.from('blog_translations').update(translationRow).eq('id', translationId);
    if (error) return { ok: false, error: error.message };
  } else {
    translationId = uid();
    const { error } = await supabase
      .from('blog_translations')
      .insert({ id: translationId, createdAt: nowIso(), ...translationRow });
    if (error) return { ok: false, error: error.message };
  }

  // 3) FAQs — replace the set for this translation
  await supabase.from('blog_faqs').delete().eq('translationId', translationId);
  const faqs = ar.faqs.filter((f) => f.question.trim() && f.answer.trim());
  if (faqs.length) {
    await supabase.from('blog_faqs').insert(
      faqs.map((f, i) => ({
        id: uid(),
        translationId,
        question: f.question.trim(),
        answer: f.answer.trim(),
        order: i,
      })),
    );
  }

  // 4) Tags — replace the set for this post
  const tagIds = await ensureTagIds(payload.tags);
  await supabase.from('blog_post_tags').delete().eq('postId', postId);
  if (tagIds.length) {
    await supabase.from('blog_post_tags').insert(tagIds.map((tagId) => ({ postId, tagId })));
  }

  revalidatePath('/blogger/posts');
  revalidatePath('/blogger/dashboard');
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  return { ok: true, id: postId };
}

/** Generate (or refresh) the English translation of a post from its Arabic version via Claude. */
export async function generateEnglishVersion(postId: string): Promise<SaveResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };

  const supabase = supabaseAdmin();
  const { data: arData } = await supabase
    .from('blog_translations')
    .select('title,excerpt,content,seoTitle,metaDescription,focusKeyword,slug,faqs:blog_faqs(question,answer,order)')
    .eq('postId', postId)
    .eq('locale', 'AR')
    .maybeSingle();
  if (!arData) return { ok: false, error: 'Write and save the Arabic version first.' };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const arT = arData as any;
  const arFaqs = (arT.faqs ?? [])
    .slice()
    .sort((a: { order?: number }, b: { order?: number }) => (a.order ?? 0) - (b.order ?? 0))
    .map((f: { question: string; answer: string }) => ({ question: f.question, answer: f.answer }));

  let en;
  try {
    const { translateArToEn } = await import('@/lib/blog/translate');
    en = await translateArToEn({
      title: arT.title,
      excerpt: arT.excerpt ?? '',
      content: arT.content ?? '',
      seoTitle: arT.seoTitle ?? '',
      metaDescription: arT.metaDescription ?? '',
      focusKeyword: arT.focusKeyword ?? '',
      faqs: arFaqs,
    });
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Translation failed.' };
  }

  const contentText = plainText(en.content);
  const slug = await uniqueSlug(slugify(en.title || arT.slug), 'EN', postId);
  const row = {
    postId,
    locale: 'EN' as const,
    title: en.title.trim() || arT.title,
    slug,
    excerpt: en.excerpt,
    content: en.content,
    contentText,
    readingTime: readingTime(contentText),
    tocJson: extractToc(en.content),
    seoTitle: en.seoTitle || null,
    metaDescription: en.metaDescription || null,
    focusKeyword: en.focusKeyword || null,
    secondaryKeywords: [] as string[],
    canonicalUrl: null,
    robots: 'INDEX' as const,
    ogTitle: null,
    ogDescription: null,
    updatedAt: nowIso(),
  };

  const { data: existing } = await supabase
    .from('blog_translations')
    .select('id')
    .eq('postId', postId)
    .eq('locale', 'EN')
    .maybeSingle();

  let tid: string;
  if (existing) {
    tid = (existing as { id: string }).id;
    const { error } = await supabase.from('blog_translations').update(row).eq('id', tid);
    if (error) return { ok: false, error: error.message };
  } else {
    tid = uid();
    const { error } = await supabase.from('blog_translations').insert({ id: tid, createdAt: nowIso(), ...row });
    if (error) return { ok: false, error: error.message };
  }

  await supabase.from('blog_faqs').delete().eq('translationId', tid);
  const faqs = en.faqs.filter((f) => f.question.trim() && f.answer.trim());
  if (faqs.length) {
    await supabase.from('blog_faqs').insert(
      faqs.map((f, i) => ({ id: uid(), translationId: tid, question: f.question, answer: f.answer, order: i })),
    );
  }

  revalidatePath('/en/blog');
  revalidatePath(`/en/blog/${slug}`);
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
