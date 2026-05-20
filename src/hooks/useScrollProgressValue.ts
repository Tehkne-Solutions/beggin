'use client';

import { useScroll, useTransform } from 'framer-motion';
import type { RefObject } from 'react';

export function useScrollProgressValue(
  target: RefObject<HTMLElement> | undefined,
  outputRange: [number, number] = [0, 1],
) {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 1], outputRange);
}
