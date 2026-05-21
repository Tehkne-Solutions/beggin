import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Beg Gin',
  description: 'O clássico brasileiro. Feito para ser lembrado.',
  other: {
    'link[rel=preload][as=image]': '/images/home/beggin-home-hero-elemento-garrafa-principal-mobile-lcp.webp',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <MotionViewport />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
