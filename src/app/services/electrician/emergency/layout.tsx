import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'كهربائي طوارئ الرياض — يصل خلال 60 دقيقة | خبراء المنزل السعودي',
  description:
    'انقطاع كهرباء مفاجئ أو شرارة أو رائحة احتراق؟ كهربائي طوارئ في الرياض متاح 24/7، يصل خلال ساعة. اتصل الآن: 050 890 1536',
  alternates: { canonical: '/services/electrician/emergency/' },
  openGraph: {
    title: 'كهربائي طوارئ الرياض — يصل خلال 60 دقيقة',
    description: 'خدمة كهربائي طوارئ على مدار الساعة في الرياض. اتصل أو أرسل صورة العطل عبر واتساب.',
    url: '/services/electrician/emergency/',
  },
};

export default function ElectricianEmergencyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
