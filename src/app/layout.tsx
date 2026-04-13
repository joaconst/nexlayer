import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
  weight: ['700', '800'],
});

export const metadata: Metadata = {
  title: 'NexLayer — Web & Mobile Development Agency',
  description: 'We build high-performance web and mobile applications. Frontend, Backend, Full Stack, and React Native. Bilingual EN/ES team.',
  keywords: ['web development', 'mobile app', 'Next.js', 'React Native', 'LATAM', 'agency'],
  authors: [{ name: 'NexLayer' }],
  openGraph: {
    title: 'NexLayer — Build Better Digital Products',
    description: 'Professional web & mobile development. From $500.',
    url: 'https://nexlayer.dev',
    siteName: 'NexLayer',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NexLayer Agency' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexLayer — Web & Mobile Agency',
    description: 'Professional development services from $500.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}