'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerRotate = useMotionValue(0);

  const x = useSpring(pointerX, { stiffness: 70, damping: 26, mass: 0.4 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 26, mass: 0.4 });
  const rotate = useSpring(pointerRotate, { stiffness: 70, damping: 28, mass: 0.4 });

  useEffect(() => {
    const reset = () => {
      pointerX.set(0);
      pointerY.set(0);
      pointerRotate.set(0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

      pointerX.set(normalizedX * 4);
      pointerY.set(normalizedY * 3);
      pointerRotate.set(normalizedX * 0.2);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('mouseleave', reset);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('mouseleave', reset);
    };
  }, [pointerRotate, pointerX, pointerY]);

  return (
    <div
      className="pointer-events-none absolute left-[63%] top-[55%] z-[5] h-[clamp(520px,72vh,760px)] w-[clamp(520px,42vw,760px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[62%] max-lg:w-[620px] max-md:left-1/2 max-md:top-[81%] max-md:h-[340px] max-md:w-[300px]"
      aria-hidden="true"
    >
      <motion.div style={{ x, y, rotate }} className="h-full w-full">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <motion.div
            animate={{ y: [0, -3, 0], rotate: [-0.12, 0.12, -0.12] }}
            transition={{ duration: 11.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full drop-shadow-[0_34px_48px_rgba(38,28,14,0.16)]"
          >
            <Image
              src={heroAssets.mainProduct}
              alt="Beggin Gin"
              fill
              priority
              sizes="(max-width: 768px) 360px, 760px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
