'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';

export default function Services() {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <SectionReveal>
          <div className="mb-20">
            <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-4">
              {t.services.section_title}
            </h2>
            <div className="w-24 h-1 bg-primary"></div>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SectionReveal key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}