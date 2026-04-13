'use client';

import { useTranslation } from '@/context/LanguageContext';
import { PortfolioProject } from '@/types';
import Image from 'next/image';
import Button from './Button';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-ambient hover:-translate-y-2 transition-all duration-300 hover:shadow-indigo-glow group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-navy text-xl mb-3">
          {project.name}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-softgray text-slate-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button
          href={project.url}
          variant="ghost"
          size="sm"
          className="w-full"
        >
          {t.portfolio.view_project}
        </Button>
      </div>
    </div>
  );
}