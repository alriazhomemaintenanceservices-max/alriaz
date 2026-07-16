import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import CategoriesManager from './CategoriesManager';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const session = await requireSession();
  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('blog_categories')
    .select('id,name,slug,description')
    .order('name');

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <h1 style={{ margin: '0 0 24px', fontSize: '1.5rem' }}>Categories</h1>
      <CategoriesManager items={(data ?? []) as { id: string; name: string; slug: string; description: string | null }[]} />
    </AdminShell>
  );
}
