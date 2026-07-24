import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أسعار تركيب الانتركوم بالرياض 2026 — صوت وفيديو',
  description:
    'ما الذي يحدد سعر تركيب الانتركوم في الرياض؟ تعرف على عوامل التكلفة لأنظمة الصوت والفيديو والكاميرات، واحصل على عرض سعر عبر واتساب. اتصل: 050 890 1536',
  alternates: { canonical: '/services/intercom/cost-riyadh/' },
  openGraph: {
    title: 'أسعار تركيب الانتركوم بالرياض 2026',
    description: 'عوامل تحدد سعر تركيب الانتركوم في الرياض، واحصل على عرض سعر عبر واتساب.',
    url: '/services/intercom/cost-riyadh/',
  },
};

export default function IntercomCostLayout({ children }: { children: React.ReactNode }) {
  return children;
}
