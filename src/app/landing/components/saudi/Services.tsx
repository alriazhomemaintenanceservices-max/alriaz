'use client';

import { useLang } from './LanguageContext';
import styles from './Services.module.css';

const SERVICES = [
  {
    titleAr: 'كهربائي', titleEn: 'Electrician',
    descAr: 'إصلاح جميع الأعطال، تمديدات جديدة، تركيب لوحات، حلول الإضاءة الموفرة.',
    descEn: 'Short circuits, breaker panels, wiring, luxury lighting installation',
    priceAr: 'يبدأ من ١٥٠ ريال', priceEn: 'From SAR 150',
    ctaAr: 'احجز كهربائي الآن', ctaEn: 'Book Electrician Now',
    waText: 'Electrician',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    titleAr: 'سباك', titleEn: 'Plumber',
    descAr: 'كشف التسربات، صيانة المواسير، تركيب السخانات والخلاطات بجودة عالية.',
    descEn: 'Leak detection, tank cleaning, pipe repair, blockage removal without breaking',
    priceAr: 'يبدأ من ١٢٠ ريال', priceEn: 'From SAR 120',
    ctaAr: 'احجز سباك الآن', ctaEn: 'Book Plumber Now',
    waText: 'Plumber',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    titleAr: 'إنترفون وأمن', titleEn: 'Intercom & Security',
    descAr: 'تركيب وصيانة أجهزة الانتركم، كاميرات المراقبة، وأنظمة الدخول الذكية.',
    descEn: 'CCTV cameras, smart video doorbell, biometric locks, integrated security systems',
    priceAr: 'يبدأ من ٢٠٠ ريال', priceEn: 'From SAR 200',
    ctaAr: 'احجز التركيب الآن', ctaEn: 'Book Installation Now',
    waText: 'Intercom',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

const WA_BASE = 'https://wa.me/966508901536?text=' + encodeURIComponent('Hello, I want to book a service: ');

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>{t('خدماتنا', 'OUR SERVICES')}</span>
          </div>
          <h2 className={styles.h2Title}>{t('اختر الخدمة واحجز فوراً', 'Choose Your Service & Book Now')}</h2>
          <p className={styles.sub}>
            {t(
              'فنيون معتمدون يصلون إليك في 45 دقيقة — لا دفع مسبق، لا رسوم خفية',
              'Certified technicians arrive in 45 min — no upfront payment, no hidden fees'
            )}
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((svc, i) => (
            <div key={i} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <div className={styles.topBar} />
              <div className={styles.cardBody}>
                <div className={styles.icon}>{svc.icon}</div>
                <h3 className={styles.title}>{t(svc.titleAr, svc.titleEn)}</h3>
                <p className={styles.desc}>{t(svc.descAr, svc.descEn)}</p>
                
                <div className={styles.price}>
                  <span className={styles.goldDot}>●</span>
                  {t(svc.priceAr, svc.priceEn)}
                </div>

                <a
                  className={styles.bookBtn}
                  href={`${WA_BASE}${encodeURIComponent(svc.waText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon />
                  {t(svc.ctaAr, svc.ctaEn)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.702-.932-.702-1.779 0-.847.444-1.264.603-1.437.159-.173.346-.217.462-.217h.332c.115 0 .231-.022.331.217.115.275.397.967.433 1.039.036.072.06.155.011.252-.049.098-.073.159-.145.242-.072.083-.153.184-.217.247-.072.072-.147.151-.063.296.084.144.374.616.802 1.002.553.496 1.018.65 1.176.723.159.072.252.06.346-.046.094-.105.405-.472.513-.632.108-.159.217-.133.34-.087.123.046.78.368.914.436.134.068.224.1.256.155.033.055.033.318-.111.723z"/>
      <path d="M12.736 22.566c-1.894 0-3.71-.468-5.334-1.354l-6.342 1.662 1.696-6.19c-1.01-1.72-1.544-3.687-1.544-5.727 0-6.24 5.076-11.317 11.317-11.317 3.023 0 5.864 1.177 8 3.315 2.138 2.137 3.316 4.978 3.317 8.002 0 6.241-5.077 11.316-11.31 11.316zM12.736 2.186c-5.13 0-9.303 4.173-9.303 9.303 0 2.052.673 4.015 1.947 5.7l-1.033 3.77 3.861-1.01c1.614.978 3.473 1.493 5.374 1.493 5.13 0 9.303-4.173 9.303-9.303 0-2.484-.967-4.821-2.723-6.577a9.217 9.217 0 00-6.425-2.724v.051z"/>
    </svg>
  );
}
