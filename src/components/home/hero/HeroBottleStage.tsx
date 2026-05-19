'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback } from 'react';

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
      className="absolute left-[58%] top-[53%] z-[6] h-[clamp(560px,70vh,740px)] w-[clamp(330px,28vw,460px)] -translate-x-1/2 -translate-y-1/2 max-lg:left-[63%] max-md:left-1/2 max-md:top-[56%] max-md:h-[500px] max-md:w-[300px]"
    >
      <motion.div
        className="absolute bottom-[3%] left-1/2 z-[5] h-[118px] w-[132%] -translate-x-1/2 rounded-[50%] border border-beggin-gold/20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.9),rgba(218,199,159,.46)_45%,rgba(178,146,89,.18)_70%,transparent_72%)] shadow-soft"
        animate={{ x: [-3, 3, -3], rotate: [-0.35, 0.35, -0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.95, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[10%] left-1/2 z-[6] h-[78%] w-[74%] -translate-x-1/2"
      >
        <motion.div
          style={{ x: bottleX, y: bottleY, rotate }}
          className="relative h-full w-full animate-bottleDrift motion-safe-transform"
        >
          <div className="absolute left-1/2 top-0 h-[98%] w-[78%] -translate-x-1/2 rounded-[22px_22px_34px_34px] border border-black/10 bg-gradient-to-br from-white/65 via-white/30 to-white/10 shadow-[inset_18px_0_28px_rgba(255,255,255,.72),inset_-16px_0_22px_rgba(128,128,128,.08),0_28px_54px_rgba(30,20,8,.18)] backdrop-blur-[1px]" />
          <div className="absolute left-1/2 top-[-7%] h-[16%] w-[32%] -translate-x-1/2 rounded-b-[18px] rounded-t-[10px] border border-black/10 bg-white/55 shadow-[inset_8px_0_16px_rgba(255,255,255,.8)]" />
          <div className="absolute left-1/2 top-[-13%] h-[9%] w-[42%] -translate-x-1/2 rounded-[12px] border border-black/10 bg-[linear-gradient(135deg,#5a3b22,#b48554,#57381f)] shadow-md" />
          <div className="absolute left-1/2 top-[30%] h-[38%] w-[70%] -translate-x-1/2 border-2 border-beggin-ink bg-beggin-paperSoft/92 p-4 text-beggin-ink shadow-sm">
            <div className="mb-2 font-sansUi text-[9px] font-black uppercase tracking-[0.16em] text-beggin-red">Don&apos;t ask. Beg for Gin</div>
            <div className="grid h-[68%] grid-cols-3 place-items-center border border-beggin-ink/70">
              <span className="font-sansUi text-5xl font-black">B</span>
              <span className="font-sansUi text-5xl font-black">E</span>
              <span className="font-sansUi text-5xl font-black">G</span>
            </div>
            <div className="mt-3 text-center font-serifDisplay text-xl font-bold tracking-[0.38em] text-beggin-red">GIN</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
