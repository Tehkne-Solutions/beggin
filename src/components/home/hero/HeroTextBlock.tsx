'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';
import { MagneticLink } from '@/components/motion/MagneticLink';
import { Reveal } from '@/components/motion/Reveal';

export function HeroTextBlock() {
  return (
    <div className="absolute left-[5.2%] top-[18.5%] z-[9] max-w-[660px] md:left-[6.4vw] md:top-[19.5%] max-md:left-6 max-md:right-6 max-md:top-[12%]">
      <motion.h1
        initial={{ opacity: 0, y: 42, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className="font-serifDisplay text-[clamp(5.2rem,9.2vw,10.9rem)] font-semibold uppercase leading-[0.82] tracking-[0em] text-beggin-ink max-md:text-[clamp(4.6rem,18vw,7.2rem)]"
      >
        BEG
        <br />
        Destilaria
      </motion.h1>

      <Reveal delay={0.18} className="mt-8 max-w-[390px] text-center md:ml-5 max-md:mt-6">
        <div className="relative mx-auto mb-5 h-[20px] w-[42px]">
          <Image
            src={heroAssets.waves}
            alt=""
            fill
            priority
            sizes="42px"
            className="object-contain wave-pulse"
          />
        </div>

        <p className="font-serifDisplay text-[clamp(1.05rem,1.25vw,1.35rem)] font-bold uppercase leading-[1.12] tracking-[0.08em] text-beggin-ink">
          O melhor gin do mundo é artesanal,
          <br />
          é brasileiro!
        </p>

        <MagneticLink
          href="/blog"
          className="group mt-10 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
        >
          <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
            Descubra e saiba mais
          </span>
          <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
            ✦
          </span>
        </MagneticLink>
      </Reveal>
    </div>
  );
}
