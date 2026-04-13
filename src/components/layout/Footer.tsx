'use client';

import { useTranslation } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-surface-container-high border-t border-outline-variant/20">
      <div className="mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="font-headline font-extrabold text-xl tracking-tighter text-on-surface">
            NexLayer
          </div>

          {/* Tagline */}
          <div className="text-on-surface-variant/80 text-sm text-center md:text-left">
            {t.footer.tagline}
          </div>
          
          {/* Copyright */}
          <div className="text-on-surface-variant/60 text-sm text-center">
            {t.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}