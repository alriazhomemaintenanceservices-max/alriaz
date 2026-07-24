import { notFound } from 'next/navigation';
import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import PostForm from '@/components/blogger/PostForm';
import { emptyTranslation, type PostPayload } from '@/lib/blog/post-types';
import type { PostStatus, RobotsDirective } from '@/lib/types/db';

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await requireSession();
  const supabase = supabaseAdmin();

  const [{ data: post }, { data: categories }] = await Promise.all([
    supabase
      .from('blog_posts')
      .select('id,categoryId,featuredMediaId,status,scheduledAt,scheduleTz,featuredMedia:blog_media(id,webpUrl,altText),translations:blog_translations(*,faqs:blog_faqs(question,answer,order)),tags:blog_post_tags(tag:blog_tags(name))')
      .eq('id', id)
      .maybeSingle(),
    supabase.from('blog_categories').select('id,name').order('name'),
  ]);

  if (!post) notFound();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = post as any;

  const toTranslationInput = (t: any) =>
    t
      ? {
          title: t.title ?? '',
          slug: t.slug ?? '',
          excerpt: t.excerpt ?? '',
          content: t.content ?? '',
          seoTitle: t.seoTitle ?? '',
          metaDescription: t.metaDescription ?? '',
          focusKeyword: t.focusKeyword ?? '',
          secondaryKeywords: t.secondaryKeywords ?? [],
          canonicalUrl: t.canonicalUrl ?? '',
          robots: (t.robots ?? 'INDEX') as RobotsDirective,
          ogTitle: t.ogTitle ?? '',
          ogDescription: t.ogDescription ?? '',
          faqs: (t.faqs ?? [])
            .slice()
            .sort((a: any, b: any) => (a.order ?? 0) - (b.order ?? 0))
            .map((f: any) => ({ question: f.question, answer: f.answer })),
        }
      : emptyTranslation();

  const arT = (p.translations ?? []).find((x: any) => x.locale === 'AR') ?? null;
  const enT = (p.translations ?? []).find((x: any) => x.locale === 'EN') ?? null;
  const ar = toTranslationInput(arT);
  const en = toTranslationInput(enT);

  const initial: PostPayload = {
    id: p.id,
    categoryId: p.categoryId ?? null,
    featuredMediaId: p.featuredMediaId ?? null,
    status: (p.status ?? 'DRAFT') as PostStatus,
    scheduledAt: p.scheduledAt ?? null,
    scheduleTz: p.scheduleTz ?? null,
    tags: (p.tags ?? []).map((row: any) => row.tag?.name).filter(Boolean),
    ar,
    en,
  };

  const fm = p.featuredMedia;
  const initialFeatured = fm ? { id: fm.id, url: fm.webpUrl, altText: fm.altText ?? '' } : null;

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <PostForm
        categories={(categories ?? []) as { id: string; name: string }[]}
        initial={initial}
        initialFeatured={initialFeatured}
        postId={p.id}
      />
    </AdminShell>
  );
}
