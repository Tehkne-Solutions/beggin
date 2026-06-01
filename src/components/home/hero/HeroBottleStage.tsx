'use client';

import Image from 'next/image';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerRotate = useMotionValue(0);

  const x = useSpring(pointerX, { stiffness: 70, damping: 26, mass: 0.4 });
  const y = useSpring(pointerY, { stiffness: 70, damping: 26, mass: 0.4 });
  const rotate = useSpring(pointerRotate, { stiffness: 70, damping: 28, mass: 0.4 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;

    const reset = () => {
      pointerX.set(0);
      pointerY.set(0);
      pointerRotate.set(0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;

      const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

      pointerX.set(normalizedX * 2.5);
      pointerY.set(normalizedY * 1.8);
      pointerRotate.set(normalizedX * 0.1);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('mouseleave', reset);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('mouseleave', reset);
    };
  }, [pointerRotate, pointerX, pointerY, shouldReduceMotion, isMobile]);

  return (
    <div
      className="pointer-events-none absolute left-[65%] top-[51.5%] z-[5] h-[clamp(624px,86vh,912px)] w-[clamp(624px,50vw,912px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[64%] max-lg:w-[744px] max-md:left-1/2 max-md:top-[78%] max-md:h-[408px] max-md:w-[360px]"
      aria-hidden="true"
    >
      <motion.div style={{ x, y, rotate }} className="h-full w-full">
        <motion.div
          initial={{ opacity: 0.92, y: 22, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <motion.div
            {...(!isMobile
              ? {
                  whileHover: { scale: 1.008, y: -2 },
                  transition: { type: 'spring', stiffness: 170, damping: 24, mass: 0.45 },
                }
              : {})}
            className="pointer-events-auto h-full w-full"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -2, 0], rotate: [-0.08, 0.08, -0.08] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-full w-full drop-shadow-[0_34px_48px_rgba(38,28,14,0.16)] transition-[filter] duration-300 hover:drop-shadow-[0_40px_62px_rgba(38,28,14,0.18)]"
            >
              <Image
                src={isMobile ? heroAssets.mainProductMobile : heroAssets.mainProduct}
                alt="BEG Destilaria"
                fill
                priority
                sizes="(max-width: 768px) 360px, (max-width: 1280px) 620px, 912px"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
