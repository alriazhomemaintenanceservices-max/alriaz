import { Metadata } from 'next';
import ElectricianAreaPage from '@/components/area-pages/ElectricianAreaPage';

const area = { name: 'الندى', slug: 'nada', english: 'Al-Nada' };
const service = { arabic: 'سباك', english: 'plumber', type: 'plumber' };

export const metadata: Metadata = {
  title: `${service.arabic} ${area.name} الرياض | خدمة 24 ساعة | السعودية 2026`,
  description: `أفضل ${service.arabic} في ${area.name} الرياض. خدمة سريعة خلال ساعة، فريق باكستاني-سعودي محترف. اتصل الآن 050 890 1536`,
  alternates: {
    canonical: `https://saudihomeexperts.com/سباك-nada`,
    languages: {
      'ar-SA': `https://saudihomeexperts.com/سباك-nada`,
      'en': `https://saudihomeexperts.com/plumber-nada`
    }
  },
  openGraph: {
    title: `${service.arabic} ${area.name} | خدمة احترافية 24/7`,
    description: `${service.arabic} محترف في ${area.name} الرياض. أسعار عادلة، خدمة سريعة، ضمان الجودة.`,
    url: `https://saudihomeexperts.com/سباك-nada`,
    siteName: 'خبراء المنزل السعودي',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function PlumberAlNadaPage() {
  return <ElectricianAreaPage area={area} service={service} />;
}
