'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  variant?: 'fadeUp' | 'revealClip' | 'softScale';
};

const baseVariants = {
  fadeUp: (y = 24) => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  }),
  revealClip: () => ({
    hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    visible: { opacity: 1, clipPath: 'inset(0 0 0 0)' },
  }),
  softScale: () => ({
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  }),
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  variant = 'fadeUp',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = baseVariants[variant](y);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={variants}
      transition={{ duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
