'use client';

import Link from 'next/link';
import { Phone, Shield, Users, Heart, Wrench, MapPin, Clock } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';

export default function AboutUsPage() {
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

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('about-title')}</span>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('about-title')}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            {t('about-subtitle')}
          </p>
        </div>
      </section>

      {/* Father's Story */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', flexShrink: 0 }}>
              🇵🇰
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--dark)' }}>{t('about-father-title')}</h2>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: '24px' }}>
            {t('about-father-story')}
          </p>

          <blockquote style={{
            padding: '24px 32px',
            background: '#F0F9FF',
            borderRadius: '12px',
            borderRight: language === 'ar' ? '4px solid var(--primary-blue)' : 'none',
            borderLeft: language === 'en' ? '4px solid var(--primary-blue)' : 'none',
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--primary-blue)',
            lineHeight: 1.7,
          }}>
            {t('about-father-quote')}
            <div style={{ marginTop: '12px', fontStyle: 'normal', fontWeight: 700, fontSize: '0.95rem' }}>
              — {language === 'ar' ? 'حمزة' : 'Hamza'}
            </div>
          </blockquote>
        </div>
      </section>

      {/* Hamza's Story */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '1.8rem' }}>🇸🇦</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--dark)' }}>{t('about-hamza-title')}</h2>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', lineHeight: 1.8, marginBottom: '24px' }}>
            {t('about-hamza-story')}
          </p>

          {/* Timeline badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <div className="badge badge-success" style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
              <Clock size={16} /> {language === 'ar' ? '30+ سنة خبرة عائلية' : '30+ Years Family Experience'}
            </div>
            <div className="badge badge-gold" style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
              <Users size={16} /> {language === 'ar' ? '10+ سنوات في الرياض' : '10+ Years in Riyadh'}
            </div>
            <div className="badge badge-success" style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
              <Heart size={16} /> {language === 'ar' ? 'يتكلم عربي ويفهم الثقافة' : 'Speaks Arabic, Understands the Culture'}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('about-values-title')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2" style={{ maxWidth: '900px', margin: '0 auto', gap: '24px' }}>
            {[
              { icon: <Shield size={28} />, titleKey: 'about-value-trust' as const, descKey: 'about-value-trust-desc' as const, color: '#10b981' },
              { icon: <Heart size={28} />, titleKey: 'about-value-culture' as const, descKey: 'about-value-culture-desc' as const, color: '#f59e0b' },
              { icon: <Wrench size={28} />, titleKey: 'about-value-skill' as const, descKey: 'about-value-skill-desc' as const, color: '#3b82f6' },
              { icon: <Users size={28} />, titleKey: 'about-value-direct' as const, descKey: 'about-value-direct-desc' as const, color: '#8b5cf6' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t(item.titleKey)}</h3>
                  <p style={{ color: 'var(--gray-500)', lineHeight: 1.6, fontSize: '0.95rem' }}>{t(item.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('about-services-title')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-3" style={{ maxWidth: '900px', margin: '0 auto', gap: '24px' }}>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid #f59e0b' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t('electrician')}</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('about-elec-desc')}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid #3b82f6' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💧</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t('plumber')}</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('about-plumb-desc')}</p>
            </div>
            <div className="card" style={{ textAlign: 'center', borderTop: '4px solid #8b5cf6' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔒</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t('intercom')}</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('about-intcom-desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <MapPin size={32} style={{ color: 'var(--primary-blue)' }} />
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: 'var(--dark)' }}>{t('about-coverage-title')}</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: 1.7 }}>
            {t('about-coverage-desc')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1e40af 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '12px' }}>{t('about-cta-title')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '28px', opacity: 0.9 }}>{t('about-cta-desc')}</p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={trackPhoneClick} style={{ background: 'white', color: 'var(--primary-blue)' }}>
              {t('area-call-now')}
            </Button>
            <Button
              href={`https://wa.me/966508901536?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أبي أعرف أكثر عن خدماتكم' : 'Hello, I would like to know more about your services')}`}
              variant="whatsapp" size="large" external
              icon={<WhatsAppSvg size={20} />}
            >
              {t('contact-whatsapp-btn')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
