import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تكلفة الكهربائي المنزلي بالرياض 2026 — أسعار وعوامل التكلفة',
  description:
    'ما الذي يحدد سعر زيارة الكهربائي في الرياض؟ تعرف على عوامل التكلفة لكل خدمة كهربائية واحصل على تسعيرة دقيقة عبر واتساب. اتصل: 050 890 1536',
  alternates: { canonical: '/services/electrician/cost-riyadh/' },
  openGraph: {
    title: 'تكلفة الكهربائي المنزلي بالرياض 2026',
    description: 'عوامل تحدد سعر زيارة الكهربائي في الرياض، واحصل على تسعيرة دقيقة عبر واتساب.',
    url: '/services/electrician/cost-riyadh/',
  },
};

export default function ElectricianCostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
