'use client';

import { useTranslation } from '@/context/LanguageContext';
import SectionReveal from '@/components/ui/SectionReveal';
import ContactForm from '@/components/ui/ContactForm';
import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const { t, lang } = useTranslation();
  
  const whatsappNumber = '+5491112345678';
  const whatsappMessage = lang === 'es' 
    ? 'Hola! Vi su sitio web NexLayer y me interesa hablar sobre un proyecto.'
    : 'Hello! I saw your NexLayer website and I\'m interested in talking about a project.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <section id="contact" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <SectionReveal>
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl text-on-surface mb-4">
              {t.contact.section_title_start} <span className="text-primary">{t.contact.section_title_highlight}</span>{t.contact.section_title_end}
            </h2>
            <p className="text-on-surface-variant text-lg mb-6">
              {t.contact.section_subtitle}
            </p>
            <div className="pt-4 space-y-4">
              {/* Email Option */}
              <div>
                <p className="text-on-surface-variant mb-2">{t.contact.email_label}</p>
                <a
                  href="mailto:hello@nexlayer.dev"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-container text-xl font-semibold transition-colors"
                >
                  <Mail size={24} />
                  {t.contact.email}
                </a>
              </div>
              
              {/* WhatsApp Option */}
              <div>
                <p className="text-on-surface-variant mb-2">{t.contact.whatsapp_label}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-container text-xl font-semibold transition-colors"
                >
                  <MessageCircle size={24} />
                  {t.contact.whatsapp_text}
                </a>
              </div>
            </div>
          </SectionReveal>
          
          {/* Right Column - Form */}
          <SectionReveal delay={0.2}>
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}