'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-primary text-on-primary hover:bg-primary-container shadow-indigo-glow',
    ghost: 'bg-transparent border border-outline-variant/40 text-primary hover:bg-surface-container-low',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed hover:translate-y-0',
    className
  );
  
  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={combinedClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}