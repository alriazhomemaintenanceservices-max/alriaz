import type { PostStatus, RobotsDirective } from '@/lib/types/db';

export interface FaqInput {
  question: string;
  answer: string;
}

export interface TranslationInput {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // rich HTML
  seoTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  canonicalUrl: string;
  robots: RobotsDirective;
  ogTitle: string;
  ogDescription: string;
  faqs: FaqInput[];
}

export interface PostPayload {
  id?: string;
  categoryId: string | null;
  featuredMediaId: string | null;
  status: PostStatus;
  scheduledAt: string | null; // ISO
  scheduleTz: string | null;
  tags: string[]; // tag names
  ar: TranslationInput; // primary language (Arabic)
  en: TranslationInput; // English translation — required to publish, optional while drafting
}

export interface SaveResult {
  ok: boolean;
  id?: string;
  error?: string;
}

export function emptyTranslation(): TranslationInput {
  return {
    title: '', slug: '', excerpt: '', content: '',
    seoTitle: '', metaDescription: '', focusKeyword: '', secondaryKeywords: [],
    canonicalUrl: '', robots: 'INDEX', ogTitle: '', ogDescription: '', faqs: [],
  };
}
