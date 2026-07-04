import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تواصل معنا — اتصل أو راسلنا واتساب',
  description:
    'تواصل مع خبراء المنزل السعودي في الرياض. اتصل على 050 890 1536 أو راسلنا واتساب — نصلك خلال ساعة، متوفرون 24/7.',
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: 'تواصل معنا — خبراء المنزل السعودي',
    description: 'اتصل على 050 890 1536 أو راسلنا واتساب. متوفرون 24/7.',
    url: '/contact/',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
