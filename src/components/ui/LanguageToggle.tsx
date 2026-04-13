'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useTranslation();
  
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      className="px-4 py-2 text-xs font-bold tracking-widest text-on-surface border border-outline-variant/30 rounded-xl hover:bg-surface-container transition-all"
    >
      {lang === 'en' ? 'EN/ES' : 'ES/EN'}
    </button>
  );
}