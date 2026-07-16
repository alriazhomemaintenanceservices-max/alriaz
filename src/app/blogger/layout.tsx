import type { Metadata } from 'next';
import '../../styles/admin.css';

export const metadata: Metadata = {
  title: 'Blogger — Saudi Home Experts',
  // Admin area must never be indexed.
  robots: { index: false, follow: false },
};

export default function BloggerLayout({ children }: { children: React.ReactNode }) {
  return <div className="bms">{children}</div>;
}
