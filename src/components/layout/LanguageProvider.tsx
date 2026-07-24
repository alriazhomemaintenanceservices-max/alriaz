'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguageStore } from '@/store/languageStore';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const { language, setLanguage } = useLanguageStore();
  const pathname = usePathname();
  const isEnglishRoute = pathname?.startsWith('/en/') ?? false;
  // /en/blog/* is a route-based English section — a visitor landing there
  // straight from search must see English/LTR regardless of whatever language
  // was last persisted in this browser from the site-wide AR/EN toggle.
  const effectiveLanguage = isEnglishRoute ? 'en' : language;

  useEffect(() => {
    document.documentElement.lang = effectiveLanguage;
    document.documentElement.dir = effectiveLanguage === 'ar' ? 'rtl' : 'ltr';
  }, [effectiveLanguage]);

  useEffect(() => {
    if (isEnglishRoute && language !== 'en') setLanguage('en');
  }, [isEnglishRoute, language, setLanguage]);

  return (
    <div dir={effectiveLanguage === 'ar' ? 'rtl' : 'ltr'} lang={effectiveLanguage}>
      {children}
    </div>
  );
}