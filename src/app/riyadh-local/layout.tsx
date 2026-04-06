import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'كهربائي وسباك الرياض - خدمة فورية 24/7 | خبراء المنزل السعودي',
  description: 'كهربائي وسباك في شمال الرياض. فني يصلك خلال ساعة. أسعار واضحة. خدمة 24/7. النرجس، الياسمين، قرطبة، غرناطة. اتصل: 050 890 1536',
  keywords: 'كهربائي الرياض, سباك الرياض, كهربائي النرجس, سباك الياسمين, كهربائي قرطبة, سباك غرناطة, صيانة منزلية الرياض',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'كهربائي وسباك الرياض - وصول خلال ساعة',
    description: 'خدمة كهربائي وسباك فورية في شمال الرياض. أسعار معقولة. متوفر 24/7',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function RiyadhLocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}