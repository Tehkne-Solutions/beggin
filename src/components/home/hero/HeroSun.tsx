'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroSun() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, -42, -78]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 28, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.5, 0.62, 0.28]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, opacity }}
      className="pointer-events-none absolute right-[10%] top-[16%] z-[2] hidden h-[170px] w-[170px] lg:block"
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        <Image src={heroAssets.sun} alt="" fill priority sizes="170px" className="object-contain" />
      </div>
    </motion.div>
  );
}
