'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

export type Language = 'en' | 'es';

const translations = { en, es };

interface LanguageContextType {
  lang: Language;
  t: typeof en;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('nexlayer-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLang(savedLang);
    }
  }, []);

  const handleSetLang = (l: Language) => {
    setLang(l);
    localStorage.setItem('nexlayer-lang', l);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => useContext(LanguageContext);