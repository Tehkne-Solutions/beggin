'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function HeroTextBlock() {
  return (
    <div className="absolute left-[5.2%] top-[21%] z-[9] max-w-[620px] md:left-[6.5vw] md:top-[23%]">
      <motion.h1
        initial={{ opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="font-serifDisplay text-[clamp(7.02rem,11.7vw,13.78rem)] font-semibold uppercase leading-[0.78] tracking-[-0.055em] text-beggin-ink"
      >
        BEG
        <br />
        GIN
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.72, ease: 'easeOut' }}
        className="mt-8 max-w-[310px] text-center md:ml-5"
      >
        <div className="mb-5 text-3xl font-bold leading-none text-beggin-red">≋</div>
        <p className="font-serifDisplay text-[clamp(1.05rem,1.25vw,1.35rem)] font-bold uppercase leading-[1.08] tracking-[0.08em] text-beggin-ink">
          O clássico brasileiro.
          <br />
          Feito para ser lembrado.
        </p>
        <Link
          href="#historia"
          className="group mt-10 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
        >
          <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
            Descubra mais
          </span>
          <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">✦</span>
        </Link>
      </motion.div>
    </div>
  );
}
