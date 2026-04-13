'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import TestimonialCard from '@/components/ui/TestimonialCard';

export default function Testimonials() {
  const { t } = useTranslation();
  
  // Obtener los testimonios desde la traducción
  const testimonials = t.testimonials.list as Array<{
    id: string;
    quote: string;
    name: string;
    company: string;
    avatar: string;
  }>;
  
  return (
    <section id="testimonials" className="bg-surface-container-low py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-on-surface mb-4">
              {t.testimonials.section_title}
            </h2>
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <SectionReveal key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}