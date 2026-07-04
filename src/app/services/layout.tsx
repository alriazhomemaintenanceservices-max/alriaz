import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خدماتنا — كهربائي وسباك وانتركوم في الرياض',
  description:
    'خدمات خبراء المنزل السعودي في الرياض: كهربائي، سباك، وأنظمة انتركوم وكاميرات. خدمة فورية 24/7 ووصول خلال ساعة. اتصل: 050 890 1536',
  alternates: { canonical: '/services/' },
  openGraph: {
    title: 'خدماتنا — كهربائي وسباك وانتركوم في الرياض',
    description: 'كهربائي، سباك، وأنظمة انتركوم وكاميرات. خدمة فورية 24/7.',
    url: '/services/',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
