'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function Pricing() {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <SectionReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-4">{t.pricing.section_title}</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">{t.pricing.section_subtitle}</p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <SectionReveal delay={0.1}>
            <div className="p-10 rounded-xl relative bg-surface-container-low border border-outline-variant/10 h-full flex flex-col">
              <h3 className="text-xl font-bold font-headline mb-2">{t.pricing.basic.name}</h3>
              <div className="text-4xl font-extrabold font-headline mb-6 text-on-surface">
                {t.pricing.basic.price} <span className="text-base font-normal text-on-surface-variant">{t.pricing.per_project}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {t.pricing.basic.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={handleCTAClick} variant="ghost" className="w-full">
                {t.pricing.cta_start}
              </Button>
            </div>
          </SectionReveal>

          {/* Pro Plan - Highlighted */}
          <SectionReveal delay={0.2}>
            <div className="p-10 rounded-xl relative bg-inverse-surface shadow-2xl transform md:-translate-y-4 h-full flex flex-col">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-on-primary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {t.pricing.most_popular}
              </div>
              <h3 className="text-xl font-bold font-headline mb-2 text-inverse-on-surface">{t.pricing.pro.name}</h3>
              <div className="text-4xl font-extrabold font-headline mb-6 text-inverse-on-surface">
                {t.pricing.pro.price} <span className="text-base font-normal text-outline-variant">{t.pricing.per_project}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {t.pricing.pro.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-inverse-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={handleCTAClick} variant="primary" className="w-full">
                {t.pricing.cta_start}
              </Button>
            </div>
          </SectionReveal>

          {/* Enterprise Plan */}
          <SectionReveal delay={0.3}>
            <div className="p-10 rounded-xl relative bg-surface-container-low border border-outline-variant/10 h-full flex flex-col">
              <h3 className="text-xl font-bold font-headline mb-2">{t.pricing.enterprise.name}</h3>
              <div className="text-4xl font-extrabold font-headline mb-6 text-on-surface">
                {t.pricing.enterprise.price} <span className="text-base font-normal text-on-surface-variant">{t.pricing.lets_talk}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {t.pricing.enterprise.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={handleCTAClick} variant="ghost" className="w-full">
                {t.pricing.cta_contact}
              </Button>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}