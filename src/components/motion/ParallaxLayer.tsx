'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function ParallaxLayer({ children, className, strength = 16 }: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotion();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 140, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 140, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
      y.set(0);
      return;
    }

    const element = elementRef.current;
    if (!element) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      x.set(offsetX * strength);
      y.set(offsetY * strength * 0.55);
    };

    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
    };

    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [shouldReduceMotion, x, y, strength]);

  return (
    <motion.div
      ref={elementRef}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
