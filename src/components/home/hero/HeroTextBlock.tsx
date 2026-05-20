'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';
import { MagneticLink } from '@/components/motion/MagneticLink';
import { Reveal } from '@/components/motion/Reveal';

export function HeroTextBlock() {
  return (
    <div className="absolute left-[5.2%] top-[18.5%] z-[9] max-w-[620px] md:left-[6.4vw] md:top-[19.5%] max-md:left-6 max-md:right-6 max-md:top-[12%]">
      <Reveal variant="revealClip" className="overflow-hidden">
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-serifDisplay text-[clamp(7.02rem,11.7vw,13.78rem)] font-semibold uppercase leading-[0.78] tracking-[0em] text-beggin-ink max-md:text-[clamp(5.6rem,24vw,8.4rem)]"
        >
          BEG
          <br />
          GIN
        </motion.h1>
      </Reveal>

      <Reveal delay={0.18} className="mt-8 max-w-[320px] text-center md:ml-5 max-md:mt-6">
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

        <p className="font-serifDisplay text-[clamp(1.05rem,1.25vw,1.35rem)] font-bold uppercase leading-[1.08] tracking-[0.08em] text-beggin-ink">
          O clássico brasileiro.
          <br />
          Feito para ser lembrado.
        </p>

        <MagneticLink
          href="#historia"
          className="group mt-10 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
        >
          <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
            Descubra mais
          </span>
          <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
            ✦
          </span>
        </MagneticLink>
      </Reveal>
    </div>
  );
}
