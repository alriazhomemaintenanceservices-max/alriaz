'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  FolderTree,
  Tags,
  Image as ImageIcon,
  Users,
  LogOut,
} from 'lucide-react';
import Logo from '@/components/shared/Logo';
import { logoutAction } from '@/app/blogger/actions';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  adminOnly?: boolean;
}

const NAV: NavItem[] = [
  { href: '/blogger/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/blogger/posts', label: 'All Posts', icon: <FileText size={18} /> },
  { href: '/blogger/posts/new', label: 'Write Post', icon: <PlusCircle size={18} /> },
  { href: '/blogger/categories', label: 'Categories', icon: <FolderTree size={18} /> },
  { href: '/blogger/tags', label: 'Tags', icon: <Tags size={18} /> },
  { href: '/blogger/media', label: 'Media', icon: <ImageIcon size={18} /> },
  { href: '/blogger/bloggers', label: 'Bloggers', icon: <Users size={18} />, adminOnly: true },
];

export default function AdminShell({
  role,
  name,
  children,
}: {
  role: 'ADMIN' | 'EDITOR' | 'AUTHOR';
  name: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '';
  const items = NAV.filter((i) => !i.adminOnly || role === 'ADMIN');

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <div className="bms-shell">
      <aside className="bms-sidebar">
        <Link href="/blogger/dashboard" className="bms-brand" style={{ textDecoration: 'none' }}>
          <Logo size={34} dark />
        </Link>
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`bms-nav-link${isActive(item.href) ? ' active' : ''}`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
        <div className="bms-sidebar-footer">
          <form action={logoutAction}>
            <button type="submit" className="bms-nav-link" style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer' }}>
              <LogOut size={18} />
              Sign out
            </button>
          </form>
        </div>
      </aside>

      <div className="bms-main">
        <header className="bms-topbar">
          <strong>{roleLabel(role)} panel</strong>
          <span style={{ color: 'var(--bms-muted)', fontSize: '0.9rem' }}>{name}</span>
        </header>
        <div className="bms-content">{children}</div>
      </div>
    </div>
  );
}

function roleLabel(role: string) {
  return role.charAt(0) + role.slice(1).toLowerCase();
}
