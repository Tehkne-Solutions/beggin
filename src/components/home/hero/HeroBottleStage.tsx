'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 22, mass: 0.7 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 22, mass: 0.7 });
  const bottleX = useTransform(springX, [-1, 1], [-8, 8]);
  const bottleY = useTransform(springY, [-1, 1], [-4, 5]);
  const rotate = useTransform(springX, [-1, 1], [-0.7, 0.7]);

  const onMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }, [mouseX, mouseY]);

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="absolute left-[58%] top-[53%] z-[6] h-[clamp(560px,70vh,740px)] w-[clamp(350px,31vw,520px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[63%] max-md:left-1/2 max-md:top-[57%] max-md:h-[500px] max-md:w-[330px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-[-18%] bottom-[-1%] z-[5] h-[80%]"
      >
        <motion.div
          animate={{ x: [-3, 3, -3], rotate: [-0.25, 0.25, -0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-full w-full"
        >
          <Image
            src={heroAssets.pedestalArch}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 520px, 700px"
            className="object-contain object-bottom"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[7%] left-1/2 z-[6] h-[88%] w-[58%] -translate-x-1/2 max-md:w-[64%]"
      >
        <motion.div
          style={{ x: bottleX, y: bottleY, rotate }}
          className="relative h-full w-full animate-bottleDrift drop-shadow-[0_28px_36px_rgba(38,28,14,0.16)] motion-safe-transform"
        >
          <Image
            src={heroAssets.bottle}
            alt="Garrafa Beggin Gin"
            fill
            priority
            sizes="(max-width: 768px) 210px, 320px"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
