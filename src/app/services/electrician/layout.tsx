import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'كهربائي الرياض — خدمة كهرباء طوارئ 24/7',
  description:
    'كهربائي محترف في الرياض: إصلاح انقطاع الكهرباء، اللوحات الكهربائية، الإنارة، والتمديدات. وصول خلال ساعة، ضمان على العمل. اتصل: 050 890 1536',
  alternates: { canonical: '/services/electrician/' },
  openGraph: {
    title: 'كهربائي الرياض — خدمة كهرباء طوارئ 24/7',
    description: 'إصلاح انقطاع الكهرباء، اللوحات، الإنارة والتمديدات. وصول خلال ساعة.',
    url: '/services/electrician/',
  },
};

export default function ElectricianLayout({ children }: { children: React.ReactNode }) {
  return children;
}
