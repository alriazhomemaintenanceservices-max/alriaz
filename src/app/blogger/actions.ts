'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase/server';
import { verifyPassword } from '@/lib/auth/password';
import { createSession, destroySession } from '@/lib/auth/session';
import type { Blogger } from '@/lib/types/db';

export interface AuthState {
  error?: string;
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function loginAction(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });
  if (!parsed.success) {
    return { error: 'Enter a valid email and password.' };
  }

  const email = parsed.data.email.toLowerCase().trim();
  const supabase = supabaseAdmin();

  const { data, error } = await supabase
    .from('bloggers')
    .select('*')
    .eq('email', email)
    .maybeSingle();

  if (error) {
    console.error('login lookup failed:', error.message);
    return { error: 'Something went wrong. Please try again.' };
  }

  const blogger = data as Blogger | null;

  // Same message whether the email or the password is wrong.
  if (!blogger || !(await verifyPassword(parsed.data.password, blogger.password))) {
    return { error: 'Invalid email or password.' };
  }
  if (blogger.status !== 'ACTIVE') {
    return { error: 'This account is disabled. Please contact an administrator.' };
  }

  await supabase
    .from('bloggers')
    .update({ lastLogin: new Date().toISOString() })
    .eq('id', blogger.id);

  await createSession({
    sub: blogger.id,
    email: blogger.email,
    name: blogger.name,
    role: blogger.role,
  });

  // redirect() throws — keep it outside any try/catch.
  redirect('/blogger/dashboard');
}

export async function logoutAction(): Promise<void> {
  await destroySession();
  redirect('/blogger/login');
}
