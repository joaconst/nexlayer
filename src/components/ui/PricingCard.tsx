'use client';

import { useTranslation } from '@/context/LanguageContext';
import { PricingPlan } from '@/types';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  isEnterprise?: boolean;
}

export default function PricingCard({ plan, isEnterprise = false }: PricingCardProps) {
  const { t } = useTranslation();
  
  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  if (isEnterprise) {
    return (
      <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-xl p-8 shadow-ambient border border-indigo/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-2xl text-white mb-2">{plan.name}</h3>
            <p className="text-slate-300">{plan.features.slice(0, 3).join(' · ')}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">{plan.price}</p>
            <p className="text-slate-400 text-sm">{t.pricing.lets_talk}</p>
          </div>
          <Button onClick={handleCTAClick} variant="primary">
            {t.pricing.cta_contact}
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div
      className={`rounded-xl p-6 shadow-ambient transition-all duration-300 hover:-translate-y-2 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-navy to-indigo border-2 border-indigo relative'
          : 'bg-navy-700 border border-indigo/20'
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-3 right-4">
          <span className="bg-indigo text-white text-xs font-semibold px-3 py-1 rounded-full">
            {t.pricing.most_popular}
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-bold text-2xl text-white mb-2">{plan.name}</h3>
        <div className="mb-2">
          <span className="text-4xl font-bold text-white">{plan.price}</span>
          {plan.price !== 'Custom' && (
            <span className="text-slate-300 text-sm ml-1">{t.pricing.per_project}</span>
          )}
        </div>
        {plan.deliveryDays && (
          <p className="text-indigo text-sm">~{plan.deliveryDays} days delivery</p>
        )}
      </div>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="text-indigo flex-shrink-0 mt-0.5" size={18} />
            <span className="text-slate-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button onClick={handleCTAClick} variant={plan.highlighted ? 'primary' : 'ghost'} className="w-full">
        {plan.cta === 'Get Started' ? t.pricing.cta_start : t.pricing.cta_contact}
      </Button>
    </div>
  );
}