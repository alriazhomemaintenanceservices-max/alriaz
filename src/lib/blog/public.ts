import 'server-only';
import { supabaseAdmin } from '@/lib/supabase/server';
import type { TocItem } from './content';
import type { Locale } from '@/lib/types/db';

export interface PostCard {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string | null;
  readingTime: number;
  categoryName: string | null;
  categorySlug: string | null;
  thumb: string | null;
  thumbAlt: string;
}

export interface FullPost {
  id: string;
  locale: Locale;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  contentText: string;
  readingTime: number;
  toc: TocItem[];
  seoTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  robotsNoindex: boolean;
  ogTitle: string | null;
  ogDescription: string | null;
  publishedAt: string | null;
  authorName: string;
  categoryId: string | null;
  categoryName: string | null;
  categorySlug: string | null;
  featuredUrl: string | null;
  featuredAlt: string;
  featuredWidth: number | null;
  featuredHeight: number | null;
  tags: string[];
  faqs: { question: string; answer: string }[];
}

// PostgREST OR filter: published, or scheduled whose time has arrived.
function visibilityFilter() {
  const now = new Date().toISOString();
  return `status.eq.PUBLISHED,and(status.eq.SCHEDULED,scheduledAt.lte.${now})`;
}

/* eslint-disable @typescript-eslint/no-explicit-any */

function toCard(p: any, locale: Locale): PostCard | null {
  const t = (p.translations ?? []).find((x: any) => x.locale === locale);
  if (!t) return null;
  return {
    slug: t.slug,
    title: t.title,
    excerpt: t.excerpt ?? '',
    publishedAt: p.publishedAt ?? p.scheduledAt ?? null,
    readingTime: t.readingTime ?? 1,
    categoryName: p.category?.name ?? null,
    categorySlug: p.category?.slug ?? null,
    thumb: p.featuredMedia?.thumbnailUrl ?? p.featuredMedia?.webpUrl ?? null,
    thumbAlt: p.featuredMedia?.altText ?? t.title,
  };
}

export async function getPublishedPosts(locale: Locale = 'AR', limit = 30): Promise<PostCard[]> {
  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('blog_posts')
    .select('publishedAt,scheduledAt,category:blog_categories(name,slug),featuredMedia:blog_media(thumbnailUrl,webpUrl,altText),translations:blog_translations(title,slug,excerpt,readingTime,locale)')
    .or(visibilityFilter())
    .order('publishedAt', { ascending: false, nullsFirst: false })
    .limit(limit);
  return (data ?? []).map((p) => toCard(p, locale)).filter(Boolean) as PostCard[];
}

export async function getPostBySlug(slug: string, locale: Locale = 'AR'): Promise<FullPost | null> {
  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('blog_translations')
    .select('*,faqs:blog_faqs(question,answer,order),post:blog_posts!inner(id,status,scheduledAt,publishedAt,categoryId,category:blog_categories(name,slug),author:bloggers(name),featuredMedia:blog_media(webpUrl,altText,width,height),tags:blog_post_tags(tag:blog_tags(name)))')
    .eq('locale', locale)
    .eq('slug', slug)
    .maybeSingle();

  if (!data) return null;
  const t = data as any;
  const p = t.post;
  if (!p) return null;

  const now = Date.now();
  const visible =
    p.status === 'PUBLISHED' ||
    (p.status === 'SCHEDULED' && p.scheduledAt && new Date(p.scheduledAt).getTime() <= now);
  if (!visible) return null;

  return {
    id: p.id,
    locale,
    title: t.title,
    slug: t.slug,
    excerpt: t.excerpt ?? '',
    content: t.content ?? '',
    contentText: t.contentText ?? '',
    readingTime: t.readingTime ?? 1,
    toc: Array.isArray(t.tocJson) ? (t.tocJson as TocItem[]) : [],
    seoTitle: t.seoTitle ?? null,
    metaDescription: t.metaDescription ?? null,
    canonicalUrl: t.canonicalUrl ?? null,
    robotsNoindex: t.robots === 'NOINDEX',
    ogTitle: t.ogTitle ?? null,
    ogDescription: t.ogDescription ?? null,
    publishedAt: p.publishedAt ?? p.scheduledAt ?? null,
    authorName: p.author?.name ?? 'Saudi Home Experts',
    categoryId: p.categoryId ?? null,
    categoryName: p.category?.name ?? null,
    categorySlug: p.category?.slug ?? null,
    featuredUrl: p.featuredMedia?.webpUrl ?? null,
    featuredAlt: p.featuredMedia?.altText ?? t.title,
    featuredWidth: p.featuredMedia?.width ?? null,
    featuredHeight: p.featuredMedia?.height ?? null,
    tags: (p.tags ?? []).map((r: any) => r.tag?.name).filter(Boolean),
    faqs: (t.faqs ?? [])
      .slice()
      .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
      .map((f: any) => ({ question: f.question, answer: f.answer })),
  };
}

export async function getRelatedPosts(
  categoryId: string | null,
  excludeSlug: string,
  locale: Locale = 'AR',
  limit = 3,
): Promise<PostCard[]> {
  const supabase = supabaseAdmin();
  let query = supabase
    .from('blog_posts')
    .select('publishedAt,scheduledAt,category:blog_categories(name,slug),featuredMedia:blog_media(thumbnailUrl,webpUrl,altText),translations:blog_translations(title,slug,excerpt,readingTime,locale)')
    .or(visibilityFilter())
    .order('publishedAt', { ascending: false, nullsFirst: false })
    .limit(limit + 4);
  if (categoryId) query = query.eq('categoryId', categoryId);
  const { data } = await query;
  return (data ?? [])
    .map((p) => toCard(p, locale))
    .filter((c): c is PostCard => Boolean(c) && c!.slug !== excludeSlug)
    .slice(0, limit);
}

/** All published slugs for a locale (used by the sitemap). */
export async function getPublishedSlugs(locale: Locale = 'AR'): Promise<{ slug: string; publishedAt: string | null }[]> {
  const posts = await getPublishedPosts(locale, 500);
  return posts.map((p) => ({ slug: p.slug, publishedAt: p.publishedAt }));
}

/** The other language's slug for the same post, if that translation is published — for AR↔EN switch links and hreflang. */
export async function getSiblingSlug(postId: string, locale: Locale): Promise<string | null> {
  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('blog_translations')
    .select('slug,post:blog_posts!inner(status,publishedAt,scheduledAt)')
    .eq('postId', postId)
    .eq('locale', locale)
    .maybeSingle();
  if (!data) return null;
  const row = data as any;
  const p = row.post;
  const now = Date.now();
  const visible = p?.status === 'PUBLISHED' || (p?.status === 'SCHEDULED' && p?.scheduledAt && new Date(p.scheduledAt).getTime() <= now);
  return visible ? row.slug : null;
}
