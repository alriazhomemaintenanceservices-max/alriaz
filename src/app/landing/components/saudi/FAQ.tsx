'use client';

import React, { useState } from 'react';
import { useLang } from './LanguageContext';
import styles from './FAQ.module.css';

const FAQ_DATA = [
  {
    ar: 'كم يستغرق وصول الفني؟',
    en: 'How long does it take for arrival?',
    ansAr: 'متوسط وقت الوصول هو 45 دقيقة في جميع أحياء الرياض وجدة. في حالات الطوارئ، نحرص على الوصول في أسرع وقت ممكن.',
    ansEn: 'The average arrival time is 45 minutes across all districts in Riyadh and Jeddah. In emergencies, we prioritize arriving as quickly as possible.',
  },
  {
    ar: 'هل تعملون في أيام العطل والإجازات؟',
    en: 'Do you work on holidays?',
    ansAr: 'نعم، خدمتنا متاحة 24 ساعه، 7 أيام في الأسبوع، 365 يوماً في السنة، بما في ذلك الإجازات الرسمية.',
    ansEn: 'Yes, our service is available 24/7, 365 days a year, including all public holidays.',
  },
  {
    ar: 'هل هناك رسوم للفحص إذا لم أنفذ العمل؟',
    en: 'Is there an inspection fee?',
    ansAr: 'نحن فخورون بتقديم فحص مجاني تماماً إذا تمت عملية الإصلاح. في حال عدم الرغبة بالإصلاح، هناك رسوم تشخيصية بسيطة فقط.',
    ansEn: 'We provide completely free inspection if the repair is completed. If you choose not to repair, a small diagnostic fee applies.',
  },
  {
    ar: 'ما هو الضمان على أعمال الهدم والإصلاح؟',
    en: 'What is the warranty?',
    ansAr: 'نقدم ضماناً حقيقياً لمدة 30 يوماً على جميع أعمالنا. إذا عادت نفس المشكلة، سنقوم بإصلاحها مجاناً فوراً.',
    ansEn: 'We offer a real 30-day labor warranty on all our work. If the same issue returns, we fix it immediately at no cost.',
  },
];

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className={`section ${styles.section}`}>
      <div className="section-inner">
        <div className={`reveal ${styles.header}`}>
          <div className={styles.tagWrapper}>
            <span className={styles.tag}>{t('الأسئلة الشائعة', 'FAQ')}</span>
          </div>
          <h2 className={styles.h2Title}>{t('الأسئلة الأكثر تكراراً', 'Frequently Asked Questions')}</h2>
        </div>

        <div className={styles.list}>
          {FAQ_DATA.map((item, i) => (
            <FAQItem
              key={i}
              i={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ i, item, isOpen, onToggle, t }: any) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`${styles.item} ${isOpen ? styles.open : ''} ${isRevealed ? 'visible' : 'reveal'} reveal-delay-${i + 1}`}
    >
      <button 
        className={styles.questionBtn} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.qText}>{t(item.ar, item.en)}</span>
        <div className={styles.iconBox}>
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
      <div className={styles.ansWrap}>
        <div className={styles.ansInner}>
          <p>{t(item.ansAr, item.ansEn)}</p>
        </div>
      </div>
    </div>
  );
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg 
      style={{ 
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        color: isOpen ? '#C9A84C' : '#8A8880'
      }} 
      width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}
