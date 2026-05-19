'use client';

import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function HeroClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div className="absolute left-0 top-[7%] h-[120px] w-[200%] animate-cloudTrack opacity-70 max-md:top-[16%] max-md:h-[95px]">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <div key={`top-${item}`} className="relative h-full w-1/2 shrink-0">
              <Image src={heroAssets.cloudsTop} alt="" fill priority sizes="100vw" className="object-contain object-top" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-18px] left-0 h-[170px] w-[200%] animate-cloudTrack opacity-80 max-md:bottom-[-8px] max-md:h-[120px]">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <div key={`bottom-${item}`} className="relative h-full w-1/2 shrink-0">
              <Image src={heroAssets.cloudsBottom} alt="" fill priority sizes="100vw" className="object-cover object-bottom" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
