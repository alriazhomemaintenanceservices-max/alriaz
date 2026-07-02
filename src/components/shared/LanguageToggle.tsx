'use client';

import { useLanguageStore } from '@/store/languageStore';

/**
 * Two-option segmented language switch (عربي | EN) with PNG flags.
 * Shows both languages so it's immediately obvious how to switch.
 */
export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className={`lang-switch${dark ? ' dark' : ''}`} role="group" aria-label="Language / اللغة">
      <button
        type="button"
        className={`lang-opt${language === 'ar' ? ' active' : ''}`}
        onClick={() => setLanguage('ar')}
        aria-pressed={language === 'ar'}
      >
        <img
          src="https://flagcdn.com/w40/sa.png"
          srcSet="https://flagcdn.com/w80/sa.png 2x"
          alt=""
          width={20}
          height={15}
        />
        عربي
      </button>
      <button
        type="button"
        className={`lang-opt${language === 'en' ? ' active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          srcSet="https://flagcdn.com/w80/gb.png 2x"
          alt=""
          width={20}
          height={15}
        />
        EN
      </button>
    </div>
  );
}
