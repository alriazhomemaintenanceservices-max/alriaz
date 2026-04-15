'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ background: 'var(--dark)', color: 'white', padding: '32px 0' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-3" style={{ gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>
              {t('saudi-home-experts-full')}
            </h3>
            <p style={{ color: '#9CA3AF' }}>
              {t('professional-service-desc')}
            </p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>
              {t('our-services')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, color: '#9CA3AF' }}>
              <li style={{ marginBottom: '8px' }}>
                <Link
                  href="/services/electrician/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('electrician-riyadh')}
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link
                  href="/services/plumber/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('plumber-riyadh')}
                </Link>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <Link
                  href="/services/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('emergency-service-24')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {t('contact-us')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '12px' }}>
              {t('contact-us')}
            </h4>
            <div style={{ color: '#9CA3AF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Phone size={16} />
                <a 
                  href="tel:+966508901536" 
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  <span dir="ltr">050 890 1536</span>
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={16} />
                <span>{t('riyadh-saudi')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} />
                <span>{t('available-247-prayers')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #374151', 
          marginTop: '32px', 
          paddingTop: '32px', 
          textAlign: 'center', 
          color: '#9CA3AF' 
        }}>
          <p>{t('rights-reserved')}</p>
        </div>
      </div>
    </footer>
  );
}