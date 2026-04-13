'use client';

import { useTranslation } from '@/context/LanguageContext';
import { Service } from '@/types';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useTranslation();
  
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ElementType;
  
  const getNestedValue = (path: string) => {
    return path.split('.').reduce((obj, key) => obj?.[key as keyof typeof obj], t) as string;
  };
  
  return (
    <div className="p-8 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
      <div className="w-12 h-12  rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-black group-hover:text-on-primary transition-all"
      style={{ backgroundColor: 'rgba(82, 101, 245, 0.2)' }}
      >
        {IconComponent && <IconComponent size={24} strokeWidth={1.5} />}
      </div>
      <h3 className="text-xl font-bold font-headline mb-2 min-h-[56px]">
        {getNestedValue(service.titleKey)}
      </h3>
      <p className="text-on-surface-variant text-sm mb-6 leading-relaxed min-h-[100px]">
        {getNestedValue(service.descriptionKey)}
      </p>
      <div className="mt-auto pt-6 border-t border-surface-variant flex justify-center items-center">
        <span className="text-primary font-bold font-headline">{getNestedValue(service.priceKey)}</span>
      </div>
    </div>
  );
}