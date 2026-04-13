import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Material Design 3 Color System
        primary: '#3649db',
        'primary-container': '#5265f5',
        'primary-fixed': '#dfe0ff',
        'on-primary': '#ffffff',
        surface: '#f8f9fb',
        'surface-container-low': '#f3f4f6',
        'surface-container': '#edeef0',
        'surface-container-high': '#e7e8ea',
        'surface-container-highest': '#e1e2e4',
        'surface-container-lowest': '#ffffff',
        'on-surface': '#191c1e',
        'on-surface-variant': '#454655',
        outline: '#757686',
        'outline-variant': '#c5c5d7',
        'inverse-surface': '#2e3132',
        'inverse-on-surface': '#f0f1f3',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite 1s',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'scale-on-hover': 'scaleOnHover 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleOnHover: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.05)' },
        },
      },
      backdropBlur: {
        '24': '24px',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#3649db 0.5px, transparent 0.5px)',
        'gradient-primary': 'linear-gradient(135deg, #3649db 0%, #5265f5 100%)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;