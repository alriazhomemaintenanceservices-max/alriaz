'use client';

import { useLang } from './LanguageContext';
import styles from './WhyUs.module.css';

const GUARANTEES = [
  {
    checkAr: '✓ معتمد', checkEn: '✓ Certified',
    titleAr: 'فنيون حاصلون على شهادات معتمدة', titleEn: 'Licensed & Certified Technicians',
    textAr: 'جميع الفنيين يحملون شهادات مهنية ومعتمدون حسب معايير SASO',
    textEn: 'All technicians hold professional certifications and are approved by SASO standards',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
  {
    checkAr: '✓ شفافية كاملة', checkEn: '✓ Full Transparency',
    titleAr: 'أسعار معلنة — لا مفاجآت', titleEn: 'Upfront Pricing — No Surprises',
    textAr: 'تعرف التكلفة كاملة قبل بدء أي عمل. لا رسوم خفية ولا تكاليف إضافية',
    textEn: 'You know the full cost before any work begins. No hidden fees, no extra charges',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/>
      </svg>
    ),
  },
  {
    checkAr: '✓ استجابة فورية', checkEn: '✓ Instant Response',
    titleAr: '45 دقيقة أو أقل — مضمون', titleEn: '45 Minutes or Less — Guaranteed',
    textAr: 'لدينا فنيون في جميع الأحياء، نضمن الوصول خلال 45 دقيقة أو أقل',
    textEn: 'We have technicians in all districts, guaranteed arrival in 45 min or less — or we compensate you',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    checkAr: '✓ ضمان حقيقي', checkEn: '✓ Real Warranty',
    titleAr: 'ضمان 30 يوم على جميع الأعمال', titleEn: '30-Day Warranty on All Work',
    textAr: 'إذا عادت نفس المشكلة خلال 30 يوماً، نرسل الفني لإصلاحها مجاناً',
    textEn: 'If the same issue returns within 30 days, we send a technician to fix it at no additional cost',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section id="why-us" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <span className="section-tag">{t('لماذا نحن؟', 'OUR GUARANTEES')}</span>
          <h2 className="section-h2">{t('لماذا شركة خبراء المنزل؟', 'Why Saudi Home Experts?')}</h2>
        </div>

        <div className={styles.grid}>
          {GUARANTEES.map((g, i) => (
            <div key={i} className={`${styles.card} reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className={styles.icon}>{g.icon}</div>
              <div>
                <span className={styles.check}>{t(g.checkAr, g.checkEn)}</span>
                <div className={styles.title}>{t(g.titleAr, g.titleEn)}</div>
                <div className={styles.text}>{t(g.textAr, g.textEn)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
