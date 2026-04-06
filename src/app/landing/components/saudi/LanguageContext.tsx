'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Lang = 'ar' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLanguage: (l: Lang) => void;
  toggleLang: () => void;
  t: (ar: any, en: any) => any;
  dir: 'rtl' | 'ltr';
  hasPicked: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar');
  const [hasPicked, setHasPicked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('saudi_home_lang');
    if (saved === 'en' || saved === 'ar') {
      setLang(saved as Lang);
      setHasPicked(true);
    }
  }, []);

  const setLanguage = (l: Lang) => {
    setLang(l);
    setHasPicked(true);
    localStorage.setItem('saudi_home_lang', l);
  };

  const toggleLang = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  const t = (ar: any, en: any) => (lang === 'ar' ? ar : en);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.className = lang;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLang, t, dir, hasPicked }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
