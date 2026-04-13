'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/context/LanguageContext';
import Button from '@/components/ui/Button';

export default function Hero() {
  const { t, lang } = useTranslation();

  const handleScrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative lg:h-screen sm:min-h-[600px] min-h-[600px] flex items-center overflow-hidden bg-surface ${lang === 'es' ? 'pt-16 md:pt-20 lg:pt-20' : ''}`}>
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-grid"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
            >
              <div className="inline-block px-4 py-1.5 mb-4 md:mb-6 rounded-full bg-primary-fixed text-primary text-xs font-bold tracking-widest uppercase font-label">
                {t.hero.eyebrow}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface mb-4 md:mb-6 lg:mb-8 ${lang === 'es'
                  ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                  : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl'
                }`}
            >
              {t.hero.headline} <span className="text-primary italic">{t.hero.motto}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-on-surface-variant font-body max-w-2xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
            >
              {t.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <Button onClick={handleScrollToPortfolio} size="lg" className="shadow-indigo-glow">
                {t.hero.cta_primary}
              </Button>
              <Button onClick={handleScrollToContact} variant="ghost" size="lg">
                {t.hero.cta_secondary}
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="w-full aspect-square rounded-full shadow-2xl relative overflow-hidden">
              <Image
                src="/images/img1.webp"
                alt="Digital innovation illustration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>

      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 md:bottom-16 left-1/2 transform -translate-x-1/2 block"
      >
        <div className="w-10 h-10 rounded-full border border-outline-variant flex items-start justify-center pt-2">
          <ChevronDown className="text-outline w-4 h-6 animate-bounce-slow" />
        </div>
      </motion.div>
    </section>
  );
}