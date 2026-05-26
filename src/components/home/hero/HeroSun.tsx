'use client';

import Image from 'next/image';
import { motion, useMotionValue, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroSun() {
  const ref = useRef<HTMLDivElement>(null);
  const avoidX = useMotionValue(0);
  const avoidY = useMotionValue(0);

  const mouseX = useSpring(avoidX, { stiffness: 90, damping: 24, mass: 0.35 });
  const mouseY = useSpring(avoidY, { stiffness: 90, damping: 24, mass: 0.35 });

  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scrollX = useTransform<number, number>(scrollYProgress, [0, 1], [0, -18]);
  const scrollY = useTransform<number, number>(scrollYProgress, [0, 1], [0, 48]);
  const opacity = useTransform<number, number>(scrollYProgress, [0, 0.65, 1], [0.72, 0.86, 0.28]);

  useEffect(() => {
    const reset = () => {
      avoidX.set(0);
      avoidY.set(0);
    };

    if (shouldReduceMotion) {
      reset();
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== 'mouse') {
        return;
      }

      const element = ref.current;
      if (!element) {
        reset();
        return;
      }

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const radius = 240;

      if (distance >= radius) {
        reset();
        return;
      }

      const strength = 1 - distance / radius;
      const directionX = distance === 0 ? 0 : deltaX / distance;
      const directionY = distance === 0 ? 0 : deltaY / distance;

      avoidX.set(directionX * -22 * strength);
      avoidY.set(directionY * -16 * strength);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('blur', reset);
    document.documentElement.addEventListener('mouseleave', reset);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('blur', reset);
      document.documentElement.removeEventListener('mouseleave', reset);
    };
  }, [avoidX, avoidY, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      style={{ x: scrollX, y: scrollY, opacity }}
      className="pointer-events-none absolute right-[10.5%] top-[15%] z-[6] hidden h-[142px] w-[142px] lg:block"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={shouldReduceMotion ? undefined : { rotateZ: [-1.4, 1.2, -1.4], rotateY: [0, 8, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative h-full w-full drop-shadow-[0_14px_22px_rgba(38,28,14,0.16)] [transform-style:preserve-3d]"
      >
        <Image
          src={heroAssets.copaSeal}
          alt=""
          fill
          sizes="142px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
