// Hand-written row types matching the Supabase tables (see prisma/manual_setup.sql).
// Timestamps come back as ISO strings from PostgREST.

export type Role = 'ADMIN' | 'EDITOR' | 'AUTHOR';
export type BloggerStatus = 'ACTIVE' | 'DISABLED' | 'PENDING';
export type PostStatus = 'DRAFT' | 'SCHEDULED' | 'PUBLISHED';
export type Locale = 'EN' | 'AR';
export type RobotsDirective = 'INDEX' | 'NOINDEX';

export interface Blogger {
  id: string;
  name: string;
  email: string;
  password: string;
  profileImage: string | null;
  role: Role;
  status: BloggerStatus;
  lastLogin: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PasswordResetToken {
  id: string;
  bloggerId: string;
  tokenHash: string;
  expiresAt: string;
  usedAt: string | null;
  createdAt: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  authorId: string;
  categoryId: string | null;
  status: PostStatus;
  publishedAt: string | null;
  scheduledAt: string | null;
  scheduleTz: string | null;
  featuredMediaId: string | null;
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export interface BlogTranslation {
  id: string;
  postId: string;
  locale: Locale;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  contentText: string;
  readingTime: number;
  tocJson: unknown | null;
  seoTitle: string | null;
  metaDescription: string | null;
  focusKeyword: string | null;
  secondaryKeywords: string[];
  canonicalUrl: string | null;
  robots: RobotsDirective;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImageUrl: string | null;
  twitterTitle: string | null;
  twitterDescription: string | null;
  twitterImageUrl: string | null;
  seoScore: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface BlogFaq {
  id: string;
  translationId: string;
  question: string;
  answer: string;
  order: number;
}

export interface Media {
  id: string;
  uploaderId: string | null;
  originalUrl: string;
  webpUrl: string | null;
  thumbnailUrl: string | null;
  altText: string | null;
  width: number | null;
  height: number | null;
  sizeBytes: number | null;
  mimeType: string | null;
  createdAt: string;
}
