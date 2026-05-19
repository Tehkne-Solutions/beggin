'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

export function HeroSeal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.86, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.85, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-[22%] right-[20.5%] z-[8] hidden h-[118px] w-[118px] origin-[50%_8%] animate-sealSwingSoft drop-shadow-[0_14px_26px_rgba(38,28,14,0.13)] lg:block"
      aria-hidden="true"
    >
      <Image
        src={heroAssets.seal}
        alt=""
        fill
        priority
        sizes="118px"
        className="object-contain"
      />
    </motion.div>
  );
}
