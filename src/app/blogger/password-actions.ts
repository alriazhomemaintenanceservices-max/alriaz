'use server';

import crypto from 'node:crypto';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/server';
import { hashPassword } from '@/lib/auth/password';
import type { Blogger, PasswordResetToken } from '@/lib/types/db';

export interface ResetState {
  error?: string;
  success?: string;
}

const RESET_TTL_MS = 60 * 60 * 1000; // 1 hour

function sha256(value: string): string {
  return crypto.createHash('sha256').update(value).digest('hex');
}

const emailSchema = z.object({ email: z.string().email() });

/**
 * Step 1 — request a reset link. Always reports success (no account enumeration).
 * Email transport is not wired yet: the reset URL is logged server-side. Swap the
 * console.log for your email provider (Resend/SES/SMTP) later.
 */
export async function requestPasswordReset(
  _prev: ResetState,
  formData: FormData,
): Promise<ResetState> {
  const parsed = emailSchema.safeParse({ email: formData.get('email') });
  const generic = { success: 'If an account exists for that email, a reset link has been sent.' };
  if (!parsed.success) return generic;

  const email = parsed.data.email.toLowerCase().trim();
  const supabase = supabaseAdmin();

  const { data } = await supabase
    .from('bloggers')
    .select('*')
    .eq('email', email)
    .maybeSingle();
  const blogger = data as Blogger | null;

  if (blogger && blogger.status === 'ACTIVE') {
    const token = crypto.randomBytes(32).toString('hex');
    await supabase.from('password_reset_tokens').insert({
      id: crypto.randomUUID(),
      bloggerId: blogger.id,
      tokenHash: sha256(token),
      expiresAt: new Date(Date.now() + RESET_TTL_MS).toISOString(),
      createdAt: new Date().toISOString(),
    });
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const link = `${base}/blogger/reset-password/?token=${token}`;
    // TODO(email): send this via your email provider instead of logging.
    console.log(`[password-reset] ${email} -> ${link}`);
  }

  return generic;
}

const resetSchema = z
  .object({
    token: z.string().min(10),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, {
    message: 'Passwords do not match.',
    path: ['confirm'],
  });

/** Step 2 — consume the token and set a new password. */
export async function resetPassword(
  _prev: ResetState,
  formData: FormData,
): Promise<ResetState> {
  const parsed = resetSchema.safeParse({
    token: formData.get('token'),
    password: formData.get('password'),
    confirm: formData.get('confirm'),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || 'Invalid input.' };
  }

  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('password_reset_tokens')
    .select('*')
    .eq('tokenHash', sha256(parsed.data.token))
    .maybeSingle();
  const record = data as PasswordResetToken | null;

  if (!record || record.usedAt || new Date(record.expiresAt) < new Date()) {
    return { error: 'This reset link is invalid or has expired. Request a new one.' };
  }

  const [{ error: e1 }, { error: e2 }] = await Promise.all([
    supabase
      .from('bloggers')
      .update({ password: await hashPassword(parsed.data.password) })
      .eq('id', record.bloggerId),
    supabase
      .from('password_reset_tokens')
      .update({ usedAt: new Date().toISOString() })
      .eq('id', record.id),
  ]);
  if (e1 || e2) {
    return { error: 'Could not update your password. Please try again.' };
  }

  redirect('/blogger/login?reset=1');
}
