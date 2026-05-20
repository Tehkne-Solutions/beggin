'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxRotateX?: number;
  maxRotateY?: number;
  maxTranslate?: number;
};

export function TiltCard({
  children,
  className,
  maxRotateX = 3,
  maxRotateY = 4,
  maxTranslate = 8,
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const elementRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 140, damping: 18 });
  const ySpring = useSpring(y, { stiffness: 140, damping: 18 });
  const rotateXSpring = useSpring(rotateX, { stiffness: 140, damping: 18 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 140, damping: 18 });

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
      y.set(0);
      rotateX.set(0);
      rotateY.set(0);
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

      x.set(offsetX * maxTranslate);
      y.set(offsetY * -maxTranslate * 0.6);
      rotateX.set(-offsetY * maxRotateX);
      rotateY.set(offsetX * maxRotateY);
    };

    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
      rotateX.set(0);
      rotateY.set(0);
    };

    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [shouldReduceMotion, x, y, rotateX, rotateY, maxRotateX, maxRotateY, maxTranslate]);

  return (
    <motion.div
      ref={elementRef}
      style={{ x: xSpring, y: ySpring, rotateX: rotateXSpring, rotateY: rotateYSpring }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 160, damping: 22, mass: 0.35 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
