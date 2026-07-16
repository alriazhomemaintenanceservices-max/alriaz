-- ============================================================================
-- Saudi Home Experts — Blogger System: full database setup
-- Run this in Supabase → SQL Editor (executes inside Supabase, no local
-- connection needed). Safe to re-run: seed rows use ON CONFLICT DO NOTHING.
-- Admin login after this:  admin@saudihomeexperts.com  /  ChangeMe!2026
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;  -- for gen_random_uuid()

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'EDITOR', 'AUTHOR');

-- CreateEnum
CREATE TYPE "BloggerStatus" AS ENUM ('ACTIVE', 'DISABLED', 'PENDING');

-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('DRAFT', 'SCHEDULED', 'PUBLISHED');

-- CreateEnum
CREATE TYPE "Locale" AS ENUM ('EN', 'AR');

-- CreateEnum
CREATE TYPE "RobotsDirective" AS ENUM ('INDEX', 'NOINDEX');

-- CreateTable
CREATE TABLE "bloggers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,
    "role" "Role" NOT NULL DEFAULT 'AUTHOR',
    "status" "BloggerStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bloggers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" TEXT NOT NULL,
    "bloggerId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_posts" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "categoryId" TEXT,
    "status" "PostStatus" NOT NULL DEFAULT 'DRAFT',
    "publishedAt" TIMESTAMP(3),
    "scheduledAt" TIMESTAMP(3),
    "scheduleTz" TEXT,
    "featuredMediaId" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "likes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_translations" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "locale" "Locale" NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL DEFAULT '',
    "contentText" TEXT NOT NULL DEFAULT '',
    "readingTime" INTEGER NOT NULL DEFAULT 0,
    "tocJson" JSONB,
    "seoTitle" TEXT,
    "metaDescription" TEXT,
    "focusKeyword" TEXT,
    "secondaryKeywords" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "canonicalUrl" TEXT,
    "robots" "RobotsDirective" NOT NULL DEFAULT 'INDEX',
    "ogTitle" TEXT,
    "ogDescription" TEXT,
    "ogImageUrl" TEXT,
    "twitterTitle" TEXT,
    "twitterDescription" TEXT,
    "twitterImageUrl" TEXT,
    "seoScore" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_translations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_faqs" (
    "id" TEXT NOT NULL,
    "translationId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "blog_faqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_post_tags" (
    "postId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "blog_post_tags_pkey" PRIMARY KEY ("postId","tagId")
);

-- CreateTable
CREATE TABLE "blog_media" (
    "id" TEXT NOT NULL,
    "uploaderId" TEXT,
    "originalUrl" TEXT NOT NULL,
    "webpUrl" TEXT,
    "thumbnailUrl" TEXT,
    "altText" TEXT,
    "width" INTEGER,
    "height" INTEGER,
    "sizeBytes" INTEGER,
    "mimeType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_media_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bloggers_email_key" ON "bloggers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_tokenHash_key" ON "password_reset_tokens"("tokenHash");

-- CreateIndex
CREATE INDEX "password_reset_tokens_bloggerId_idx" ON "password_reset_tokens"("bloggerId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_categories_slug_key" ON "blog_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "blog_tags_slug_key" ON "blog_tags"("slug");

-- CreateIndex
CREATE INDEX "blog_posts_status_publishedAt_idx" ON "blog_posts"("status", "publishedAt");

-- CreateIndex
CREATE INDEX "blog_posts_authorId_idx" ON "blog_posts"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "blog_translations_postId_locale_key" ON "blog_translations"("postId", "locale");

-- CreateIndex
CREATE UNIQUE INDEX "blog_translations_locale_slug_key" ON "blog_translations"("locale", "slug");

-- CreateIndex
CREATE INDEX "blog_faqs_translationId_idx" ON "blog_faqs"("translationId");

-- CreateIndex
CREATE INDEX "blog_media_uploaderId_idx" ON "blog_media"("uploaderId");

-- AddForeignKey
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_bloggerId_fkey" FOREIGN KEY ("bloggerId") REFERENCES "bloggers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "bloggers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "blog_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_posts" ADD CONSTRAINT "blog_posts_featuredMediaId_fkey" FOREIGN KEY ("featuredMediaId") REFERENCES "blog_media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_translations" ADD CONSTRAINT "blog_translations_postId_fkey" FOREIGN KEY ("postId") REFERENCES "blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_faqs" ADD CONSTRAINT "blog_faqs_translationId_fkey" FOREIGN KEY ("translationId") REFERENCES "blog_translations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_post_tags" ADD CONSTRAINT "blog_post_tags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "blog_posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_post_tags" ADD CONSTRAINT "blog_post_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "blog_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_media" ADD CONSTRAINT "blog_media_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "bloggers"("id") ON DELETE SET NULL ON UPDATE CASCADE;


-- ============================== SEED DATA ==============================

-- Admin blogger (password: ChangeMe!2026 — change it after first login)
INSERT INTO "bloggers" ("id","name","email","password","role","status","createdAt","updatedAt")
VALUES (gen_random_uuid()::text, 'Site Admin', 'admin@saudihomeexperts.com',
        '$2b$12$TwdH9rJB1jRbIJnYiFHxmuKLoGzajI9AM1hNNEsgFUiG5f1WCOJxe', 'ADMIN', 'ACTIVE', now(), now())
ON CONFLICT ("email") DO NOTHING;

-- Categories (tailored to the business; no AC category by design)
INSERT INTO "blog_categories" ("id","name","slug","description","createdAt","updatedAt") VALUES
 (gen_random_uuid()::text, 'Electrical Services', 'electrical-services', 'Electrician tips, repairs and safety for Riyadh homes.', now(), now()),
 (gen_random_uuid()::text, 'Plumbing Services',   'plumbing-services',   'Leak repair, drainage, heaters and water systems.',     now(), now()),
 (gen_random_uuid()::text, 'Intercom & Security', 'intercom-security',   'Intercoms, cameras, doorbells and access control.',     now(), now()),
 (gen_random_uuid()::text, 'Home Maintenance',    'home-maintenance',    'General upkeep and seasonal home-care guides.',         now(), now()),
 (gen_random_uuid()::text, 'Tips & Guides',       'tips-guides',         'How-tos and buyer guides for homeowners.',              now(), now())
ON CONFLICT ("slug") DO NOTHING;

-- Tags
INSERT INTO "blog_tags" ("id","name","slug","createdAt") VALUES
 (gen_random_uuid()::text, 'Riyadh',       'riyadh',       now()),
 (gen_random_uuid()::text, 'Saudi Arabia', 'saudi-arabia', now()),
 (gen_random_uuid()::text, 'Home Repair',  'home-repair',  now()),
 (gen_random_uuid()::text, 'Electrician',  'electrician',  now()),
 (gen_random_uuid()::text, 'Plumber',      'plumber',      now()),
 (gen_random_uuid()::text, 'Intercom',     'intercom',     now()),
 (gen_random_uuid()::text, 'Maintenance',  'maintenance',  now())
ON CONFLICT ("slug") DO NOTHING;
