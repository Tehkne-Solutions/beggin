'use client';

import Image from 'next/image';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';
import { heroAssets } from '@/data/hero-assets';

export function HeroBottleStage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  const springX = useSpring(mouseX, { stiffness: 44, damping: 26, mass: 0.92 });
  const springY = useSpring(mouseY, { stiffness: 44, damping: 26, mass: 0.92 });

  const bottleX = useTransform<number, number>(springX, [-1, 1], [-4, 4]);
  const bottleYMouse = useTransform<number, number>(springY, [-1, 1], [-2, 3]);
  const bottleRotateMouse = useTransform<number, number>(springX, [-1, 1], [-0.25, 0.25]);
  const scrollLift = useTransform<number, number>(scrollYProgress, [0, 0.25, 0.55], [0, -9, -3]);
  const scrollTurn = useTransform<number, number>(scrollYProgress, [0, 0.4, 0.8], [-1.4, 1.2, -0.7]);
  const stageY = useTransform<number, number>(scrollYProgress, [0, 0.5, 1], [0, -6, 3]);
  const stageRotate = useTransform<number, number>(scrollYProgress, [0, 0.5, 1], [-0.45, 0.4, -0.35]);

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
      className="absolute left-[57%] top-[54%] z-[4] h-[clamp(610px,74vh,790px)] w-[clamp(500px,40vw,680px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[58%] max-lg:w-[580px] max-md:left-1/2 max-md:top-[58%] max-md:h-[530px] max-md:w-[380px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 26, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: stageY, rotate: stageRotate }}
        className="absolute inset-x-[-12%] bottom-[-2%] z-[4] h-[86%]"
      >
        <div className="relative h-full w-full">
          <Image src={heroAssets.pedestalArch} alt="" fill priority sizes="(max-width: 768px) 430px, 760px" className="object-contain object-bottom" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.965 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.05, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: scrollLift, rotate: scrollTurn }}
        className="absolute bottom-[8%] left-[54%] z-[6] h-[82%] w-[46%] -translate-x-1/2 max-lg:w-[48%] max-md:left-1/2 max-md:w-[55%]"
      >
        <div className="absolute bottom-[2%] left-1/2 z-[5] h-[38px] w-[42%] -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
        <motion.div
          style={{ x: bottleX, y: bottleYMouse, rotate: bottleRotateMouse }}
          className="relative z-[6] h-full w-full drop-shadow-[0_30px_38px_rgba(38,28,14,0.18)] motion-safe-transform"
        >
          <Image src={heroAssets.bottle} alt="Garrafa Beggin Gin" fill priority sizes="(max-width: 768px) 220px, 340px" className="object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
}
