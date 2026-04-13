'use client';

import { Testimonial } from '@/types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-ambient hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
      <Quote className="text-primary mb-4 flex-shrink-0" size={32} strokeWidth={1.5} />
      <p className="text-on-surface-variant italic text-base leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center flex-shrink-0">
          <span className="text-on-primary font-semibold text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-on-surface">{testimonial.name}</h4>
          <p className="text-on-surface-variant text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}