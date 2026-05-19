'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroSun() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 58]);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [0.42, 0.58, 0.22]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, rotate }}
      className="pointer-events-none absolute right-[11%] top-[16%] z-[2] hidden h-[170px] w-[170px] lg:block"
      aria-hidden="true"
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 220, repeat: Infinity, ease: 'linear' }}
      >
        <Image
          src={heroAssets.sun}
          alt=""
          fill
          priority
          sizes="170px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
