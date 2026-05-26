import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { FloatingActions } from '@/components/common/FloatingActions';
import { MotionViewport } from '@/components/motion/MotionViewport';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const intro = localFont({
  src: '../../public/fonts/intro/intro-regular.ttf',
  variable: '--font-intro',
  display: 'swap',
  weight: '400',
});

const gearedSlab = localFont({
  src: '../../public/fonts/geared-slab/geared-slab-bold.ttf',
  variable: '--font-geared',
  display: 'swap',
  weight: '700',
});

export const metadata: Metadata = {
  title: 'BEG Destilaria',
  description: 'O melhor gin do mundo é artesanal, é brasileiro.',
  other: {
    'link[rel=preload][as=image]': '/images/home/beggin-home-hero-elemento-garrafa-principal-mobile-lcp.webp',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable} ${intro.variable} ${gearedSlab.variable}`}>
        <MotionViewport />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
