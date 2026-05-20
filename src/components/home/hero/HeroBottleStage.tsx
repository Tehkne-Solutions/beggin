'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.965 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.05, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-[61%] top-[54%] z-[5] h-[clamp(560px,70vh,760px)] w-[clamp(560px,45vw,760px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[61%] max-lg:w-[620px] max-md:left-1/2 max-md:top-[57%] max-md:h-[480px] max-md:w-[360px]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -2, 0], rotate: [-0.08, 0.08, -0.08] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full drop-shadow-[0_34px_48px_rgba(38,28,14,0.14)]"
      >
        <Image
          src={heroAssets.mainProduct}
          alt="Garrafa Beggin Gin em base de mármore com botânicos"
          fill
          priority
          sizes="(max-width: 768px) 360px, 760px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
