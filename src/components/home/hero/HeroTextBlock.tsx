'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';
import { Reveal } from '@/components/motion/Reveal';

export function HeroTextBlock() {
  return (
    <div className="absolute left-[5.2%] top-[16.5%] z-[9] max-w-[560px] md:left-[6.4vw] md:top-[17.5%] max-md:left-6 max-md:right-6 max-md:top-[11%]">
      <motion.h1
        initial={{ opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="font-serifDisplay text-[clamp(4.65rem,7.55vw,9.15rem)] font-semibold uppercase leading-[0.76] tracking-[-0.035em] text-beggin-ink max-md:text-[clamp(4.1rem,16vw,6.7rem)]"
        aria-label="BEG Destilaria"
      >
        <span className="block">BEG</span>
        <span className="block">DESTI</span>
        <span className="block">LARIA</span>
      </motion.h1>

      <Reveal delay={0.18} className="mt-8 max-w-[420px] md:ml-5 max-md:mt-6 max-md:text-center">
        <div className="relative mb-5 h-[20px] w-[42px] max-md:mx-auto" aria-hidden="true">
          <Image
            src={heroAssets.waves}
            alt=""
            fill
            priority
            sizes="42px"
            className="object-contain"
          />
        </div>

        <p className="font-serifDisplay text-[clamp(1.05rem,1.25vw,1.35rem)] font-bold uppercase leading-[1.12] tracking-[0.08em] text-beggin-ink">
          O melhor gin do mundo é artesanal,
          <br />
          é brasileiro!
        </p>
      </Reveal>
    </div>
  );
}
