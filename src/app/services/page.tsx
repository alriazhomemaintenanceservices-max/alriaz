'use client';

import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, Star, MapPin } from 'lucide-react';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import CallbackForm from '@/components/shared/CallbackForm';

type TKey = keyof typeof translations.ar;

export default function ServicesPage() {
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

  const services = [
    {
      icon: '⚡',
      color: '#f59e0b',
      titleKey: 'electrician' as TKey,
      descKey: 'about-elec-desc' as TKey,
      slugAr: 'كهربائي',
      items: [
        'area-svc-ac-title' as TKey,
        'area-svc-power-title' as TKey,
        'area-svc-lights-title' as TKey,
        'area-svc-panel-title' as TKey,
        'area-svc-wiring-title' as TKey,
        'area-svc-fault-title' as TKey,
      ],
    },
    {
      icon: '💧',
      color: '#3b82f6',
      titleKey: 'plumber' as TKey,
      descKey: 'about-plumb-desc' as TKey,
      slugAr: 'سباك',
      items: [
        'plumb-svc-leak-title' as TKey,
        'plumb-svc-drain-title' as TKey,
        'plumb-svc-heater-title' as TKey,
        'plumb-svc-faucet-title' as TKey,
        'plumb-svc-filter-title' as TKey,
        'plumb-svc-pipe-title' as TKey,
      ],
    },
    {
      icon: '🔒',
      color: '#8b5cf6',
      titleKey: 'intercom' as TKey,
      descKey: 'about-intcom-desc' as TKey,
      slugAr: 'انتركوم',
      items: [
        'intcom-svc-install-title' as TKey,
        'intcom-svc-camera-title' as TKey,
        'intcom-svc-doorbell-title' as TKey,
        'intcom-svc-access-title' as TKey,
        'intcom-svc-repair-title' as TKey,
        'intcom-svc-upgrade-title' as TKey,
      ],
    },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('nav-services')}</span>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('our-services')}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6 }}>
            {language === 'ar'
              ? 'كهرباء، سباكة، وأنظمة انتركوم — فريق واحد يحل جميع مشاكل منزلك في الرياض'
              : 'Electrical, plumbing, and intercom systems — one team solves all your home problems in Riyadh'}
          </p>

          {/* Trust Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
            <div className="badge badge-success"><CheckCircle size={14} />{t('available-now')}</div>
            <div className="badge badge-gold"><Shield size={14} />{t('30-day-warranty')}</div>
            <div className="badge badge-success"><Clock size={14} />{t('arrives-in-hour')}</div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      {services.map((svc, idx) => (
        <section key={idx} className={idx % 2 === 1 ? 'section bg-light' : 'section'}>
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '2.5rem' }}>{svc.icon}</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark)' }}>{t(svc.titleKey)}</h2>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', marginBottom: '28px', lineHeight: 1.7, maxWidth: '700px' }}>
              {t(svc.descKey)}
            </p>

            {/* Service items */}
            <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ gap: '16px', marginBottom: '28px' }}>
              {svc.items.map((itemKey, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', background: 'white', borderRadius: '10px', border: '1px solid var(--gray-300)' }}>
                  <CheckCircle size={18} style={{ color: svc.color, flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: 'var(--dark)' }}>{t(itemKey)}</span>
                </div>
              ))}
            </div>

            {/* Area links for this service */}
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-600)', marginBottom: '14px' }}>
              {language === 'ar' ? `${t(svc.titleKey)} حسب المنطقة:` : `${t(svc.titleKey)} by Area:`}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${svc.slugAr}-${area.slug}/`}
                  style={{
                    padding: '8px 18px', background: 'white', border: '1px solid var(--gray-300)',
                    borderRadius: '50px', fontWeight: 600, textDecoration: 'none', color: 'var(--dark)',
                    fontSize: '0.9rem', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = svc.color; e.currentTarget.style.color = svc.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.color = 'var(--dark)'; }}
                >
                  {language === 'ar' ? area.ar : area.en}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Coverage */}
      <section style={{ padding: '32px 0', background: '#F0F9FF', borderTop: '2px solid #DBEAFE', borderBottom: '2px solid #DBEAFE' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <MapPin size={28} style={{ color: 'var(--primary-blue)', marginBottom: '8px' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>{t('about-coverage-title')}</h3>
          <p style={{ color: 'var(--gray-600)' }}>{t('about-coverage-desc')}</p>
        </div>
      </section>

      {/* Callback Form */}
      <section className="section">
        <div className="container" style={{ maxWidth: '550px' }}>
          <CallbackForm />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t('emergency-question')}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t('dont-wait-technician-now')}</p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={trackPhoneClick} style={{ background: 'white', color: 'var(--emergency-red)' }}>
              {t('contact-call-btn')}
            </Button>
            <Button
              href={`https://wa.me/966508901536?text=${encodeURIComponent(t('whatsapp-problem-message'))} ${t('riyadh')}`}
              variant="whatsapp" size="large" external
              icon={<WhatsAppSvg size={20} />}
            >
              {t('area-send-whatsapp')}
            </Button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} />
            <span>{t('area-emergency-available')}</span>
          </div>
        </div>
      </section>
    </>
  );
}
