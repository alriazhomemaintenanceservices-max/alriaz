'use client';

import { Phone } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';

export default function StickyMobileCTA() {
  const { t, language } = useTranslation();

  return (
    <div className="sticky-cta">
      <Button
        href="tel:+966508901536"
        variant="emergency"
        icon={<Phone size={16} />}
        onClick={() => trackPhoneClick('sticky-cta')}
        fullWidth
      >
        {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
      </Button>
      <Button
        href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-photo-message'))}`}
        variant="whatsapp"
        icon={<WhatsAppSvg size={16} />}
        onClick={() => trackWhatsAppClick('sticky-cta')}
        external
        fullWidth
      >
        {t('send-photo')}
      </Button>
    </div>
  );
}
