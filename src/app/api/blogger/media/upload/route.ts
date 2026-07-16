import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { getSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const BUCKET = 'blog-media';
const MAX_BYTES = 8 * 1024 * 1024;
const ALLOWED = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif'];

function altFromName(name: string): string {
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const form = await req.formData();
  const file = form.get('file');
  const altInput = String(form.get('alt') || '');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: 'Unsupported image type.' }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'Image exceeds 8MB.' }, { status: 400 });
  }

  const input = Buffer.from(await file.arrayBuffer());
  const supabase = supabaseAdmin();
  const base = `posts/${crypto.randomUUID()}`;

  try {
    // Full-size WebP (cap at 1600px wide) + metadata
    const pipeline = sharp(input).rotate();
    const meta = await pipeline.metadata();
    const full = await sharp(input).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
    const thumb = await sharp(input).rotate().resize({ width: 480, height: 300, fit: 'cover' }).webp({ quality: 70 }).toBuffer();

    const fullPath = `${base}.webp`;
    const thumbPath = `${base}-thumb.webp`;

    const up1 = await supabase.storage.from(BUCKET).upload(fullPath, full, { contentType: 'image/webp', upsert: false });
    if (up1.error) throw new Error(up1.error.message);
    const up2 = await supabase.storage.from(BUCKET).upload(thumbPath, thumb, { contentType: 'image/webp', upsert: false });
    if (up2.error) throw new Error(up2.error.message);

    const fullUrl = supabase.storage.from(BUCKET).getPublicUrl(fullPath).data.publicUrl;
    const thumbUrl = supabase.storage.from(BUCKET).getPublicUrl(thumbPath).data.publicUrl;

    const id = crypto.randomUUID();
    const altText = altInput.trim() || altFromName(file.name);
    const { error: dbErr } = await supabase.from('blog_media').insert({
      id,
      uploaderId: session.sub,
      originalUrl: fullUrl,
      webpUrl: fullUrl,
      thumbnailUrl: thumbUrl,
      altText,
      width: meta.width ?? null,
      height: meta.height ?? null,
      sizeBytes: full.length,
      mimeType: 'image/webp',
      createdAt: new Date().toISOString(),
    });
    if (dbErr) throw new Error(dbErr.message);

    return NextResponse.json({ id, url: fullUrl, thumbnailUrl: thumbUrl, altText });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Upload failed.' }, { status: 500 });
  }
}
