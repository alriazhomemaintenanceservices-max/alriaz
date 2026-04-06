'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Phone, Clock, Shield, Users, CheckCircle, Zap, Star } from 'lucide-react';
import Button from '@/components/shared/Button';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { trackPhoneClick as trackPhone, trackWhatsAppClick, trackServicePageView } from '@/lib/tracking';
import '../../styles/globals.css';

interface Area {
  name: string;      // Arabic name
  slug: string;
  english: string;   // English name
}

interface Service {
  arabic: string;
  english: string;
  type: string;
}

interface Props {
  area: Area;
  service: Service;
}

type TKey = keyof typeof translations.ar;

// Service-specific content configuration
const serviceConfig = {
  electrician: {
    subtitleKey: 'area-services-subtitle' as TKey,
    services: [
      { icon: '❄️', titleKey: 'area-svc-ac-title' as TKey, descKey: 'area-svc-ac-desc' as TKey },
      { icon: '⚡', titleKey: 'area-svc-power-title' as TKey, descKey: 'area-svc-power-desc' as TKey },
      { icon: '💡', titleKey: 'area-svc-lights-title' as TKey, descKey: 'area-svc-lights-desc' as TKey },
      { icon: '🔧', titleKey: 'area-svc-panel-title' as TKey, descKey: 'area-svc-panel-desc' as TKey },
      { icon: '🏠', titleKey: 'area-svc-wiring-title' as TKey, descKey: 'area-svc-wiring-desc' as TKey },
      { icon: '🛡️', titleKey: 'area-svc-fault-title' as TKey, descKey: 'area-svc-fault-desc' as TKey },
    ],
    faqs: [
      { qKey: 'area-faq-cost-q' as TKey, aKey: 'area-faq-cost-a' as TKey },
      { qKey: 'area-faq-cover-q' as TKey, aKey: 'area-faq-cover-a' as TKey },
      { qKey: 'area-faq-time-q' as TKey, aKey: 'area-faq-time-a' as TKey },
      { qKey: 'area-faq-book-q' as TKey, aKey: 'area-faq-book-a' as TKey },
      { qKey: 'area-faq-local-q' as TKey, aKey: 'area-faq-local-a' as TKey },
    ],
    testimonials: [
      { nameKey: 'area-review-1-name' as TKey, textKey: 'area-review-1-text' as TKey },
      { nameKey: 'area-review-2-name' as TKey, textKey: 'area-review-2-text' as TKey },
      { nameKey: 'area-review-3-name' as TKey, textKey: 'area-review-3-text' as TKey },
    ],
    emergencyTitleKey: 'area-emergency-title' as TKey,
    emergencyDescKey: 'area-emergency-desc' as TKey,
    slugPrefix: { ar: 'كهربائي', en: 'electrician' },
  },
  plumber: {
    subtitleKey: 'plumb-services-subtitle' as TKey,
    services: [
      { icon: '💧', titleKey: 'plumb-svc-leak-title' as TKey, descKey: 'plumb-svc-leak-desc' as TKey },
      { icon: '🚿', titleKey: 'plumb-svc-drain-title' as TKey, descKey: 'plumb-svc-drain-desc' as TKey },
      { icon: '🔥', titleKey: 'plumb-svc-heater-title' as TKey, descKey: 'plumb-svc-heater-desc' as TKey },
      { icon: '🚰', titleKey: 'plumb-svc-faucet-title' as TKey, descKey: 'plumb-svc-faucet-desc' as TKey },
      { icon: '💎', titleKey: 'plumb-svc-filter-title' as TKey, descKey: 'plumb-svc-filter-desc' as TKey },
      { icon: '🔧', titleKey: 'plumb-svc-pipe-title' as TKey, descKey: 'plumb-svc-pipe-desc' as TKey },
    ],
    faqs: [
      { qKey: 'plumb-faq-cost-q' as TKey, aKey: 'plumb-faq-cost-a' as TKey },
      { qKey: 'plumb-faq-cover-q' as TKey, aKey: 'plumb-faq-cover-a' as TKey },
      { qKey: 'plumb-faq-time-q' as TKey, aKey: 'plumb-faq-time-a' as TKey },
      { qKey: 'plumb-faq-emergency-q' as TKey, aKey: 'plumb-faq-emergency-a' as TKey },
      { qKey: 'plumb-faq-types-q' as TKey, aKey: 'plumb-faq-types-a' as TKey },
    ],
    testimonials: [
      { nameKey: 'plumb-review-1-name' as TKey, textKey: 'plumb-review-1-text' as TKey },
      { nameKey: 'plumb-review-2-name' as TKey, textKey: 'plumb-review-2-text' as TKey },
      { nameKey: 'plumb-review-3-name' as TKey, textKey: 'plumb-review-3-text' as TKey },
    ],
    emergencyTitleKey: 'plumb-emergency-title' as TKey,
    emergencyDescKey: 'plumb-emergency-desc' as TKey,
    slugPrefix: { ar: 'سباك', en: 'plumber' },
  },
  intercom: {
    subtitleKey: 'intcom-services-subtitle' as TKey,
    services: [
      { icon: '🔔', titleKey: 'intcom-svc-install-title' as TKey, descKey: 'intcom-svc-install-desc' as TKey },
      { icon: '📹', titleKey: 'intcom-svc-camera-title' as TKey, descKey: 'intcom-svc-camera-desc' as TKey },
      { icon: '🚪', titleKey: 'intcom-svc-doorbell-title' as TKey, descKey: 'intcom-svc-doorbell-desc' as TKey },
      { icon: '🔐', titleKey: 'intcom-svc-access-title' as TKey, descKey: 'intcom-svc-access-desc' as TKey },
      { icon: '🔧', titleKey: 'intcom-svc-repair-title' as TKey, descKey: 'intcom-svc-repair-desc' as TKey },
      { icon: '⬆️', titleKey: 'intcom-svc-upgrade-title' as TKey, descKey: 'intcom-svc-upgrade-desc' as TKey },
    ],
    faqs: [
      { qKey: 'intcom-faq-cost-q' as TKey, aKey: 'intcom-faq-cost-a' as TKey },
      { qKey: 'intcom-faq-types-q' as TKey, aKey: 'intcom-faq-types-a' as TKey },
      { qKey: 'intcom-faq-time-q' as TKey, aKey: 'intcom-faq-time-a' as TKey },
      { qKey: 'intcom-faq-brands-q' as TKey, aKey: 'intcom-faq-brands-a' as TKey },
      { qKey: 'intcom-faq-warranty-q' as TKey, aKey: 'intcom-faq-warranty-a' as TKey },
    ],
    testimonials: [
      { nameKey: 'intcom-review-1-name' as TKey, textKey: 'intcom-review-1-text' as TKey },
      { nameKey: 'intcom-review-2-name' as TKey, textKey: 'intcom-review-2-text' as TKey },
      { nameKey: 'intcom-review-3-name' as TKey, textKey: 'intcom-review-3-text' as TKey },
    ],
    emergencyTitleKey: 'intcom-emergency-title' as TKey,
    emergencyDescKey: 'intcom-emergency-desc' as TKey,
    slugPrefix: { ar: 'انتركوم', en: 'intercom' },
  },
};

