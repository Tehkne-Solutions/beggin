'use client';

import { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

type MagneticLinkProps = Omit<
  ComponentPropsWithoutRef<typeof motion.a>,
  'ref' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDragEnter' | 'onDragLeave' | 'onDragOver' | 'onDrop'
> & {
  children: ReactNode;
  className?: string;
};

export function MagneticLink({ children, className = '', ...props }: MagneticLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (shouldReduceMotion) {
      x.set(0);
      y.set(0);
      return;
    }

    const element = ref.current;
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

      x.set(offsetX * 6);
      y.set(offsetY * 4);
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
  }, [shouldReduceMotion, x, y]);

  return (
    <motion.a
      ref={ref}
      style={{ x, y }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 160, damping: 20, mass: 0.35 }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
