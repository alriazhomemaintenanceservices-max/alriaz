import Link from 'next/link';
import { requireSession } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';
import PostRowActions from '@/components/blogger/PostRowActions';

export const dynamic = 'force-dynamic';

const STATUS_BADGE: Record<string, string> = {
  DRAFT: 'bms-badge-draft',
  SCHEDULED: 'bms-badge-scheduled',
  PUBLISHED: 'bms-badge-published',
};

interface Row {
  id: string;
  status: keyof typeof STATUS_BADGE;
  updatedAt: string;
  category: { name: string } | null;
  featuredMedia: { thumbnailUrl: string | null } | null;
  translations: { title: string; locale: string; slug: string }[];
}

export default async function PostsPage() {
  const session = await requireSession();
  const supabase = supabaseAdmin();

  const { data } = await supabase
    .from('blog_posts')
    .select('id,status,updatedAt,category:blog_categories(name),featuredMedia:blog_media(thumbnailUrl),translations:blog_translations(title,locale,slug)')
    .order('updatedAt', { ascending: false });
  const rows = (data ?? []) as unknown as Row[];

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <div className="bms-between" style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>All posts</h1>
        <Link href="/blogger/posts/new" className="bms-btn bms-btn-primary">Write Post</Link>
      </div>

      <div className="bms-card" style={{ padding: 20 }}>
        {rows.length === 0 ? (
          <p style={{ color: 'var(--bms-muted)' }}>
            No posts yet. <Link href="/blogger/posts/new">Write your first post →</Link>
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="bms-table">
              <thead>
                <tr>
                  <th style={{ width: 64 }}></th>
                  <th>Title (Arabic)</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th>English</th>
                  <th>Updated</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => {
                  const ar = p.translations.find((x) => x.locale === 'AR') ?? p.translations[0];
                  const en = p.translations.find((x) => x.locale === 'EN');
                  const thumb = p.featuredMedia?.thumbnailUrl;
                  return (
                    <tr key={p.id}>
                      <td>
                        {thumb ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={thumb} alt="" width={48} height={32} style={{ objectFit: 'cover', borderRadius: 6, display: 'block' }} />
                        ) : (
                          <div style={{ width: 48, height: 32, borderRadius: 6, background: '#eef2f7' }} />
                        )}
                      </td>
                      <td><Link href={`/blogger/posts/${p.id}`}>{ar?.title || '(untitled)'}</Link></td>
                      <td><span className={`bms-badge ${STATUS_BADGE[p.status]}`}>{p.status.toLowerCase()}</span></td>
                      <td>{p.category?.name || '—'}</td>
                      <td>
                        {en ? (
                          <Link href={`/blogger/posts/${p.id}/english`} style={{ fontWeight: 600 }}>Preview EN</Link>
                        ) : (
                          <span style={{ color: 'var(--bms-muted)' }}>— not translated</span>
                        )}
                      </td>
                      <td>{new Date(p.updatedAt).toLocaleDateString()}</td>
                      <td><PostRowActions postId={p.id} /></td>
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
