'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import Button from '@/components/shared/Button';
import WhatsAppSvg from '@/components/shared/WhatsAppSvg';
import { useTranslation } from '@/hooks/useTranslation';
import { translations } from '@/lib/translations';
import { trackWhatsAppClick } from '@/lib/tracking';

type TKey = keyof typeof translations.ar;

const groups: { titleKey: TKey; items: { qKey: TKey; aKey: TKey }[] }[] = [
  {
    titleKey: 'faqhub-group-coverage',
    items: [
      { qKey: 'faqhub-coverage-1-q', aKey: 'faqhub-coverage-1-a' },
      { qKey: 'faqhub-coverage-2-q', aKey: 'faqhub-coverage-2-a' },
    ],
  },
  {
    titleKey: 'faqhub-group-pricing',
    items: [
      { qKey: 'faqhub-pricing-1-q', aKey: 'faqhub-pricing-1-a' },
      { qKey: 'faqhub-pricing-2-q', aKey: 'faqhub-pricing-2-a' },
    ],
  },
  {
    titleKey: 'faqhub-group-quality',
    items: [
      { qKey: 'faqhub-quality-1-q', aKey: 'faqhub-quality-1-a' },
      { qKey: 'faqhub-quality-2-q', aKey: 'faqhub-quality-2-a' },
    ],
  },
  {
    titleKey: 'faqhub-group-booking',
    items: [
      { qKey: 'faqhub-booking-1-q', aKey: 'faqhub-booking-1-a' },
      { qKey: 'faqhub-booking-2-q', aKey: 'faqhub-booking-2-a' },
    ],
  },
];

export default function FaqPage() {
  const { t, language } = useTranslation();

  const whatsappUrl = `https://wa.me/966508901536?text=${encodeURIComponent(
    language === 'ar' ? 'مرحباً، عندي سؤال' : 'Hello, I have a question'
  )}`;

  const allItems = groups.flatMap((g) => g.items);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": allItems.map((f) => ({
          "@type": "Question",
          "name": t(f.qKey),
          "acceptedAnswer": { "@type": "Answer", "text": t(f.aKey) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": t('breadcrumb-home'), "item": "https://saudihomeexperts.com/" },
          { "@type": "ListItem", "position": 2, "name": t('faqhub-h1'), "item": "https://saudihomeexperts.com/faq/" },
        ],
      },
    ],
  };

  return (
    <>
      <nav className="container" style={{ paddingTop: '24px', marginBottom: '30px', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
        <Link href="/">{t('breadcrumb-home')}</Link> / <span style={{ color: 'var(--primary-blue)', fontWeight: 600 }}>{t('faqhub-h1')}</span>
      </nav>

      <section style={{ background: 'linear-gradient(135deg, #EBF8FF 0%, #FFFFFF 100%)', padding: '56px 0' }}>
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 900, color: 'var(--dark)', marginBottom: '16px' }}>
            {t('faqhub-h1')}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--gray-700)', lineHeight: 1.7 }}>
            {t('faqhub-subtitle')}
          </p>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section key={gi} className={gi % 2 === 1 ? 'section bg-light' : 'section'}>
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '20px' }}>
              {t(group.titleKey)}
            </h2>
            {group.items.map((faq, i) => (
              <div key={i} className="card" style={{ marginBottom: '16px', textAlign: language === 'ar' ? 'right' : 'left' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '10px', color: 'var(--primary-blue)' }}>
                  {t(faq.qKey)}
                </h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>{t(faq.aKey)}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Persistent CTA */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, #1D4ED8 100%)', color: 'white', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '20px' }}>{t('faqhub-cta')}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="tel:+966508901536" variant="secondary" size="large" icon={<Phone size={20} />} style={{ background: 'white', color: 'var(--primary-blue)' }}>
              {t('area-call-now')}
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" size="large" external icon={<WhatsAppSvg size={20} />} onClick={() => trackWhatsAppClick('faq-hub')}>
              {t('area-send-whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
}
