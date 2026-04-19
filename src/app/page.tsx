'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { Phone, Clock, Shield, Users, CheckCircle, Star, Zap } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import CallbackForm from '@/components/shared/CallbackForm';

// Area detection handled inside component for language support

export default function HomePage() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<'electrician' | 'plumber' | 'intercom'>('electrician');
  const { t, language } = useTranslation();
  const userArea = t('riyadh');

  const serviceSlugMap = {
    electrician: 'كهربائي',
    plumber: 'سباك',
    intercom: 'انتركوم',
  };

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Homepage',
        page_location: window.location.href,
      });
    }
  }, []);

  const problems = [
    { id: 'ac-not-cooling', icon: '❄️', titleKey: 'ac-not-cooling' as const, url: '/المكيف-ما-يبرد' },
    { id: 'power-cut', icon: '⚡', titleKey: 'power-cuts' as const, url: '/الكهرب-يفصل' },
    { id: 'water-leak', icon: '💧', titleKey: 'water-leaking' as const, url: '/المويه-تسرب' },
    { id: 'drain-blocked', icon: '🚿', titleKey: 'drain-blocked' as const, url: '/المجاري-مسدودة' },
    { id: 'heater-broken', icon: '🔥', titleKey: 'heater-broken' as const, url: '/السخان-خربان' },
    { id: 'lights-not-working', icon: '💡', titleKey: 'lights-not-working' as const, url: '/اللمبات-ما-تشتغل' },
  ];

  const areas = [
    { ar: 'النرجس', en: 'Al Narjis', slug: 'narjis' },
    { ar: 'الياسمين', en: 'Al Yasmin', slug: 'yasmin' },
    { ar: 'قرطبة', en: 'Qurtubah', slug: 'qurtubah' },
    { ar: 'غرناطة', en: 'Granada', slug: 'granada' },
    { ar: 'الفلاح', en: 'Al Falah', slug: 'falah' },
    { ar: 'الندى', en: 'Al Nada', slug: 'nada' },
    { ar: 'الربيع', en: 'Al Rabee', slug: 'rabee' },
    { ar: 'اشبيلية', en: 'Ishbiliyah', slug: 'ishbiliyah' },
    { ar: 'حطين', en: 'Hittin', slug: 'hittin' },
    { ar: 'الملقا', en: 'Al Malqa', slug: 'malqa' },
    { ar: 'العقيق', en: 'Al Aqiq', slug: 'aqiq' },
    { ar: 'القيروان', en: 'Al Qirawan', slug: 'qirawan' },
    { ar: 'العارض', en: 'Al Arid', slug: 'arid' },
  ];

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
    <>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '48px 0' }}>
        <div className="container">
          {/* Professional Availability Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div className="availability-badge">
              <Zap size={18} className="availability-icon" />
              <span>{t('available-now-in')} {userArea}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('electrician-plumber')}
            <span style={{ color: 'var(--primary-blue)' }}> {t('arrives-in-hour')}</span>
          </h1>

          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--gray-700)', marginBottom: '32px' }}>
            {t('instant-service-247')}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                href="tel:+966508901536"
                variant="emergency"
                size="large"
                icon={<Phone size={20} />}
                onClick={trackPhoneClick}
              >
                {t('call-now-number')}
              </Button>
              
              <Button
                href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-problem-message'))}%20${userArea}%20-%20${encodeURIComponent(t('whatsapp-photo-message'))}`}
                variant="whatsapp"
                size="large"
                external
                icon={<WhatsAppSvg size={20} />}
              >
                {t('send-problem-photo')}
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <div className="badge badge-success">
              <CheckCircle size={14} />
              {t('available-now')}
            </div>
            <div className="badge badge-gold">
              <Shield size={14} />
              {t('30-day-warranty')}
            </div>
            <div className="badge badge-success">
              <Users size={14} />
              {t('500-customers-month')}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Selector */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('whats-your-problem')}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t('choose-problem-instant')}</p>
          </div>

          <div className="grid grid-cols-2 grid-cols-md-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setSelectedProblem(problem.id)}
                className={`card ${selectedProblem === problem.id ? 'selected' : ''}`}
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: selectedProblem === problem.id ? '2px solid var(--primary-blue)' : '1px solid var(--gray-300)',
                  background: selectedProblem === problem.id ? '#EBF8FF' : 'white'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{problem.icon}</div>
                <div style={{ fontWeight: 600, color: 'var(--dark)' }}>{t(problem.titleKey)}</div>
              </button>
            ))}
          </div>

          {selectedProblem && (
            <div className="animate-fadeIn" style={{ marginTop: '32px', padding: '24px', background: '#FEF3C7', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px' }}>
                ✅ {t('can-fix-in-hour')}
              </p>
              <Button
                href="tel:+966508901536"
                variant="emergency"
                icon={<Phone size={18} />}
                onClick={trackPhoneClick}
              >
                {t('call-instant-solution')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Callback Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: '550px' }}>
          <CallbackForm />
        </div>
      </section>

      {/* Areas Coverage with Service Tabs */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('cover-north-riyadh')}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t('choose-area-services')}</p>
          </div>

          {/* Service Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { key: 'electrician' as const, icon: '⚡', labelKey: 'electrician' as const },
              { key: 'plumber' as const, icon: '💧', labelKey: 'plumber' as const },
              { key: 'intercom' as const, icon: '🔒', labelKey: 'intercom' as const },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedService(tab.key)}
                style={{
                  padding: '10px 24px',
                  border: selectedService === tab.key ? '2px solid var(--primary-blue)' : '2px solid var(--gray-300)',
                  borderRadius: '50px',
                  background: selectedService === tab.key ? 'var(--primary-blue)' : 'white',
                  color: selectedService === tab.key ? 'white' : 'var(--dark)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>{tab.icon}</span> {t(tab.labelKey)}
              </button>
            ))}
          </div>

          {/* Area Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '800px', margin: '0 auto' }}>
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${serviceSlugMap[selectedService]}-${area.slug}`}
                style={{
                  padding: '12px 24px',
                  background: 'white',
                  border: '2px solid var(--gray-300)',
                  borderRadius: '50px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  color: 'var(--dark)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-blue)';
                  e.currentTarget.style.background = '#EBF8FF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-300)';
                  e.currentTarget.style.background = 'white';
                }}
              >
                {language === 'ar' ? area.ar : area.en}
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: 'var(--gray-500)' }}>{t('all-north-east-riyadh')}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('why-choose-us')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { icon: '🗺️', titleKey: 'local-experts', descKey: 'local-experts-desc' },
              { icon: '⏱️', titleKey: 'quick-arrival', descKey: 'quick-arrival-desc' },
              { icon: '🕌', titleKey: 'respect-time', descKey: 'respect-time-desc' },
              { icon: '👨‍🔧', titleKey: 'experienced-technicians', descKey: 'experienced-technicians-desc' },
              { icon: '🛡️', titleKey: 'work-warranty', descKey: 'work-warranty-desc' },
              { icon: '🏠', titleKey: 'home-respect', descKey: 'home-respect-desc' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t(item.titleKey as keyof typeof translations.ar)}</h3>
                <p style={{ color: 'var(--gray-500)' }}>{t(item.descKey as keyof typeof translations.ar)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('our-services')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1200px', margin: '0 auto', gap: '32px' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span> {t('electrician')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'ac-maintenance-freon',
                  'power-outage-repair',
                  'lights-installation',
                  'electrical-panel-maintenance',
                  'new-electrical-wiring'
                ].map((serviceKey, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success-green)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{t(serviceKey as keyof typeof translations.ar)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>💧</span> {t('plumber')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'ceiling-water-leak-repair',
                  'drain-unblocking',
                  'heater-installation-maintenance',
                  'faucet-repair',
                  'water-filter-installation'
                ].map((serviceKey, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success-green)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{t(serviceKey as keyof typeof translations.ar)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--primary-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>🔒</span> {t('intercom')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'intercom-installation',
                  'security-camera-installation',
                  'smart-doorbell-installation',
                  'access-control-systems',
                  'intercom-repair'
                ].map((serviceKey, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success-green)', marginTop: '2px', flexShrink: 0 }} />
                    <span>{t(serviceKey as keyof typeof translations.ar)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Button
              href="/services/"
              variant="primary"
              size="large"
            >
              {t('view-all-services')}
            </Button>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('our-team')}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px', fontSize: '1.125rem', textAlign: 'center' }}>
              {t('pakistani-saudi-team')}
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '2px solid var(--primary-blue)' }}>
            
            {/* Flags Section */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🇵🇰</div>
                <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>{t('pakistan')}</span>
              </div>
              <div style={{ fontSize: '2rem', color: 'var(--primary-blue)' }}>🤝</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🇸🇦</div>
                <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>{t('saudi-arabia')}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 grid-cols-md-3" style={{ gap: '24px' }}>
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🔧</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('direct-service')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('direct-service-desc')}</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🕌</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('cultural-understanding')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('cultural-understanding-desc')}</p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '20px', background: 'var(--gray-100)', borderRadius: '12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🕐</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px' }}>{t('prayer-aware')}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t('prayer-aware-desc')}</p>
              </div>
            </div>

            <div style={{ marginTop: '32px', padding: '20px', background: '#EBF8FF', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontWeight: 600, color: 'var(--primary-blue)', fontSize: '1.1rem' }}>
                ✅ {t('pakistani-team-desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('customer-reviews')}</h2>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { textKey: 'review-1', nameKey: 'mohamed-salem', areaKey: 'narjis-area' },
              { textKey: 'review-2', nameKey: 'abdullah-shehri', areaKey: 'yasmin-area' },
              { textKey: 'review-3', nameKey: 'khalid-qahtani', areaKey: 'qurtubah-area' }
            ].map((review, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} style={{ fill: 'var(--primary-gold)', color: 'var(--primary-gold)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: '12px' }}>"{t(review.textKey as keyof typeof translations.ar)}"</p>
                <div style={{ fontWeight: 600 }}>{t(review.nameKey as keyof typeof translations.ar)}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{t(review.areaKey as keyof typeof translations.ar)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t('emergency-question')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{t('ac-stopped-45-degrees')}</p>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t('water-flooded-house')}</p>
          
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>{t('dont-wait-technician-now')}</div>
          
          <Button
            href="tel:+966508901536"
            variant="secondary"
            size="large"
            icon={<Phone size={20} />}
            onClick={trackPhoneClick}
            style={{ background: 'white', color: 'var(--emergency-red)' }}
          >
            {t('call-now-number')}
          </Button>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} />
            <span>{t('available-247-prayers')}</span>
          </div>
        </div>
      </section>
    </>
  );
}