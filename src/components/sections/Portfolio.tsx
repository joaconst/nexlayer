'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import PortfolioCard from '@/components/ui/PortfolioCard';
import { portfolio } from '@/data/portfolio';

export default function Portfolio() {
  const { t } = useTranslation();
  
  return (
    <section id="portfolio" className="bg-softgray py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
              {t.portfolio.section_title}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {t.portfolio.section_subtitle}
            </p>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project, index) => (
            <SectionReveal key={project.id} delay={index * 0.1}>
              <PortfolioCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}