'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function AnimatedWaveBand({ position }: { position: 'top' | 'bottom' }) {
  const shouldReduceMotion = useReducedMotion();
  const isTop = position === 'top';

  return (
    <div
      className={[
        'absolute left-0 w-full overflow-hidden',
        isTop
          ? 'top-[7.5%] h-[54px] opacity-[0.34] max-lg:h-[48px] max-md:top-[18%] max-md:h-[34px]'
          : 'bottom-[18px] h-[84px] opacity-45 max-md:bottom-[8px] max-md:h-[54px]',
      ].join(' ')}
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { x: isTop ? [0, 18, 0] : [0, -22, 0] }}
        transition={{ duration: isTop ? 11 : 13, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full"
      >
        <Image
          src={heroAssets.waves}
          alt=""
          fill
          priority
          sizes="100vw"
          className={[
            'object-contain opacity-80',
            isTop ? 'object-top' : 'object-bottom',
          ].join(' ')}
        />
      </motion.div>
    </div>
  );
}

export function HeroClouds() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <AnimatedWaveBand position="top" />
      <AnimatedWaveBand position="bottom" />
    </div>
  );
}
