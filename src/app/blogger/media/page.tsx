import { requireSession } from '@/lib/auth/session';
import AdminShell from '@/components/blogger/AdminShell';

export const dynamic = 'force-dynamic';

export default async function MediaPage() {
  const session = await requireSession();
  return (
    <AdminShell role={session.role} name={session.name || session.email}>
      <h1 style={{ margin: '0 0 24px', fontSize: '1.5rem' }}>Media</h1>
      <div className="bms-card" style={{ padding: 32, textAlign: 'center', color: 'var(--bms-muted)' }}>
        <p style={{ margin: 0 }}>Media library with Supabase Storage uploads (crop, compression, WebP + thumbnail) is coming next.</p>
      </div>
    </AdminShell>
  );
}
