'use server';

import crypto from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import { slugify } from '@/lib/blog/content';

export interface CrudResult { ok: boolean; error?: string; }

export async function createTag(name: string): Promise<CrudResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };
  if (!name.trim()) return { ok: false, error: 'Name is required.' };
  const supabase = supabaseAdmin();
  const { error } = await supabase.from('blog_tags').insert({
    id: crypto.randomUUID(),
    name: name.trim(),
    slug: slugify(name),
    createdAt: new Date().toISOString(),
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath('/blogger/tags');
  return { ok: true };
}

export async function deleteTag(id: string): Promise<CrudResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };
  const supabase = supabaseAdmin();
  const { error } = await supabase.from('blog_tags').delete().eq('id', id);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/blogger/tags');
  return { ok: true };
}
