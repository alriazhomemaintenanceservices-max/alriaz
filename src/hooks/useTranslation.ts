import { useLanguageStore } from '@/store/languageStore';
import { translations } from '@/lib/translations';

type TranslationKey = keyof typeof translations.ar;

export function useTranslation() {
  const { language } = useLanguageStore();

  const t = (key: TranslationKey, vars?: Record<string, string>): string => {
    let value = translations[language][key] || key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      });
    }
    return value;
  };

  return { t, language };
}
