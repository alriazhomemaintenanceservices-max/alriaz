'use client';

import { useLang } from './LanguageContext';
import styles from './HowItWorks.module.css';

const STEPS = [
  {
    numAr: '١',
    numEn: '1',
    titleAr: 'تواصل معنا',
    titleEn: 'Contact Us',
    descAr: 'اتصل بنا أو أرسل رسالة واتساب — نرد في ٥ دقائق ونهتم بمشكلتك فوراً.',
    descEn: 'Call or WhatsApp us — we respond within 5 minutes, any time of day or night',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
  {
    numAr: '٢',
    numEn: '2',
    titleAr: 'وصول الفني',
    titleEn: 'Technician Arrives',
    descAr: 'يصل فني متخصص وكامل التجهيزات خلال ٤٥ دقيقة مع جميع الأدوات اللازمة.',
    descEn: 'A certified, fully-equipped technician arrives in 45 min with all tools and parts needed',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    )
  },
  {
    numAr: '٣',
    numEn: '3',
    titleAr: 'الإصلاح والدفع',
    titleEn: 'Fix & Pay',
    descAr: 'نقوم بإصلاح المشكلة، وتدفع بعد الانتهاء — لا دفع مسبق مع ضمان ٣٠ يوماً.',
    descEn: 'We fix the problem, you pay after — no upfront payment, with a 30-day warranty',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    )
  }
];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>{t('الطريقة', 'HOW IT WORKS')}</span>
          </div>
          <h2 className={styles.h2Title}>{t('ثلاث خطوات بسيطة فقط', 'Just Three Simple Steps')}</h2>
          <p className={styles.sub}>
            {t(
              'من لحظة اتصالك بنا وحتى الإصلاح — العملية بسيطة وسريعة.',
              'From the moment you contact us to the fix — the process is simple and fast'
            )}
          </p>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.line} />
          
          <div className={styles.stepsGrid}>
            {STEPS.map((step, i) => (
              <div key={i} className={`${styles.step} reveal reveal-delay-${i + 1}`}>
                <div className={styles.numCircle}>
                  {t(step.numAr, step.numEn)}
                </div>
                
                <div className={styles.iconBox}>
                  {step.icon}
                </div>

                <h3 className={styles.title}>{t(step.titleAr, step.titleEn)}</h3>
                <p className={styles.text}>{t(step.descAr, step.descEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
