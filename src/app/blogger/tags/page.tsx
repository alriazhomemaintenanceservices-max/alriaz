import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import TagsManager from './TagsManager';

export const dynamic = 'force-dynamic';

export default async function TagsPage() {
  const session = await requireSession();
  const supabase = supabaseAdmin();
  const { data } = await supabase.from('blog_tags').select('id,name,slug').order('name');

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <h1 style={{ margin: '0 0 24px', fontSize: '1.5rem' }}>Tags</h1>
      <TagsManager items={(data ?? []) as { id: string; name: string; slug: string }[]} />
    </AdminShell>
  );
}
