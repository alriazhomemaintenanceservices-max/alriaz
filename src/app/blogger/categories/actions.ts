'use server';

import crypto from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import { slugify } from '@/lib/blog/content';

export interface CrudResult { ok: boolean; error?: string; }

export async function createCategory(name: string, description: string): Promise<CrudResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };
  if (!name.trim()) return { ok: false, error: 'Name is required.' };
  const supabase = supabaseAdmin();
  const now = new Date().toISOString();
  const { error } = await supabase.from('blog_categories').insert({
    id: crypto.randomUUID(),
    name: name.trim(),
    slug: slugify(name),
    description: description.trim() || null,
    createdAt: now,
    updatedAt: now,
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath('/blogger/categories');
  return { ok: true };
}

export async function deleteCategory(id: string): Promise<CrudResult> {
  const session = await getSession();
  if (!session) return { ok: false, error: 'Not authenticated.' };
  const supabase = supabaseAdmin();
  const { error } = await supabase.from('blog_categories').delete().eq('id', id);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/blogger/categories');
  return { ok: true };
}
