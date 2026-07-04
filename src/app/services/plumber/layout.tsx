import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سباك الرياض — إصلاح تسريبات وتسليك مجاري 24/7',
  description:
    'سباك محترف في الرياض: كشف وإصلاح تسربات المياه، تسليك المجاري، السخانات، والخلاطات. خدمة سريعة وضمان. اتصل: 050 890 1536',
  alternates: { canonical: '/services/plumber/' },
  openGraph: {
    title: 'سباك الرياض — إصلاح تسريبات وتسليك مجاري 24/7',
    description: 'كشف تسربات، تسليك مجاري، سخانات وخلاطات. خدمة سريعة وضمان.',
    url: '/services/plumber/',
  },
};

export default function PlumberLayout({ children }: { children: React.ReactNode }) {
  return children;
}
