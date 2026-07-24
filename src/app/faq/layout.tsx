import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة — خبراء المنزل السعودي',
  description:
    'إجابات عن أسئلة التغطية والأسعار والضمان والحجز لخدمات الكهرباء والسباكة والانتركوم في الرياض. اتصل: 050 890 1536',
  alternates: { canonical: '/faq/' },
  openGraph: {
    title: 'الأسئلة الشائعة — خبراء المنزل السعودي',
    description: 'إجابات سريعة عن التغطية والأسعار والضمان والحجز.',
    url: '/faq/',
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
