'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

export function HeroSeal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.85, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-[20.5%] right-[21.5%] z-[7] hidden h-[112px] w-[112px] [transform-style:preserve-3d] drop-shadow-[0_12px_20px_rgba(38,28,14,0.16)] lg:block"
      aria-hidden="true"
    >
      <motion.div
        initial={{ rotate: 0, rotateY: 0 }}
        animate={
          shouldReduceMotion
            ? { rotate: 0, rotateY: 0 }
            : { rotate: [0, 1.2, -1.2, 0], rotateY: [0, 2.4, -2.4, 0] }
        }
        transition={{
          duration: 7.2,
          ease: 'easeInOut',
          delay: 1.71,
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
        className="h-full w-full [transform-style:preserve-3d]"
      >
        <Image
          src={heroAssets.seal}
          alt=""
          fill
          priority
          sizes="112px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
