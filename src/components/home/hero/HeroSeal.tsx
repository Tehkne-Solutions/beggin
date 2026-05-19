'use client';

import { motion } from 'framer-motion';

export function HeroSeal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.85, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-[20%] right-[20%] z-[8] hidden h-[124px] w-[124px] origin-top animate-sealSwing rounded-full border border-beggin-gold/60 bg-beggin-paperSoft/86 shadow-soft backdrop-blur-sm lg:block"
      aria-hidden="true"
    >
      <div className="absolute inset-3 rounded-full border border-dashed border-beggin-gold/70" />
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <div className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.26em] text-beggin-ink">Beg Gin</div>
        <div className="my-2 text-3xl font-bold leading-none text-beggin-red">≋</div>
        <div className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.2em] text-beggin-ink">Campinas · SP</div>
      </div>
    </motion.div>
  );
}
