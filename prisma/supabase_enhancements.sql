-- ============================================================================
-- Run this AFTER prisma/manual_setup.sql (in Supabase → SQL Editor).
-- With Prisma gone, the DB must self-manage what Prisma used to:
--   • id columns auto-generate (were cuid() in the app layer)
--   • updatedAt is set on INSERT (default) and UPDATE (trigger)
-- Safe to re-run.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Auto-generate string ids on insert
DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'bloggers','password_reset_tokens','blog_categories','blog_tags',
    'blog_posts','blog_translations','blog_faqs','blog_media'
  ] LOOP
    EXECUTE format('ALTER TABLE %I ALTER COLUMN "id" SET DEFAULT gen_random_uuid()::text', t);
  END LOOP;
END $$;

-- Keep updatedAt current automatically
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger
LANGUAGE plpgsql AS $$
BEGIN
  NEW."updatedAt" = now();
  RETURN NEW;
END;
$$;

DO $$
DECLARE t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['bloggers','blog_categories','blog_posts','blog_translations'] LOOP
    EXECUTE format('ALTER TABLE %I ALTER COLUMN "updatedAt" SET DEFAULT now()', t);
    EXECUTE format('DROP TRIGGER IF EXISTS trg_updated_at ON %I', t);
    EXECUTE format('CREATE TRIGGER trg_updated_at BEFORE UPDATE ON %I FOR EACH ROW EXECUTE FUNCTION set_updated_at()', t);
  END LOOP;
END $$;
