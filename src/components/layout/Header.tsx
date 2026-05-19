'use client';

import Link from 'next/link';
import { Menu, ShoppingBag, UserRound } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { label: 'Nossa história', href: '#historia' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Beg Experience', href: '#experience' },
  { label: 'Prêmios', href: '#premios' },
  { label: 'Sustentabilidade', href: '#sustentabilidade' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 80], [76, 56]);
  const background = useTransform(scrollY, [0, 80], ['rgba(251, 247, 238, 0.72)', 'rgba(251, 247, 238, 0.92)']);
  const logoScale = useTransform(scrollY, [0, 80], [1, 0.82]);

  return (
    <motion.header
      style={{ height, background }}
      className="fixed inset-x-0 top-0 z-50 border-b border-beggin-line/70 backdrop-blur-md"
    >
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-[120px_1fr_120px] items-center px-5 sm:px-8 lg:grid-cols-[170px_1fr_210px] lg:px-12">
        <Link href="#inicio" aria-label="Beggin Gin" className="flex items-center">
          <motion.div style={{ scale: logoScale }} className="origin-left leading-none">
            <div className="font-sansUi text-[26px] font-black tracking-[0.33em] text-beggin-ink">BEG</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-[18px] font-bold leading-none text-beggin-red">≋</span>
              <span className="font-serifDisplay text-[13px] font-bold tracking-[0.38em] text-beggin-red">GIN</span>
            </div>
          </motion.div>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em] text-beggin-ink transition-colors hover:text-beggin-red"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <button aria-label="Minha conta" className="hidden text-beggin-ink transition-colors hover:text-beggin-red sm:block">
            <UserRound size={22} strokeWidth={1.7} />
          </button>
          <button aria-label="Sacola" className="hidden text-beggin-ink transition-colors hover:text-beggin-red sm:block">
            <ShoppingBag size={22} strokeWidth={1.7} />
          </button>
          <button aria-label="Abrir menu" className="text-beggin-ink lg:hidden">
            <Menu size={26} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
