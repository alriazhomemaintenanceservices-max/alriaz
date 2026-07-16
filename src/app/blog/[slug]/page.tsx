import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog/public';
import BlogArticle from '@/components/blog/BlogArticle';
import '../../../styles/blog.css';

export const revalidate = 300;

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://saudihomeexperts.com';
const getPost = cache((slug: string) => getPostBySlug(slug, 'AR'));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(decodeURIComponent(slug));
  if (!post) return { title: 'المقال غير موجود' };

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonical = post.canonicalUrl || `${SITE}/blog/${post.slug}/`;
  const image = post.featuredUrl || undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: post.altLocaleSlug ? { 'en': `${SITE}/en/blog/${post.altLocaleSlug}/` } : undefined,
    },
    robots: post.robotsNoindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: post.ogTitle || title, description: post.ogDescription || description,
      url: canonical, type: 'article', locale: 'ar_SA',
      images: image ? [{ url: image }] : undefined, publishedTime: post.publishedAt || undefined,
    },
    twitter: {
      card: 'summary_large_image', title: post.ogTitle || title,
      description: post.ogDescription || description, images: image ? [image] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(decodeURIComponent(slug));
  if (!post) notFound();
  const related = await getRelatedPosts(post.categoryId, post.slug, 'AR', 3);

  return <BlogArticle post={post} related={related} basePath="/blog" altBasePath="/en/blog" />;
}
