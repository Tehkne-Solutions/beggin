'use client';

import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 48,
    damping: 26,
    mass: 0.9,
  });

  const springY = useSpring(mouseY, {
    stiffness: 48,
    damping: 26,
    mass: 0.9,
  });

  const bottleX = useTransform<number, number>(springX, [-1, 1], [-4, 4]);
  const bottleY = useTransform<number, number>(springY, [-1, 1], [-2, 3]);
  const bottleRotate = useTransform<number, number>(springX, [-1, 1], [-0.22, 0.22]);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();

      mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
      mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [mouseX, mouseY],
  );

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="absolute left-[61%] top-[54.5%] z-[4] h-[clamp(600px,72vh,760px)] w-[clamp(540px,38vw,660px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[61%] max-lg:w-[580px] max-md:left-1/2 max-md:top-[58%] max-md:h-[530px] max-md:w-[390px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-[-2%] bottom-[-1%] z-[4] h-[88%]"
      >
        <motion.div
          animate={{ y: [0, -1.5, 0], rotate: [-0.08, 0.08, -0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-full w-full"
        >
          <div className="relative h-full w-full origin-bottom -translate-y-[2%] scale-[1.02]">
            <Image
              src={heroAssets.pedestalArch}
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 430px, 720px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>
      </motion.div>

      <div
        className="absolute bottom-[5%] left-[52%] z-[5] h-[34px] w-[40%] -translate-x-1/2 rounded-full bg-black/18 blur-xl"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.965 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.05, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[10%] left-[52%] z-[6] h-[76%] w-[42%] -translate-x-1/2 max-lg:w-[43%] max-md:left-1/2 max-md:w-[52%]"
      >
        <motion.div
          style={{ x: bottleX, y: bottleY, rotate: bottleRotate }}
          animate={{ y: [0, -2, 0], rotate: [-0.12, 0.12, -0.12] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-full w-full drop-shadow-[0_30px_38px_rgba(38,28,14,0.15)] motion-safe-transform"
        >
          <Image
            src={heroAssets.bottle}
            alt="Garrafa Beggin Gin"
            fill
            priority
            sizes="(max-width: 768px) 220px, 330px"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
