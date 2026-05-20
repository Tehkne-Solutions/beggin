'use client';

import { useCallback } from 'react';
import { useMotionValue } from 'framer-motion';

export function usePointerParallax(maxTranslate = 6, maxRotate = 3) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }, [x, y, rotateX, rotateY]);

  const handlePointerMove = useCallback(
    (event: PointerEvent, element: HTMLElement | null) => {
      if (!element || (event.pointerType && event.pointerType !== 'mouse')) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

      x.set(offsetX * maxTranslate);
      y.set(-offsetY * maxTranslate);
      rotateX.set(-offsetY * maxRotate);
      rotateY.set(offsetX * maxRotate);
    },
    [maxRotate, maxTranslate, rotateX, rotateY, x, y],
  );

  return { x, y, rotateX, rotateY, handlePointerMove, reset };
}
