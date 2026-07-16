'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobileCTA from '@/components/layout/StickyMobileCTA';
import FloatingActions from '@/components/layout/FloatingActions';

// Renders the marketing header/footer/CTAs around public pages, but NOT around
// the /blogger admin area, which supplies its own chrome.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  const isAdmin = pathname === '/blogger' || pathname.startsWith('/blogger/');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyMobileCTA />
      <FloatingActions />
    </>
  );
}