// Cross-link definitions for navigation between services
const allServices = [
  { type: 'electrician', icon: '⚡', nameAr: 'كهربائي', nameEn: 'Electrician', slugAr: 'كهربائي' },
  { type: 'plumber', icon: '💧', nameAr: 'سباك', nameEn: 'Plumber', slugAr: 'سباك' },
  { type: 'intercom', icon: '🔒', nameAr: 'انتركوم', nameEn: 'Intercom', slugAr: 'انتركوم' },
];

export default function ElectricianAreaPage({ area, service }: Props) {
  const { t, language } = useTranslation();

  const areaName = language === 'ar' ? area.name : area.english;
  const serviceName = language === 'ar' ? service.arabic : service.english;
  const vars = { area: areaName, service: serviceName };

  const config = serviceConfig[service.type as keyof typeof serviceConfig] || serviceConfig.electrician;
  const otherServices = allServices.filter(s => s.type !== service.type);

  useEffect(() => {
    trackServicePageView(service.type, area.slug);
  }, [area.slug, service.type]);

  const whatsappUrl = `https://wa.me/966508901536?text=${encodeURIComponent(t('area-whatsapp-msg', vars))}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": t('area-schema-name', vars),
    "description": t('area-schema-desc', vars),
    "url": `https://saudihomeexperts.com/${config.slugPrefix.ar}-${area.slug}`,
    "telephone": "+966508901536",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName,
      "addressLocality": t('riyadh'),
      "addressRegion": t('riyadh'),
      "addressCountry": "SA"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": "24.7136", "longitude": "46.6753" },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "24.7136", "longitude": "46.6753" },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t('area-schema-catalog', vars),
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": `${serviceName} ${areaName}`, "description": t('area-schema-service-desc') } }
      ]
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127" }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <Link href="/خدماتنا">{t('breadcrumb-services')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{serviceName} {areaName}</span>
      </nav>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div className="availability-badge">
              <Zap size={18} className="availability-icon" />
              <span>{t('area-available-now')} {areaName}</span>
            </div>
          </div>

          <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px', lineHeight: 1.2 }}>
            {serviceName} {areaName}
            <span style={{ color: 'var(--primary-blue)' }}> {t('area-within-hour')}</span>
          </h1>

          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--gray-700)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            {t('area-service-desc', vars)}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="tel:0508901536" variant="emergency" size="large" icon={<Phone size={20} />} onClick={() => trackPhone(`${service.type}-${area.slug}`)}>
                {t('area-call-now')}
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" size="large" external onClick={() => trackWhatsAppClick(`${service.type}-${area.slug}`)} icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              }>
                {t('area-send-whatsapp')}
              </Button>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <div className="badge badge-success"><CheckCircle size={14} />{t('area-available-in', vars)}</div>
            <div className="badge badge-gold"><Shield size={14} />{t('area-30-day-warranty')}</div>
            <div className="badge badge-success"><Users size={14} />{t('area-experience-years', vars)}</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('area-services-title', vars)}</h2>
            <p style={{ color: 'var(--gray-500)', marginTop: '8px' }}>{t(config.subtitleKey)}</p>
          </div>

          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ maxWidth: '1000px', margin: '0 auto', gap: '24px' }}>
            {config.services.map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '8px', color: 'var(--dark)' }}>{t(item.titleKey)}</h3>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Links to Other Services */}
      <section style={{ padding: '32px 0', background: '#F0F9FF', borderTop: '2px solid #DBEAFE', borderBottom: '2px solid #DBEAFE' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px', color: 'var(--dark)' }}>
            {t('other-services-in', vars)}
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {otherServices.map((s) => (
              <Link
                key={s.type}
                href={`/${s.slugAr}-${area.slug}`}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '14px 28px', background: 'white', border: '2px solid var(--gray-300)',
                  borderRadius: '12px', fontWeight: 600, textDecoration: 'none',
                  color: 'var(--dark)', transition: 'all 0.3s', fontSize: '1.05rem'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary-blue)'; e.currentTarget.style.background = '#EBF8FF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.background = 'white'; }}
              >
                <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                {language === 'ar' ? s.nameAr : s.nameEn} {areaName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('area-faq-title', vars)}</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {config.faqs.map((faq, i) => (
              <div key={i} className="card" style={{ marginBottom: '16px', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-blue)' }}>
                  {t(faq.qKey, vars)}
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>{t(faq.aKey, vars)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('area-reviews-title', vars)}</h2>
          </div>
          <div className="grid grid-cols-1 grid-cols-md-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {config.testimonials.map((review, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} style={{ fill: 'var(--primary-gold)', color: 'var(--primary-gold)' }} />
                  ))}
                </div>
                <p style={{ color: 'var(--gray-600)', marginBottom: '16px', fontStyle: 'italic' }}>"{t(review.textKey, vars)}"</p>
                <div style={{ fontWeight: 600, color: 'var(--dark)' }}>{t(review.nameKey)}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{areaName}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--emergency-red) 0%, #DC2626 100%)', color: 'white', padding: '48px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '16px' }}>{t(config.emergencyTitleKey, vars)}</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px' }}>{t(config.emergencyDescKey)}</p>
          <Button href="tel:0508901536" variant="secondary" size="large" icon={<Phone size={20} />} onClick={() => trackPhone(`${service.type}-${area.slug}`)} style={{ background: 'white', color: 'var(--emergency-red)' }}>
            {t('area-emergency-call')}
          </Button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '24px', opacity: 0.9 }}>
            <Clock size={20} />
            <span>{t('area-emergency-available')}</span>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema - safe: only uses our own translation strings, no user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
