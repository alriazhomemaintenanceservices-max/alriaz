'use client';

import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, Zap, Star } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';

type TKey = keyof typeof translations.ar;

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

const services: { icon: string; titleKey: TKey; descKey: TKey }[] = [
  { icon: '❄️', titleKey: 'area-svc-ac-title', descKey: 'area-svc-ac-desc' },
  { icon: '⚡', titleKey: 'area-svc-power-title', descKey: 'area-svc-power-desc' },
  { icon: '💡', titleKey: 'area-svc-lights-title', descKey: 'area-svc-lights-desc' },
  { icon: '🔧', titleKey: 'area-svc-panel-title', descKey: 'area-svc-panel-desc' },
  { icon: '🏠', titleKey: 'area-svc-wiring-title', descKey: 'area-svc-wiring-desc' },
  { icon: '🛡️', titleKey: 'area-svc-fault-title', descKey: 'area-svc-fault-desc' },
];

export default function ElectricianPage() {
  const { t, language } = useTranslation();
  const serviceName = t('electrician');

  return (
    <>
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <Link href="/services/">{t('nav-services')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{serviceName}</span>
      </nav>

      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>⚡</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {serviceName} {t('riyadh')}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--gray-700)', lineHeight: 1.6, marginBottom: '24px' }}>
            {t('about-elec-desc')}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
            <div className="badge badge-success"><CheckCircle size={14} />{t('available-now')}</div>
            <div className="badge badge-gold"><Shield size={14} />{t('30-day-warranty')}</div>
            <div className="badge badge-success"><Clock size={14} />{t('arrives-in-hour')}</div>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:0508901536" variant="emergency" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('electrician-page')}>
              {t('area-call-now')}
            </Button>
            <Button href={`https://wa.me/966508901536?text=${encodeURIComponent(language === 'ar' ? 'مرحباً، أحتاج كهربائي في الرياض' : 'Hello, I need an electrician in Riyadh')}`} variant="whatsapp" size="large" external icon={<WhatsAppSvg size={20} />} onClick={() => trackWhatsAppClick('electrician-page')}>
              {t('area-send-whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('area-services-title', { service: serviceName, area: t('riyadh') })}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t('area-services-subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto', gap: '24px' }}>
            {services.map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t(item.titleKey)}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{language === 'ar' ? 'كهربائي حسب المنطقة' : 'Electrician by Area'}</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '800px', margin: '0 auto' }}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/كهربائي-${area.slug}/`}
                style={{ padding: '10px 20px', background: 'white', border: '2px solid var(--gray-300)', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', color: 'var(--dark)', fontSize: '0.95rem', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.color = '#f59e0b'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.color = 'var(--dark)'; }}>
                {language === 'ar' ? area.ar : area.en}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t('area-emergency-title', { area: t('riyadh'), service: serviceName })}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t('area-emergency-desc')}</p>
          <Button href="tel:0508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('electrician-emergency')} style={{ background: 'white', color: 'var(--emergency-red)' }}>
            {t('area-emergency-call')}
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} /><span>{t('area-emergency-available')}</span>
          </div>
        </div>
      </section>
    </>
  );
}
