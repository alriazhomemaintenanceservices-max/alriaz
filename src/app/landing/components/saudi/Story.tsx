'use client';

import { useLang } from './LanguageContext';
import styles from './Story.module.css';

const WA_URL = 'https://wa.me/966508901536?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%81%D9%86%D9%8A%20%D9%85%D9%86%D8%B2%D9%84%D9%8A';

export default function Story() {
  const { t } = useLang();

  return (
    <section id="story" className={`section dark-section ${styles.section}`}>
      <div className={styles.inner}>
        <span className="section-tag reveal">{t('قصتنا', 'OUR STORY')}</span>
        <h2 className={`reveal ${styles.h2}`}>
          {t(
            <>هل سبق أن انتظرت فنياً <em>لم يأتِ أبداً؟</em></>,
            <>Have you ever waited for a technician <em>who never showed up?</em></>
          )}
        </h2>
        <div className={`reveal ${styles.divider}`} />
        <p className={`reveal ${styles.p}`}>
          {t(
            'كثير من أصحاب المنازل في المملكة يعانون من نفس المشكلة — يتصلون بفني، ينتظرون ساعات، ثم يكتشفون أنه لن يأتي. أو يأتي ويُقدّم سعراً مفاجئاً بعد انتهاء العمل.',
            "Many homeowners across the Kingdom face the same problem — they call a technician, wait for hours, then discover he's not coming. Or he arrives and surprises them with an unexpected price after finishing."
          )}
        </p>
        <p className={`reveal reveal-delay-1 ${styles.p}`}>
          {t(
            <>لهذا السبب أسسنا <strong style={{ color: 'var(--gold)' }}>سعودي هوم إكسبيرتس</strong> منذ ١٢ عاماً. التزامنا بسيط: فني مُعتمد، يصل في ٤٥ دقيقة، بسعر واضح مسبقاً، وضمان حقيقي يحميك. لا مفاجآت.</>,
            <>That&apos;s why we founded <strong style={{ color: 'var(--gold)' }}>Saudi Home Experts</strong> 12 years ago. Our commitment is simple: a certified technician, arrives in 45 minutes, with a clear upfront price, and a real warranty that protects you. No surprises.</>
          )}
        </p>
        <a className={`reveal reveal-delay-2 ${styles.cta}`} href={WA_URL}>
          {t('احجز الآن — رد خلال ٥ دقائق', 'Book Now — Reply in 5 Minutes')}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
