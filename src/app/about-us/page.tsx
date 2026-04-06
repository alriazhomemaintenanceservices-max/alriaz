'use client';

import Link from 'next/link';
import { Phone, Shield, Users, Heart, Wrench, MapPin, Clock } from 'lucide-react';
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
            <Button href="tel:0508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={trackPhoneClick} style={{ background: 'white', color: 'var(--primary-blue)' }}>
              {t('area-call-now')}
            </Button>
            <Button
              href={`https://wa.me/966508901536?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أبي أعرف أكثر عن خدماتكم' : 'Hello, I would like to know more about your services')}`}
              variant="whatsapp" size="large" external
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>}
            >
              {t('contact-whatsapp-btn')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
