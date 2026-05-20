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

  const scrollX = useTransform<number, number>(scrollYProgress, [0, 1], [0, -16]);
  const scrollY = useTransform<number, number>(scrollYProgress, [0, 1], [0, 58]);
  const opacity = useTransform<number, number>(scrollYProgress, [0, 0.65, 1], [0.42, 0.58, 0.22]);

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
      const radius = 260;

      if (distance >= radius) {
        reset();
        return;
      }

      const strength = 1 - distance / radius;
      const directionX = distance === 0 ? 0 : deltaX / distance;
      const directionY = distance === 0 ? 0 : deltaY / distance;

      avoidX.set(directionX * -24 * strength);
      avoidY.set(directionY * -18 * strength);
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
      className="pointer-events-none absolute right-[11%] top-[16%] z-[2] hidden h-[170px] w-[170px] lg:block"
      aria-hidden="true"
    >
      <motion.div style={{ x: mouseX, y: mouseY }} className="relative h-full w-full">
        <Image
          src={heroAssets.sun}
          alt=""
          fill
          priority
          sizes="170px"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
