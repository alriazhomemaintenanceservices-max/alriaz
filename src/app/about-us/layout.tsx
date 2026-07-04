import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن — فريق باكستاني سعودي محترف',
  description:
    'خبراء المنزل السعودي — فريق فنيين باكستاني-سعودي محترف يخدم أحياء شمال الرياض. خبرة، ضمان، واحترام لأوقات الصلاة. اتصل: 050 890 1536',
  alternates: { canonical: '/about-us/' },
  openGraph: {
    title: 'من نحن — خبراء المنزل السعودي',
    description: 'فريق فنيين محترف يخدم أحياء شمال الرياض بخبرة وضمان.',
    url: '/about-us/',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
