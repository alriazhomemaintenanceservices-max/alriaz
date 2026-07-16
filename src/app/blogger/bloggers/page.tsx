import { requireRole } from '@/lib/auth/session';
import { supabaseAdmin } from '@/lib/supabase/server';
import AdminShell from '@/components/blogger/AdminShell';

export const dynamic = 'force-dynamic';

interface BloggerRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string | null;
}

export default async function BloggersPage() {
  const session = await requireRole(['ADMIN']);
  const supabase = supabaseAdmin();
  const { data } = await supabase
    .from('bloggers')
    .select('id,name,email,role,status,lastLogin')
    .order('createdAt', { ascending: true });
  const rows = (data ?? []) as BloggerRow[];

  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <h1 style={{ margin: '0 0 24px', fontSize: '1.5rem' }}>Bloggers</h1>
      <div className="bms-card" style={{ padding: 20 }}>
        <table className="bms-table">
          <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Last login</th></tr></thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.role}</td>
                <td>{b.status}</td>
                <td>{b.lastLogin ? new Date(b.lastLogin).toLocaleString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="bms-help" style={{ marginTop: 16 }}>
          Create / edit / disable bloggers and reset passwords — management actions coming next.
        </p>
      </div>
    </AdminShell>
  );
}
