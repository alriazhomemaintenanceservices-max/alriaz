'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';

export default function ContactPage() {
  const { t, language } = useTranslation();

  const trackPhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18063458010/PHONE_CONVERSION',
        'value': 50.0,
        'currency': 'SAR',
      });
    }
  };

  const whatsappMsg = language === 'ar'
    ? 'مرحباً، أحتاج فني في الرياض. هل يمكنكم المساعدة؟'
    : 'Hello, I need a technician in Riyadh. Can you help?';
  const whatsappPhotoMsg = language === 'ar'
    ? 'مرحباً، أبي أرسل صورة المشكلة'
    : 'Hello, I want to send a photo of the problem';

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('contact-title')}</span>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('contact-title')}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            {t('contact-subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="grid grid-cols-1 grid-cols-md-2" style={{ gap: '24px' }}>

            {/* Call Card */}
            <div className="card" style={{ borderTop: '4px solid var(--emergency-red)', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={24} style={{ color: 'var(--emergency-red)' }} />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)' }}>{t('contact-call-title')}</h2>
              </div>
              <p style={{ color: 'var(--gray-600)', marginBottom: '20px', lineHeight: 1.6 }}>
                {t('contact-call-desc')}
              </p>
              <Button href="tel:+966508901536" variant="emergency" size="large" icon={<Phone size={18} />} onClick={trackPhoneClick} style={{ width: '100%', justifyContent: 'center' }}>
                {t('contact-call-btn')}
              </Button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', justifyContent: 'center', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                <Clock size={14} />
                <span>{t('contact-call-note')}</span>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="card" style={{ borderTop: '4px solid #25D366', padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle size={24} style={{ color: '#25D366' }} />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--dark)' }}>{t('contact-whatsapp-title')}</h2>
              </div>
              <p style={{ color: 'var(--gray-600)', marginBottom: '20px', lineHeight: 1.6 }}>
                {t('contact-whatsapp-desc')}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Button
                  href={`https://wa.me/966508901536?text=${encodeURIComponent(whatsappMsg)}`}
                  variant="whatsapp" size="large" external
                  icon={<WhatsAppSvg size={18} />}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {t('contact-whatsapp-btn')}
                </Button>
                <Button
                  href={`https://wa.me/966508901536?text=${encodeURIComponent(whatsappPhotoMsg)}`}
                  variant="primary" size="large" external
                  icon={<WhatsAppSvg size={18} />}
                  style={{ width: '100%', justifyContent: 'center', background: '#059669' }}
                >
                  {t('contact-whatsapp-photo')}
                </Button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', justifyContent: 'center', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
                <Clock size={14} />
                <span>{t('contact-whatsapp-note')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Send Photo Explanation */}
      <section style={{ padding: '32px 0', background: '#F0FDF4', borderTop: '2px solid #BBF7D0', borderBottom: '2px solid #BBF7D0' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>📸</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--dark)' }}>{t('contact-whatsapp-photo')}</h3>
          <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            {t('contact-whatsapp-photo-desc')}
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <MapPin size={28} style={{ color: 'var(--primary-blue)' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--dark)' }}>{t('contact-location-title')}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <MapPin size={20} style={{ color: 'var(--gray-500)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--dark)', marginBottom: '4px' }}>{t('contact-location-city')}</div>
                  <div style={{ color: 'var(--gray-500)' }}>{t('contact-location-areas')}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                <Clock size={20} style={{ color: 'var(--gray-500)', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ fontWeight: 600, color: 'var(--dark)' }}>{t('contact-location-hours')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="section-header">
            <h2 className="section-title">{t('contact-tips-title')}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { num: '1', key: 'contact-tip-1' as const, icon: '📸' },
              { num: '2', key: 'contact-tip-2' as const, icon: '📍' },
              { num: '3', key: 'contact-tip-3' as const, icon: '🚨' },
            ].map((tip) => (
              <div key={tip.num} className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>
                  {tip.icon}
                </div>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, fontSize: '1rem' }}>{t(tip.key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t('emergency-question')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t('dont-wait-technician-now')}</p>
          <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={trackPhoneClick} style={{ background: 'white', color: 'var(--emergency-red)' }}>
            {t('contact-call-btn')}
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} />
            <span>{t('area-emergency-available')}</span>
          </div>
        </div>
      </section>
    </>
  );
}
