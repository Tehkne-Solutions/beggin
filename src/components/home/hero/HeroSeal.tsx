'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

export function HeroSeal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.85, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-[20%] right-[20%] z-[8] hidden h-[124px] w-[124px] origin-top animate-sealSwing drop-shadow-[0_16px_30px_rgba(38,28,14,0.14)] lg:block"
      aria-hidden="true"
    >
      <Image src={heroAssets.seal} alt="" fill priority sizes="124px" className="object-contain" />
    </motion.div>
  );
}
