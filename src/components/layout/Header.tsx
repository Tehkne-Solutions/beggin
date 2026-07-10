'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ExternalLink, Menu, MessageCircle, ShoppingBag, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { BrandLogo } from '@/components/brand/BrandLogo';

const whatsappContactUrl =
  'https://wa.me/5519996638642?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20BEG%20Destilaria%20e%20gostaria%20de%20saber%20mais.';
const vivaHypeUrl = 'https://vivahype.com.br/#contato';

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Nossa História', href: '/nossa-historia' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'BEG Experience', href: '/beg-experience' },
  { label: 'Prêmios', href: '/premios' },
  { label: 'Sustentabilidade', href: '/sustentabilidade' },
  { label: 'Blog', href: '/blog' },
  { label: 'Viva Hype', href: vivaHypeUrl, external: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 80], [76, 56]);
  const background = useTransform(scrollY, [0, 80], ['rgba(252, 247, 241, 0.78)', 'rgba(252, 247, 241, 0.96)']);
  const logoHeight = useTransform(scrollY, [0, 80], [62, 42]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        style={{ height, background }}
        className="fixed inset-x-0 top-0 z-50 border-b border-beggin-line/70 backdrop-blur-md"
      >
        <div className="mx-auto grid h-full max-w-[1500px] grid-cols-[110px_1fr_110px] items-center px-5 sm:px-8 lg:grid-cols-[120px_1fr_150px] lg:px-10 xl:grid-cols-[150px_1fr_170px] xl:px-12">
          <Link href="/#inicio" aria-label="BEG Destilaria" className="flex items-center">
            <motion.div
              style={{ height: logoHeight }}
              className="relative flex w-[54px] items-center overflow-visible lg:w-[62px]"
            >
              <BrandLogo variant="dark" className="h-full w-auto" />
            </motion.div>
          </Link>

          <nav className="hidden items-center justify-center gap-4 xl:gap-6 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-1 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.13em] text-beggin-ink transition-colors hover:text-beggin-red xl:text-[11px] xl:tracking-[0.15em]"
              >
                {item.label}
                {item.external ? <ExternalLink size={11} strokeWidth={1.8} aria-hidden="true" /> : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <Link
              aria-label="Fale pelo WhatsApp"
              href={whatsappContactUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden text-beggin-ink transition-colors hover:text-beggin-red sm:block"
            >
              <MessageCircle size={22} strokeWidth={1.7} />
            </Link>
            <Link aria-label="Produtos" href="/produtos" className="text-beggin-ink transition-colors hover:text-beggin-red">
              <ShoppingBag size={22} strokeWidth={1.7} />
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Fechar navegação' : 'Abrir navegação'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center text-beggin-ink transition-colors hover:text-beggin-red lg:hidden"
            >
              {isMenuOpen ? <X size={27} strokeWidth={1.7} /> : <Menu size={27} strokeWidth={1.7} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#131413]/45 pt-[76px] backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              aria-label="Navegação mobile"
              className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-beggin-line/70 bg-[#FCF7F1] px-6 py-8 shadow-[0_24px_70px_rgba(0,0,0,0.2)]"
            >
              <div className="mx-auto flex max-w-[620px] flex-col divide-y divide-[#c8b98e]/45">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-5 font-serifDisplay text-[1rem] font-bold uppercase tracking-[0.15em] text-beggin-ink transition-colors hover:text-beggin-red"
                  >
                    {item.label}
                    {item.external ? <ExternalLink size={16} strokeWidth={1.7} aria-hidden="true" /> : <span className="text-beggin-gold">✦</span>}
                  </Link>
                ))}
                <Link
                  href={whatsappContactUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-7 inline-flex items-center justify-center gap-3 bg-beggin-red px-6 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white"
                >
                  <MessageCircle size={18} strokeWidth={1.7} />
                  Falar com a BEG
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
