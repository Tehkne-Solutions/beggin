'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function TopClouds() {
  return (
    <div className="absolute left-0 top-[7%] h-[140px] w-[200%] animate-cloudTrack opacity-60 max-lg:h-[120px] max-md:top-[17%] max-md:h-[105px]">
      <div className="flex h-full w-full">
        {[0, 1].map((item) => (
          <div key={item} className="relative h-full w-1/2 shrink-0">
            <Image
              src={heroAssets.cloudsTop}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
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
