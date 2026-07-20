import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سباك طوارئ الرياض — تسريب مياه؟ نصل خلال ساعة | خبراء المنزل السعودي',
  description:
    'انفجار ماسورة أو تسريب مياه مفاجئ؟ سباك طوارئ في الرياض متاح 24/7، يصل خلال ساعة. اتصل الآن: 050 890 1536',
  alternates: { canonical: '/services/plumber/emergency/' },
  openGraph: {
    title: 'سباك طوارئ الرياض — تسريب مياه؟ نصل خلال ساعة',
    description: 'خدمة سباك طوارئ على مدار الساعة في الرياض. اتصل أو أرسل صورة التسريب عبر واتساب.',
    url: '/services/plumber/emergency/',
  },
};

export default function PlumberEmergencyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
