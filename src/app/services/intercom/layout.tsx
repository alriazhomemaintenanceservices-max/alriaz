import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'انتركوم وكاميرات مراقبة الرياض — تركيب وصيانة',
  description:
    'تركيب وصيانة أنظمة الانتركوم، كاميرات المراقبة، الأجراس الذكية وأنظمة التحكم بالدخول في الرياض. فنيون معتمدون. اتصل: 050 890 1536',
  alternates: { canonical: '/services/intercom/' },
  openGraph: {
    title: 'انتركوم وكاميرات مراقبة الرياض — تركيب وصيانة',
    description: 'انتركوم، كاميرات مراقبة، أجراس ذكية وأنظمة تحكم بالدخول.',
    url: '/services/intercom/',
  },
};

export default function IntercomLayout({ children }: { children: React.ReactNode }) {
  return children;
}
