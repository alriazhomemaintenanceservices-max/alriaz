'use client';

import Link from 'next/link';
import { Phone, Clock, Shield, CheckCircle, ListChecks } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';

type TKey = keyof typeof translations.ar;

const factors: TKey[] = ['cost-intcom-factor-1', 'cost-intcom-factor-2', 'cost-intcom-factor-3', 'cost-intcom-factor-4'];

const serviceItems: { icon: string; titleKey: TKey; descKey: TKey }[] = [
  { icon: '🔔', titleKey: 'cost-intcom-svc-1-title', descKey: 'cost-intcom-svc-1-desc' },
  { icon: '📹', titleKey: 'cost-intcom-svc-2-title', descKey: 'cost-intcom-svc-2-desc' },
  { icon: '🚪', titleKey: 'cost-intcom-svc-3-title', descKey: 'cost-intcom-svc-3-desc' },
  { icon: '📷', titleKey: 'cost-intcom-svc-4-title', descKey: 'cost-intcom-svc-4-desc' },
  { icon: '🔐', titleKey: 'cost-intcom-svc-5-title', descKey: 'cost-intcom-svc-5-desc' },
];

const faqs: { qKey: TKey; aKey: TKey }[] = [
  { qKey: 'cost-intcom-faq-1-q', aKey: 'cost-intcom-faq-1-a' },
  { qKey: 'cost-intcom-faq-2-q', aKey: 'cost-intcom-faq-2-a' },
  { qKey: 'cost-intcom-faq-3-q', aKey: 'cost-intcom-faq-3-a' },
];

export default function IntercomCostPage() {
  const { t, language } = useTranslation();
  const serviceName = t('intercom');

  const whatsappUrl = `https://wa.me/966508901536?text=${encodeURIComponent(
    language === 'ar' ? 'مرحباً، أحتاج عرض سعر لتركيب انتركوم في الرياض' : 'Hello, I need a price quote for intercom installation in Riyadh'
  )}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": t('cost-intcom-h1'),
        "serviceType": serviceName,
        "provider": { "@id": "https://saudihomeexperts.com/#organization" },
        "areaServed": { "@type": "City", "name": t('riyadh') },
        "url": "https://saudihomeexperts.com/services/intercom/cost-riyadh/",
        "description": t('cost-intcom-subtitle'),
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": t(f.qKey),
          "acceptedAnswer": { "@type": "Answer", "text": t(f.aKey) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": t('breadcrumb-home'), "item": "https://saudihomeexperts.com/" },
          { "@type": "ListItem", "position": 2, "name": t('nav-services'), "item": "https://saudihomeexperts.com/services/" },
          { "@type": "ListItem", "position": 3, "name": serviceName, "item": "https://saudihomeexperts.com/services/intercom/" },
          { "@type": "ListItem", "position": 4, "name": t('cost-intcom-h1'), "item": "https://saudihomeexperts.com/services/intercom/cost-riyadh/" },
        ],
      },
    ],
  };

  return (
    <>
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <Link href="/services/">{t('nav-services')}</Link> / <Link href="/services/intercom/">{serviceName}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('cost-intcom-h1')}</span>
      </nav>

      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔒</div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('cost-intcom-h1')}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--gray-700)', lineHeight: 1.7, marginBottom: '24px' }}>
            {t('cost-intcom-subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:+966508901536" variant="emergency" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('intercom-cost')}>
              {t('area-call-now')}
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" size="large" external icon={<WhatsAppSvg size={20} />} onClick={() => trackWhatsAppClick('intercom-cost')}>
              {t('cost-elec-cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header">
            <h2 className="section-title">{t('cost-intcom-factors-title')}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {factors.map((key, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 18px', background: 'white', border: '1px solid var(--gray-300)', borderRadius: '10px' }}>
                <ListChecks size={20} style={{ color: 'var(--primary-blue)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--gray-700)', lineHeight: 1.6 }}>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service cost tiers */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('cost-intcom-services-title')}</h2>
          </div>
          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto', gap: '24px' }}>
            {serviceItems.map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t(item.titleKey)}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.92rem' }}>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation timeline note */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div style={{ padding: '24px 28px', background: '#FEF3C7', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t('cost-intcom-timeline-title')}</h3>
            <p style={{ color: 'var(--gray-700)', lineHeight: 1.7 }}>{t('cost-intcom-timeline-desc')}</p>
          </div>
        </div>
      </section>

      {/* Get a quote */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', color: 'var(--dark)' }}>{t('cost-intcom-quote-title')}</h2>
          <p style={{ color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: '24px' }}>{t('cost-intcom-quote-desc')}</p>
          <Button href={whatsappUrl} variant="whatsapp" size="large" external icon={<WhatsAppSvg size={20} />} onClick={() => trackWhatsAppClick('intercom-cost-quote')}>
            {t('cost-elec-cta')}
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ marginBottom: '16px', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', color: 'var(--primary-blue)' }}>{t(faq.qKey)}</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>{t(faq.aKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: '32px 0', background: '#F0F9FF', borderTop: '2px solid #DBEAFE', borderBottom: '2px solid #DBEAFE' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link href="/services/intercom/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'white', border: '2px solid var(--gray-300)', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', color: 'var(--dark)' }}>
            <CheckCircle size={20} /> {language === 'ar' ? 'كل خدمات الانتركوم' : 'All Intercom Services'}
          </Link>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1D4ED8 100%)', color: 'white', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div className="badge badge-success"><CheckCircle size={14} />{t('available-now')}</div>
            <div className="badge badge-gold"><Shield size={14} />{t('30-day-warranty')}</div>
            <div className="badge badge-success"><Clock size={14} />{t('arrives-in-hour')}</div>
          </div>
          <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('intercom-cost-footer')} style={{ background: 'white', color: 'var(--primary-blue)' }}>
            {t('area-call-now')}
          </Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
