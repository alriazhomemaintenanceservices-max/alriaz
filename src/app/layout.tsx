import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import "../styles/globals.css";
import SiteChrome from '@/components/layout/SiteChrome';
import LanguageProvider from '@/components/layout/LanguageProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saudihomeexperts.com'),
  title: 'كهربائي وسباك الرياض - خدمة فورية 24/7 | خبراء المنزل السعودي',
  description:
    'كهربائي وسباك في الرياض. خدمة فورية 24/7. إصلاح الأعطال الكهربائية وتسليك المجاري وإصلاح التسريبات. النرجس، الياسمين، قرطبة، غرناطة. اتصل: 050 890 1536',
  keywords:
    'كهربائي الرياض, سباك الرياض, صيانة منزلية, إصلاح كهرباء, تسليك مجاري, كهربائي النرجس, سباك الياسمين',
  applicationName: 'خبراء المنزل السعودي',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'خبراء المنزل السعودي',
    url: '/',
    title: 'كهربائي وسباك الرياض - خدمة فورية 24/7',
    description: 'خدمة كهربائي وسباك احترافية في الرياض. وصول خلال ساعة. متوفر 24/7.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كهربائي وسباك الرياض - خدمة فورية 24/7',
    description: 'وصول خلال ساعة. متوفر 24/7. اتصل: 050 890 1536',
  },
};

// Global Organization + LocalBusiness + WebSite JSON-LD. Appears on every page
// so AI answer engines (ChatGPT, Perplexity, Google AI Overviews) and crawlers
// can extract phone, location, and entity identity from any URL on the site.
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://saudihomeexperts.com/#organization",
      "name": "خبراء المنزل السعودي",
      "alternateName": "Saudi Home Experts",
      "url": "https://saudihomeexperts.com/",
      "logo": "https://saudihomeexperts.com/icon.png",
      "telephone": "+966508901536",
      "email": "info@saudihomeexperts.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
      },
      "areaServed": { "@type": "City", "name": "Riyadh" },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966508901536",
        "contactType": "customer service",
        "areaServed": "SA",
        "availableLanguage": ["Arabic", "English"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://saudihomeexperts.com/#localbusiness",
      "name": "خبراء المنزل السعودي",
      "alternateName": "Saudi Home Experts",
      "url": "https://saudihomeexperts.com/",
      "image": "https://saudihomeexperts.com/icon.png",
      "telephone": "+966508901536",
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
        "addressCountry": "SA"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "24.7136", "longitude": "46.6753" },
      "areaServed": { "@type": "City", "name": "Riyadh" }
    },
    {
      "@type": "WebSite",
      "@id": "https://saudihomeexperts.com/#website",
      "url": "https://saudihomeexperts.com/",
      "name": "خبراء المنزل السعودي",
      "publisher": { "@id": "https://saudihomeexperts.com/#organization" },
      "inLanguage": "ar-SA"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" translate="no" className={`${cairo.variable} ${inter.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-18063458010" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18063458010');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* JSON-LD: organization, local business, website. Static literal, no user input. */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      {/* suppressHydrationWarning: browser extensions (Grammarly, etc.) inject
          attributes on <body> before hydration; harmless mismatch. */}
      <body style={{ margin: 0, padding: 0 }} suppressHydrationWarning>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
