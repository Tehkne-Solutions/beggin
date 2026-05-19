'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function TopClouds() {
  return (
    <motion.div
      className="absolute left-0 top-[7%] h-[150px] w-[200%] opacity-70 max-lg:h-[136px] max-md:top-[16%] max-md:h-[118px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 0.62,
        y: [0, -3, 0],
      }}
      transition={{
        opacity: { duration: 1, delay: 0.52 },
        y: { duration: 38, repeat: Infinity, ease: 'easeInOut' },
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
              className="object-contain object-top"
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

      <div className="absolute bottom-[-22px] left-0 h-[145px] w-[200%] animate-cloudTrack opacity-55 max-md:bottom-[-10px] max-md:h-[105px]">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <div key={item} className="relative h-full w-1/2 shrink-0">
              <Image
                src={heroAssets.cloudsBottom}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
