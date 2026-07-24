import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts, getSiblingSlug } from '@/lib/blog/public';
import BlogArticle from '@/components/blog/BlogArticle';
import '../../../../styles/blog.css';

export const revalidate = 300;

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://saudihomeexperts.com';
const getPost = cache((slug: string) => getPostBySlug(slug, 'EN'));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(decodeURIComponent(slug));
  if (!post) return { title: 'Article not found' };

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonical = post.canonicalUrl || `${SITE}/en/blog/${post.slug}/`;
  const image = post.featuredUrl || undefined;

  return {
    title,
    description,
    alternates: { canonical },
    robots: post.robotsNoindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: post.ogTitle || title, description: post.ogDescription || description,
      url: canonical, type: 'article', locale: 'en_US',
      images: image ? [{ url: image }] : undefined, publishedTime: post.publishedAt || undefined,
    },
    twitter: {
      card: 'summary_large_image', title: post.ogTitle || title,
      description: post.ogDescription || description, images: image ? [image] : undefined,
    },
  };
}

export default async function EnglishBlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(decodeURIComponent(slug));
  if (!post) notFound();
  const related = await getRelatedPosts(post.categoryId, post.slug, 'EN', 3);
  const arSlug = await getSiblingSlug(post.id, 'AR');

  return <BlogArticle post={post} related={related} basePath="/en/blog" altHref={arSlug ? `/blog/${encodeURIComponent(arSlug)}/` : null} />;
}
