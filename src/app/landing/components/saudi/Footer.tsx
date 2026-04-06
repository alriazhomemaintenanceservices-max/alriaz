'use client';

import { useLang } from './LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className={styles.footer}>
      <div className="section-inner">
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo}>Saudi <span style={{ color: '#C9A84C' }}>Home</span> Experts</div>
            <p className={styles.tagline}>{t('خدمة الصيانة المنزلية الأكثر ثقة في الرياض وجدة.', 'Saudi Arabia\'s most trusted home maintenance service.')}</p>
          </div>

          <div className={styles.copyright}>
            © {new Date().getFullYear()} Saudi Home Experts — Riyadh, Saudi Arabia  {t('جميع الحقوق محفوظة.', 'All rights reserved.')}
          </div>
        </div>
      </div>
    </footer>
  );
}
