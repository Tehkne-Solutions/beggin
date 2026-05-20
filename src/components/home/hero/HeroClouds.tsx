'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function TopClouds() {
  return (
    <motion.div
      className="absolute left-0 top-[8.5%] h-[92px] w-[200%] opacity-[0.62] max-lg:h-[86px] max-md:top-[17%] max-md:h-[76px]"
      initial={false}
      animate={{
        opacity: 0.62,
        y: [0, -2, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: 0.52 },
        y: { duration: 42, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <div className="flex h-full w-full animate-cloudTrack">
        {[0, 1].map((item) => (
          <div key={item} className="relative h-full w-1/2 shrink-0">
            <Image
              src={heroAssets.cloudsTop}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-contain object-top grayscale saturate-0"
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
      <TopClouds />

      <div className="absolute bottom-[2px] left-0 h-[175px] w-[200%] animate-cloudTrack opacity-75 max-md:bottom-[-4px] max-md:h-[115px]">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <div key={item} className="relative h-full w-1/2 shrink-0">
              <Image
                src={heroAssets.cloudsBottom}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom grayscale saturate-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
