import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'frontend',
    icon: 'Monitor',
    titleKey: 'services.frontend.title',
    descriptionKey: 'services.frontend.description',
    priceKey: 'services.frontend.price',
  },
  {
    id: 'backend',
    icon: 'Server',
    titleKey: 'services.backend.title',
    descriptionKey: 'services.backend.description',
    priceKey: 'services.backend.price',
  },
  {
    id: 'fullstack',
    icon: 'Layers',
    titleKey: 'services.fullstack.title',
    descriptionKey: 'services.fullstack.description',
    priceKey: 'services.fullstack.price',
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    titleKey: 'services.mobile.title',
    descriptionKey: 'services.mobile.description',
    priceKey: 'services.mobile.price',
  },
];