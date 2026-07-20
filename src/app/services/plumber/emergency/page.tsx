'use client';

import Link from 'next/link';
import { Phone, Clock, AlertTriangle, ShieldAlert, DollarSign, MapPin } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/tracking';

type TKey = keyof typeof translations.ar;

const signs: TKey[] = ['emg-plumb-sign-1', 'emg-plumb-sign-2', 'emg-plumb-sign-3', 'emg-plumb-sign-4'];
const beforeSteps: TKey[] = ['emg-plumb-before-1', 'emg-plumb-before-2', 'emg-plumb-before-3'];
const faqs: { qKey: TKey; aKey: TKey }[] = [
  { qKey: 'emg-plumb-faq-1-q', aKey: 'emg-plumb-faq-1-a' },
  { qKey: 'emg-plumb-faq-2-q', aKey: 'emg-plumb-faq-2-a' },
];

export default function PlumberEmergencyPage() {
  const { t, language } = useTranslation();
  const serviceName = t('plumber');

  const whatsappUrl = `https://wa.me/966508901536?text=${encodeURIComponent(
    language === 'ar' ? 'مرحباً، عندي طوارئ تسريب مياه في الرياض' : 'Hello, I have a plumbing emergency in Riyadh'
  )}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": t('emg-plumb-h1'),
        "description": t('emg-plumb-subtitle'),
        "url": "https://saudihomeexperts.com/services/plumber/emergency/",
        "telephone": "+966508901536",
        "priceRange": "$$",
        "openingHours": "Mo-Su 00:00-23:59",
        "areaServed": { "@type": "City", "name": t('riyadh') },
        "parentOrganization": { "@id": "https://saudihomeexperts.com/#organization" },
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
          { "@type": "ListItem", "position": 3, "name": serviceName, "item": "https://saudihomeexperts.com/services/plumber/" },
          { "@type": "ListItem", "position": 4, "name": t('emg-plumb-h1'), "item": "https://saudihomeexperts.com/services/plumber/emergency/" },
        ],
      },
    ],
  };

  return (
    <>
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <Link href="/services/">{t('nav-services')}</Link> / <Link href="/services/plumber/">{serviceName}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('emg-plumb-h1')}</span>
      </nav>

      {/* Hero — emergency-red, above-the-fold call CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', padding: '8px 18px', borderRadius: '50px', marginBottom: '20px', fontWeight: 700, fontSize: '0.9rem' }}>
            <AlertTriangle size={16} /> {language === 'ar' ? 'خدمة طوارئ 24/7' : '24/7 Emergency Service'}
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '12px' }}>
            {t('emg-plumb-h1')} <span style={{ opacity: 0.9 }}>— {t('emg-plumb-h1-sub')}</span>
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '28px', opacity: 0.95 }}>
            {t('emg-plumb-subtitle')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('plumber-emergency-page')} style={{ background: 'white', color: 'var(--emergency-red)' }}>
              {t('area-emergency-call')}
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" size="large" external icon={<WhatsAppSvg size={20} />} onClick={() => trackWhatsAppClick('plumber-emergency-page')}>
              {t('emg-plumb-cta-title')}
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '22px', opacity: 0.9, fontSize: '0.9rem' }}>
            <Clock size={16} /><span>{t('area-emergency-available')}</span>
          </div>
        </div>
      </section>

      {/* Signs needing immediate action */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header">
            <h2 className="section-title">{t('emg-plumb-signs-title')}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {signs.map((key, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 18px', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px' }}>
                <ShieldAlert size={20} style={{ color: 'var(--emergency-red)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--gray-700)', lineHeight: 1.6 }}>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do before technician arrives */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="section-header">
            <h2 className="section-title">{t('emg-plumb-before-title')}</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {beforeSteps.map((key, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '14px 18px', background: 'white', border: '1px solid var(--gray-300)', borderRadius: '10px' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '26px', height: '26px', borderRadius: '50%', background: 'var(--primary-blue)', color: 'white', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>{i + 1}</span>
                <span style={{ color: 'var(--gray-700)', lineHeight: 1.6 }}>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ padding: '32px 0', background: '#F0F9FF', borderTop: '2px solid #DBEAFE', borderBottom: '2px solid #DBEAFE' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <MapPin size={26} style={{ color: 'var(--primary-blue)', marginBottom: '8px' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{t('emg-plumb-coverage-title')}</h3>
          <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>{t('emg-plumb-coverage-desc')}</p>
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
      <section className="section bg-light">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/services/plumber/cost-riyadh/" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'white', border: '2px solid var(--gray-300)', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', color: 'var(--dark)' }}>
              <DollarSign size={20} /> {language === 'ar' ? 'أسعار السباك' : 'Plumber Cost Guide'}
            </Link>
            <Link href="/services/plumber/" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'white', border: '2px solid var(--gray-300)', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', color: 'var(--dark)' }}>
              💧 {language === 'ar' ? 'كل خدمات السباكة' : 'All Plumbing Services'}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={() => trackPhoneClick('plumber-emergency-footer')} style={{ background: 'white', color: 'var(--emergency-red)' }}>
            {t('area-emergency-call')}
          </Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
