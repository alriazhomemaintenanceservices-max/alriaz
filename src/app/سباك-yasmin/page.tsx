import { Metadata } from 'next';
import ElectricianAreaPage from '@/components/area-pages/ElectricianAreaPage';

const area = { name: 'الياسمين', slug: 'yasmin', english: 'Al-Yasmin' };
const service = { arabic: 'سباك', english: 'plumber', type: 'plumber' };

export const metadata: Metadata = {
  title: `${service.arabic} ${area.name} الرياض | خدمة 24 ساعة | السعودية 2026`,
  description: `أفضل ${service.arabic} في ${area.name} الرياض. خدمة سريعة خلال ساعة، فريق باكستاني-سعودي محترف. اتصل الآن 050 890 1536`,
  alternates: {
    canonical: `https://saudihomeexperts.com/سباك-yasmin`,
    languages: {
      'ar-SA': `https://saudihomeexperts.com/سباك-yasmin`,
      'en': `https://saudihomeexperts.com/plumber-yasmin`
    }
  },
  openGraph: {
    title: `${service.arabic} ${area.name} | خدمة احترافية 24/7`,
    description: `${service.arabic} محترف في ${area.name} الرياض. أسعار عادلة، خدمة سريعة، ضمان الجودة.`,
    url: `https://saudihomeexperts.com/سباك-yasmin`,
    siteName: 'خبراء المنزل السعودي',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function PlumberAlYasminPage() {
  return <ElectricianAreaPage area={area} service={service} />;
}
