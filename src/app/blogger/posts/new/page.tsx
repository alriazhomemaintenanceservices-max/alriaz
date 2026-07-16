import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import PostForm from '@/components/blogger/PostForm';

export const dynamic = 'force-dynamic';

export default async function NewPostPage() {
  const session = await requireSession();
  const supabase = supabaseAdmin();
  const { data: categories } = await supabase
    .from('blog_categories')
    .select('id,name')
    .order('name');

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <PostForm categories={(categories ?? []) as { id: string; name: string }[]} />
    </AdminShell>
  );
}
