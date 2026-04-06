'use client';

import { useLanguageStore } from '@/store/languageStore';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore();
  const { t } = useTranslation();
  
  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      style={{
        fontSize: '0.875rem',
        color: 'var(--gray-500)',
        background: 'none',
        border: '1px solid var(--gray-300)',
        borderRadius: '6px',
        padding: '6px 12px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        fontWeight: 500
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--primary-blue)';
        e.currentTarget.style.borderColor = 'var(--primary-blue)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--gray-500)';
        e.currentTarget.style.borderColor = 'var(--gray-300)';
      }}
    >
      {t('language')}
    </button>
  );
}