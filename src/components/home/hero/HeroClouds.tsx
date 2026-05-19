'use client';

import { motion } from 'framer-motion';

function Cloud({ className, delay = 0, duration = 30 }: { className: string; delay?: number; duration?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 0.48, y: [0, -5, 0], x: [-8, 12, -8] }}
      transition={{ opacity: { duration: 1, delay }, y: { duration, repeat: Infinity, ease: 'easeInOut' }, x: { duration: duration + 8, repeat: Infinity, ease: 'easeInOut' } }}
    >
      <svg viewBox="0 0 260 90" className="h-full w-full" aria-hidden="true">
        <path d="M10 63c25-21 44-20 58-13 13-31 55-37 77-13 17-15 49-12 62 11 15-4 31 0 43 15" fill="none" stroke="rgba(93,85,72,0.28)" strokeWidth="2" strokeLinecap="round" />
        <path d="M35 68c19-12 39-13 57-4m51-1c24-10 49-8 73 5" fill="none" stroke="rgba(93,85,72,0.18)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

export function HeroClouds() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <Cloud className="absolute left-[4%] top-[18%] h-[70px] w-[210px]" delay={0.35} duration={28} />
      <Cloud className="absolute left-[38%] top-[13%] h-[76px] w-[230px] opacity-60" delay={0.6} duration={36} />
      <Cloud className="absolute right-[2%] top-[18%] h-[84px] w-[270px]" delay={0.8} duration={42} />

      <div className="absolute bottom-[-5px] left-0 h-[118px] w-[200%] animate-cloudTrack opacity-45">
        <div className="flex h-full w-full">
          {[0, 1].map((item) => (
            <svg key={item} viewBox="0 0 1440 120" className="h-full w-1/2 shrink-0" preserveAspectRatio="none">
              <path d="M0 94c65-42 123-47 180-18 44-50 126-59 185-18 70-62 182-55 239 19 70-36 150-29 210 11 86-69 220-55 285 18 76-34 161-27 226 13 56-28 89-31 115-17v18H0Z" fill="rgba(248,241,227,0.82)" />
              <path d="M0 95c65-42 123-47 180-18 44-50 126-59 185-18 70-62 182-55 239 19 70-36 150-29 210 11 86-69 220-55 285 18 76-34 161-27 226 13" fill="none" stroke="rgba(93,85,72,0.19)" strokeWidth="2" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
