'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

export function HeroSeal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1, rotateY: [0, 360], rotateZ: [-2, 2, -2] }}
      transition={{
        opacity: { duration: 0.85, delay: 0.86, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.85, delay: 0.86, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: 18, repeat: Infinity, ease: 'linear' },
        rotateZ: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
      className="pointer-events-none absolute bottom-[22%] right-[21%] z-[7] hidden h-[118px] w-[118px] [transform-style:preserve-3d] drop-shadow-[0_12px_20px_rgba(38,28,14,0.16)] lg:block"
      aria-hidden="true"
    >
      <Image src={heroAssets.seal} alt="" fill priority sizes="118px" className="object-contain" />
    </motion.div>
  );
}
