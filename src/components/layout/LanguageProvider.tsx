'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/languageStore';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const { language } = useLanguageStore();

  useEffect(() => {
    // Apply language to DOM
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language}>
      {children}
    </div>
  );
}