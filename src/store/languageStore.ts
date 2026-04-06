import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'ar' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'ar', // Default to Arabic
      setLanguage: (lang: Language) => {
        set({ language: lang });
        // Update document attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      },
      toggleLanguage: () => {
        const current = get().language;
        const newLang = current === 'ar' ? 'en' : 'ar';
        get().setLanguage(newLang);
      },
    }),
    {
      name: 'saudi-home-experts-language',
    }
  )
);