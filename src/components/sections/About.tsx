'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();
  
  const values = [
    { number: '01', key: 'quality' },
    { number: '02', key: 'speed' },
    { number: '03', key: 'communication' },
  ];
  
  return (
    <section id="about" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <SectionReveal>
              <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-8 leading-tight">
                {t.about.title} <span className="text-primary">{t.about.title_highlight}</span>
              </h2>
              <div className="space-y-8">
                {values.map((value) => (
                  <div key={value.number} className="flex gap-4">
                    <div className="text-primary font-bold text-xl">{value.number}.</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{t.about.values[value.key as keyof typeof t.about.values].title}</h4>
                      <p className="text-on-surface-variant">{t.about.values[value.key as keyof typeof t.about.values].text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
          
          <div className="md:w-1/2 relative">
            <SectionReveal delay={0.2}>
              <div className="rounded-xl overflow-hidden shadow-2xl relative z-10 transform md:rotate-2">
                <Image
                  src="/images/img2.webp"
                  alt="NexLayer team"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-primary-container/20 rounded-xl -z-0 transform md:-rotate-2"></div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}