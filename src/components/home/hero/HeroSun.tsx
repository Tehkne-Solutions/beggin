'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroSun() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 95]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.62, 0.95, 0.28]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 16]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotate }}
      className="pointer-events-none absolute right-[12%] top-[13%] z-[2] hidden h-[190px] w-[190px] lg:block"
      aria-hidden="true"
    >
      <motion.div className="relative h-full w-full" animate={{ rotate: 360 }} transition={{ duration: 130, repeat: Infinity, ease: 'linear' }}>
        <Image src={heroAssets.sun} alt="" fill priority sizes="190px" className="object-contain" />
      </motion.div>
    </motion.div>
  );
}
