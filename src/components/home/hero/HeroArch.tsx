'use client';

import { motion } from 'framer-motion';

export function HeroArch() {
  return (
    <motion.svg
      className="pointer-events-none absolute left-1/2 top-[7%] z-[3] h-[78%] w-[52%] -translate-x-1/2 overflow-visible md:w-[42%]"
      viewBox="0 0 430 610"
      fill="none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.path
        d="M28 604V216C28 100.6 111.7 22 215 22s187 78.6 187 194v388"
        stroke="rgba(185,154,93,0.82)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.55, ease: 'easeInOut' }}
      />
    </motion.svg>
  );
}
