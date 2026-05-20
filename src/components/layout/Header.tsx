'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, ShoppingBag, UserRound } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const navItems = [
  { label: 'Nossa História', href: '#historia' },
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
  const logoHeight = useTransform(scrollY, [0, 80], [68, 42]);

  return (
    <motion.header
      style={{ height, background }}
      className="fixed inset-x-0 top-0 z-50 border-b border-beggin-line/70 backdrop-blur-md"
    >
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-[110px_1fr_110px] items-center px-5 sm:px-8 lg:grid-cols-[150px_1fr_190px] lg:px-12">
        <Link href="#inicio" aria-label="Beg Gin" className="flex items-center">
          <motion.div
            style={{ height: logoHeight }}
            className="relative flex w-[82px] items-center overflow-visible lg:w-[96px]"
          >
            <Image
              src="/images/footer/beggin-footer-logo.png"
              alt="Beg Gin"
              fill
              priority
              sizes="96px"
              className="object-contain object-left"
            />
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

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <button aria-label="Minha conta" className="hidden text-beggin-ink transition-colors hover:text-beggin-red sm:block">
            <UserRound size={22} strokeWidth={1.7} />
          </button>
          <button aria-label="Sacola" className="text-beggin-ink transition-colors hover:text-beggin-red">
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
