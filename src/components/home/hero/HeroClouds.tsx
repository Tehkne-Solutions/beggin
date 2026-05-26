'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function TopWaves() {
  return (
    <motion.div
      className="absolute left-0 top-[7.5%] h-[54px] w-[200%] opacity-[0.34] max-lg:h-[48px] max-md:top-[18%] max-md:h-[34px]"
      initial={false}
      animate={{ opacity: 0.34, y: [0, -2, 0] }}
      transition={{ opacity: { duration: 1, delay: 0.52 }, y: { duration: 42, repeat: Infinity, ease: 'easeInOut' } }}
    >
      <div className="flex h-full w-full animate-cloudTrack">
        {[0, 1].map((item) => (
          <div key={item} className="relative h-full w-1/2 shrink-0">
            <Image
              src={heroAssets.waves}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain object-top opacity-70"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroClouds() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <TopWaves />

      <div className="absolute bottom-[18px] left-0 h-[84px] w-[200%] animate-cloudTrack opacity-45 [animation-direction:reverse] max-md:bottom-[8px] max-md:h-[54px]">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <div key={item} className="relative h-full w-1/2 shrink-0">
              <Image
                src={heroAssets.waves}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
