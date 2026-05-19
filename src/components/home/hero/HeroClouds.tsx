'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function TopClouds() {
  return (
    <motion.div
      className="absolute left-[26%] top-[12%] h-[95px] w-[520px] max-lg:left-[22%] max-lg:w-[420px] max-md:left-[8%] max-md:top-[18%] max-md:w-[360px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 0.72, y: [0, -5, 0], x: [-10, 12, -10] }}
      transition={{ opacity: { duration: 1, delay: 0.55 }, y: { duration: 32, repeat: Infinity, ease: 'easeInOut' }, x: { duration: 40, repeat: Infinity, ease: 'easeInOut' } }}
    >
      <Image src={heroAssets.cloudsTop} alt="" fill priority sizes="520px" className="object-contain" />
    </motion.div>
  );
}

export function HeroClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <TopClouds />

      <div className="absolute bottom-[-12px] left-0 h-[150px] w-[200%] animate-cloudTrack opacity-70 max-md:h-[110px]">
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
