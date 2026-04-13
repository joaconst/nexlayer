export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  priceKey: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  image: string;
  tags: string[];
  url: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  deliveryDays: number | null;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  budget: '< $500' | '$500 - $1,500' | '$1,500 - $3,000' | '$3,000+';
}