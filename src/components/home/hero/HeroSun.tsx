'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
      className="pointer-events-none absolute right-[13%] top-[14%] z-[2] hidden h-[170px] w-[170px] lg:block"
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="100" cy="100" r="39" fill="none" stroke="rgba(93,85,72,0.28)" strokeWidth="2" />
        <circle cx="100" cy="100" r="22" fill="none" stroke="rgba(93,85,72,0.18)" strokeWidth="1.5" />
        {Array.from({ length: 24 }).map((_, index) => {
          const angle = (index / 24) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 52;
          const y1 = 100 + Math.sin(angle) * 52;
          const x2 = 100 + Math.cos(angle) * 86;
          const y2 = 100 + Math.sin(angle) * 86;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(93,85,72,0.24)" strokeWidth="1.4" strokeLinecap="round" />;
        })}
        <path d="M75 103c9 10 19 15 30 0" fill="none" stroke="rgba(93,85,72,0.23)" strokeWidth="2" strokeLinecap="round" />
        <path d="M72 86c9-5 18-5 27 0m30 0c9-5 18-5 27 0" fill="none" stroke="rgba(93,85,72,0.23)" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>
    </motion.div>
  );
}
