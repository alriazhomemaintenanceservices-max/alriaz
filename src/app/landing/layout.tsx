import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './landing.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Gold lightning-bolt favicon as inline SVG data URI
const FAVICON_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23C9A84C' d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: 'كهربائي وسباك في السعودية - صيانة فورية 24 ساعة | سعودي هوم إكسبيرتس',
  description:
    'خدمة صيانة منزلية احترافية في الرياض وجميع مدن المملكة. كهربائي، سباك، إنترفون - فني عندك خلال 45 دقيقة. اتصل: 050 890 1536',
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: FAVICON_SVG, type: 'image/svg+xml' }],
  },
  openGraph: {
    title: 'فني منزلي في السعودية خلال 45 دقيقة | سعودي هوم إكسبيرتس',
    description: 'كهربائي · سباك · إنترفون · 24/7 · 5000+ عميل · ضمان 30 يوم · اتصل: 050 890 1536',
    siteName: 'Saudi Home Experts',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    // This div wraps children inside the root layout's <body>.
    // Root layout detects /landing and skips nav/footer (see app/layout.tsx).
    <div className={`lp-root ${dmSans.variable}`}>
      {children}
    </div>
  );
}
