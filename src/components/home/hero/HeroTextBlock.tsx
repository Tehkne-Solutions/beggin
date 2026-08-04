'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';
import { Reveal } from '@/components/motion/Reveal';

export function HeroTextBlock() {
  return (
    <div className="absolute left-[5.2%] top-[15.5%] z-[9] w-[min(47vw,720px)] md:left-[6.4vw] md:top-[16.5%] max-md:left-5 max-md:right-5 max-md:top-[10.5%] max-md:w-auto">
      <motion.h1
        initial={{ opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="font-serifDisplay font-normal uppercase text-beggin-ink"
        aria-label="BEG Destilaria"
      >
        <span className="block text-[clamp(5rem,8.2vw,9.7rem)] leading-[0.9] tracking-[-0.025em] max-md:text-[clamp(4.4rem,20vw,7rem)]">
          BEG
        </span>
        <span className="mt-2 block whitespace-nowrap text-[clamp(2.35rem,4.15vw,5rem)] leading-[1] tracking-[-0.03em] max-md:mt-1 max-md:text-[clamp(2.25rem,10.4vw,3.9rem)]">
          Destilaria
        </span>
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

        <p className="font-sansUi text-[clamp(1.05rem,1.25vw,1.35rem)] font-bold uppercase leading-[1.28] tracking-[0.08em] text-beggin-ink">
          O melhor gin do mundo é artesanal,
          <br />
          é brasileiro!
        </p>
      </Reveal>
    </div>
  );
}
