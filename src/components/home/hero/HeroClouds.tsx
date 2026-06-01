'use client';

import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

function TopWaves() {
  return (
    <div className="absolute left-0 top-[7.5%] h-[54px] w-full opacity-[0.34] max-lg:h-[48px] max-md:top-[18%] max-md:h-[34px]">
      <div className="relative h-full w-full">
        <Image
          src={heroAssets.waves}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-top opacity-70"
        />
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
      <TopWaves />

      <div className="absolute bottom-[18px] left-0 h-[84px] w-full opacity-45 max-md:bottom-[8px] max-md:h-[54px]">
        <div className="relative h-full w-full">
          <Image
            src={heroAssets.waves}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
