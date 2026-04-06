'use client';

import { Phone, Camera } from 'lucide-react';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';

declare global {
  interface Window {
    gtag: any;
  }
}

export default function StickyMobileCTA() {
  const { t, language } = useTranslation();

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18063458010/PHONE_CONVERSION',
        'value': 50.0,
        'currency': 'SAR',
        'event_callback': () => {
          console.log('Phone conversion tracked');
        }
      });
    }
  };

  return (
    <div className="sticky-cta">
      <Button
        href="tel:0508901536"
        variant="emergency"
        icon={<Phone size={16} />}
        onClick={trackPhoneClick}
        fullWidth
      >
        {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
      </Button>
      <Button
        href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-photo-message'))}`}
        variant="whatsapp"
        icon={<Camera size={16} />}
        external
        fullWidth
      >
        {t('send-photo')}
      </Button>
    </div>
  );
}
