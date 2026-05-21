'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

const menu1 = [
  { label: 'Nossa História', href: '/nossa-historia' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Beg Experience', href: '/agendamento' },
];
const menu2 = [
  { label: 'Prêmios', href: '/premios-beg' },
  { label: 'Sustentabilidade', href: '/sustentabilidade' },
  { label: 'Contato', href: '/contato' },
];
const socials = [
  { label: 'Instagram', icon: 'IG', href: '/contato' },
  { label: 'YouTube', icon: 'YT', href: '/contato' },
  { label: 'Facebook', icon: 'FB', href: '/contato' },
  { label: 'LinkedIn', icon: 'IN', href: '/contato' },
];
const legalLinks = [
  { label: 'Privacidade', href: '/termos-de-uso' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
];

export function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const topMotion = shouldReduceMotion ? undefined : { x: [0, 28, 0] };
  const bottomMotion = shouldReduceMotion ? undefined : { x: [0, -32, 0] };

  return (
    <footer id="contato" className="relative overflow-hidden bg-[#131413] text-[#f4efe3]">
      <div className="pointer-events-none absolute left-[-8%] top-[20%] z-0 h-[130px] w-[420px] opacity-20">
        <motion.div animate={topMotion} transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }} className="relative h-full w-full">
          <Image src={heroAssets.cloudsTop} alt="" fill sizes="420px" className="object-contain opacity-35 grayscale saturate-0 mix-blend-normal" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-[-8%] bottom-[18%] z-0 h-[150px] w-[460px] opacity-18">
        <motion.div animate={bottomMotion} transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }} className="relative h-full w-full">
          <Image src={heroAssets.cloudsTop} alt="" fill sizes="460px" className="object-contain opacity-35 grayscale saturate-0 mix-blend-normal" />
        </motion.div>
      </div>

      <div className="relative z-[2] mx-auto max-w-[1500px] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-center gap-5">
          <span className="h-px flex-1 bg-[#9a7a3a]/50" />
          <span className="text-[#b99f60]">✧</span>
          <span className="h-px flex-1 bg-[#9a7a3a]/50" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.25fr_0.22fr_1px_0.22fr_1px_0.31fr] lg:items-start lg:gap-12">
          <div className="max-w-[220px] lg:max-w-none">
            <Link href="/#inicio" aria-label="Voltar para a página inicial Beg Gin">
              <Image src="/images/footer/beggin-footer-logo.png" alt="Beg Gin" width={220} height={220} className="h-auto w-[150px] object-contain lg:w-[180px]" />
            </Link>
          </div>

          <div className="space-y-4">
            <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Menu</p>
            <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
              {menu1.map((item) => (
                <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-[#9a7a3a]/45" />

          <div className="space-y-4">
            <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Navegação</p>
            <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
              {menu2.map((item) => (
                <Link key={item.label} href={item.href} className="block transition-colors duration-300 hover:text-[#c8a759]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block bg-[#9a7a3a]/45" />

          <div className="space-y-5">
            <p className="font-serifDisplay text-[15px] uppercase tracking-[0.08em] text-[#f4efe3]">Contato</p>
            <div className="space-y-3 text-[14px] font-serifDisplay uppercase tracking-[0.06em] text-[#f4efe3]/85">
              <Link href="/contato" className="block transition-colors duration-300 hover:text-[#c8a759]">Fale Conosco</Link>
              <Link href="/nossa-historia" className="block transition-colors duration-300 hover:text-[#c8a759]">Joaquim Egídio — Campinas, SP</Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socials.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#b99f60]/65 bg-[#1d1f1a]/80 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b99f60] transition duration-300 hover:border-[#c8a759] hover:text-[#c8a759]">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[#9a7a3a]/35 pt-6">
          <div className="flex flex-col gap-4 text-[13px] uppercase tracking-[0.18em] text-[#d6c7a2] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 BEG GIN. TODOS OS DIREITOS RESERVADOS.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[#f4efe3]/80">
              <Link href={legalLinks[0].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[0].label}</Link>
              <span className="text-[#b99f60]">✧</span>
              <Link href={legalLinks[1].href} className="transition-colors duration-300 hover:text-[#c8a759]">{legalLinks[1].label}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
