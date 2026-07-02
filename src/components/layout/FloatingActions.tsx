'use client';

import { Phone } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';

const PHONE = '+966508901536';

/**
 * Sticky floating action buttons (bottom-right): Call + WhatsApp.
 * Hidden on mobile via CSS, where the sticky bottom CTA bar already offers both.
 */
export default function FloatingActions() {
  const { t } = useTranslation();

  return (
    <div className="floating-actions">
      <a
        href={`tel:${PHONE}`}
        className="fab fab-call"
        aria-label={t('call-now')}
        onClick={() => trackPhoneClick('floating')}
      >
        <Phone size={26} />
      </a>
      <a
        href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-photo-message'))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fab fab-whatsapp"
        aria-label="WhatsApp"
        onClick={() => trackWhatsAppClick('floating')}
      >
        <WhatsAppSvg size={30} />
      </a>
    </div>
  );
}
