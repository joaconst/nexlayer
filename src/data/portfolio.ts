import { PortfolioProject } from '@/types';

export const portfolio: PortfolioProject[] = [
  {
    id: 'proj-1',
    name: 'FinTrack Dashboard',
    image: '/images/portfolio-1.png',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'TypeScript'],
    url: 'https://fintrack.example.com',
  },
  {
    id: 'proj-2',
    name: 'EcoMarket App',
    image: '/images/portfolio-2.png',
    tags: ['React Native', 'Expo', 'Node.js', 'PostgreSQL'],
    url: 'https://ecomarket.example.com',
  },
  {
    id: 'proj-3',
    name: 'LogiFlow SaaS',
    image: '/images/portfolio-3.png',
    tags: ['React', 'Express', 'Redis', 'Docker'],
    url: 'https://logiflow.example.com',
  },
];