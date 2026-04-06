import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ElectricianAreaPage from '@/components/area-pages/ElectricianAreaPage';

// Area data matching homepage
const AREAS = [
  { name: 'النرجس', slug: 'narjis', english: 'Al-Narjis' },
  { name: 'الياسمين', slug: 'yasmin', english: 'Al-Yasmin' },
  { name: 'قرطبة', slug: 'qurtubah', english: 'Qurtubah' },
  { name: 'غرناطة', slug: 'granada', english: 'Granada' },
  { name: 'الفلاح', slug: 'falah', english: 'Al-Falah' },
  { name: 'الندى', slug: 'nada', english: 'Al-Nada' },
  { name: 'الربيع', slug: 'rabee', english: 'Al-Rabee' },
  { name: 'اشبيلية', slug: 'ishbiliyah', english: 'Ishbiliyah' },
  { name: 'حطين', slug: 'hittin', english: 'Hittin' },
  { name: 'الملقا', slug: 'malqa', english: 'Al-Malqa' },
  { name: 'العقيق', slug: 'aqiq', english: 'Al-Aqiq' },
  { name: 'القيروان', slug: 'qirawan', english: 'Al-Qirawan' },
];

const SERVICES = {
  'كهربائي': { arabic: 'كهربائي', english: 'electrician', type: 'electrician' },
  'سباك': { arabic: 'سباك', english: 'plumber', type: 'plumber' },
  'انتركوم': { arabic: 'انتركوم', english: 'intercom', type: 'intercom' },
};

interface Props {
  params: { service: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceParam } = await params;
  const decodedService = decodeURIComponent(serviceParam);
  
  // Parse service-area from URL
  const parts = decodedService.split('-');
  if (parts.length !== 2) return { title: 'صفحة غير موجودة' };
  
  const [serviceArabic, areaSlug] = parts;
  
  const service = SERVICES[serviceArabic as keyof typeof SERVICES];
  const area = AREAS.find(a => a.slug === areaSlug);
  
  if (!service || !area) return { title: 'صفحة غير موجودة' };
  
  return {
    title: `${service.arabic} ${area.name} الرياض | خدمة 24 ساعة | السعودية 2026`,
    description: `أفضل ${service.arabic} في ${area.name} الرياض. خدمة سريعة خلال ساعة، فريق باكستاني-سعودي محترف. اتصل الآن 050 890 1536`,
    alternates: {
      canonical: `https://saudihomeexperts.com/${decodedService}`,
      languages: {
        'ar-SA': `https://saudihomeexperts.com/${decodedService}`,
        'en': `https://saudihomeexperts.com/${service.english}-${areaSlug}`
      }
    },
    openGraph: {
      title: `${service.arabic} ${area.name} | خدمة احترافية 24/7`,
      description: `${service.arabic} محترف في ${area.name} الرياض. أسعار عادلة، خدمة سريعة، ضمان الجودة.`,
      url: `https://saudihomeexperts.com/${decodedService}`,
      siteName: 'خبراء المنزل السعودي',
      locale: 'ar_SA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.arabic} ${area.name} الرياض`,
      description: `خدمة ${service.arabic} احترافية في ${area.name}. اتصل الآن للحصول على خدمة سريعة.`,
    }
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { service: serviceParam } = await params;
  const decodedService = decodeURIComponent(serviceParam);
  
  // Parse service-area from URL
  const parts = decodedService.split('-');
  if (parts.length !== 2) notFound();
  
  const [serviceArabic, areaSlug] = parts;
  
  const service = SERVICES[serviceArabic as keyof typeof SERVICES];
  const area = AREAS.find(a => a.slug === areaSlug);
  
  if (!service || !area) notFound();

  // Only render electrician pages for now
  if (service.type === 'electrician') {
    return <ElectricianAreaPage area={area} service={service} />;
  }
  
  // Placeholder for other services
  notFound();
}

export async function generateStaticParams() {
  const params = [];
  
  // Generate all electrician pages first
  for (const area of AREAS) {
    params.push({
      service: `كهربائي-${area.slug}`,
    });
  }
  
  return params;
}