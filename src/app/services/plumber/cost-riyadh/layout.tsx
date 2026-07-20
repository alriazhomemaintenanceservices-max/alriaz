import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أسعار السباك بالرياض 2026 — تسليك، تسريبات، سخانات',
  description:
    'ما الذي يحدد سعر خدمة السباكة في الرياض؟ تعرف على عوامل التكلفة لتسليك المجاري وإصلاح التسريبات وتركيب السخانات، واحصل على تسعيرة عبر واتساب. اتصل: 050 890 1536',
  alternates: { canonical: '/services/plumber/cost-riyadh/' },
  openGraph: {
    title: 'أسعار السباك بالرياض 2026',
    description: 'عوامل تحدد سعر خدمة السباكة في الرياض، واحصل على تسعيرة دقيقة عبر واتساب.',
    url: '/services/plumber/cost-riyadh/',
  },
};

export default function PlumberCostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
