import Link from 'next/link';
import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';

// Needs the session cookie + live data — never prerender.
export const dynamic = 'force-dynamic';

const STATUS_BADGE: Record<string, string> = {
  DRAFT: 'bms-badge-draft',
  SCHEDULED: 'bms-badge-scheduled',
  PUBLISHED: 'bms-badge-published',
};

interface RecentRow {
  id: string;
  status: keyof typeof STATUS_BADGE;
  updatedAt: string;
  category: { name: string } | null;
  translations: { title: string; locale: string }[];
}

async function countPosts(status?: string): Promise<number> {
  const supabase = supabaseAdmin();
  let q = supabase.from('blog_posts').select('id', { count: 'exact', head: true });
  if (status) q = q.eq('status', status);
  const { count } = await q;
  return count ?? 0;
}

export default async function DashboardPage() {
  const session = await requireSession();
  const supabase = supabaseAdmin();

  const [total, published, draft, scheduled] = await Promise.all([
    countPosts(),
    countPosts('PUBLISHED'),
    countPosts('DRAFT'),
    countPosts('SCHEDULED'),
  ]);

  const { data: viewRows } = await supabase.from('blog_posts').select('views');
  const totalViews = (viewRows ?? []).reduce((sum, r) => sum + (r.views as number ?? 0), 0);

  const { data: recentData } = await supabase
    .from('blog_posts')
    .select('id,status,updatedAt,category:blog_categories(name),translations:blog_translations(title,locale)')
    .order('updatedAt', { ascending: false })
    .limit(10);
  const recent = (recentData ?? []) as unknown as RecentRow[];

  const cards = [
    { label: 'Total Posts', value: total },
    { label: 'Published', value: published },
    { label: 'Drafts', value: draft },
    { label: 'Scheduled', value: scheduled },
    { label: 'Total Views', value: totalViews },
  ];

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Dashboard</h1>
        <Link href="/blogger/posts/new" className="bms-btn bms-btn-primary">Write Post</Link>
      </div>

      <div className="bms-stat-grid">
        {cards.map((c) => (
          <div key={c.label} className="bms-card bms-stat">
            <div className="bms-stat-label">{c.label}</div>
            <div className="bms-stat-value">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="bms-card" style={{ padding: 20 }}>
        <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>Latest posts</h2>
        {recent.length === 0 ? (
          <p style={{ color: 'var(--bms-muted)' }}>
            No posts yet. <Link href="/blogger/posts/new">Write your first post →</Link>
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="bms-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>Updated</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((post) => {
                  const t = post.translations.find((x) => x.locale === 'AR') ?? post.translations[0];
                  return (
                    <tr key={post.id}>
                      <td>
                        <Link href={`/blogger/posts/${post.id}`}>{t?.title || '(untitled)'}</Link>
                      </td>
                      <td>
                        <span className={`bms-badge ${STATUS_BADGE[post.status]}`}>
                          {post.status.toLowerCase()}
                        </span>
                      </td>
                      <td>{post.category?.name || '—'}</td>
                      <td>{new Date(post.updatedAt).toLocaleDateString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
