'use client';

import { useLang } from './LanguageContext';
import styles from './LangToggle.module.css';

export default function LangToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button className={styles.toggle} onClick={toggleLang} aria-label="Toggle language">
      {lang === 'ar' ? 'EN' : 'ع'}
    </button>
  );
}
