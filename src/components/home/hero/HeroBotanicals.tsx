'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function BotanicalSide({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 0.9,
        y: isLeft ? [0, 10, 0] : [0, 12, 0],
        x: isLeft ? [0, -4, 0] : [0, 4, 0],
        rotate: isLeft ? [-16, -18, -16] : [14, 16, 14],
      }}
      transition={{
        opacity: { duration: 0.9, delay: 0.45 },
        duration: isLeft ? 7.8 : 8.6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={isLeft
        ? 'pointer-events-none absolute left-[43%] top-[45%] z-[3] h-[390px] w-[330px] origin-bottom -rotate-[16deg] max-lg:left-[41%] max-lg:w-[280px] max-md:left-[6%] max-md:top-[49%] max-md:h-[270px] max-md:w-[220px] max-md:opacity-45'
        : 'pointer-events-none absolute right-[13%] top-[39%] z-[3] h-[455px] w-[405px] origin-bottom rotate-[14deg] max-lg:right-[8%] max-lg:w-[330px] max-md:right-[-16%] max-md:top-[47%] max-md:h-[310px] max-md:w-[270px] max-md:opacity-50'}
    >
      <Image src={isLeft ? heroAssets.herbLeft : heroAssets.herbRight} alt="" fill priority sizes="(max-width: 768px) 260px, 430px" className="object-contain" />
    </motion.div>
  );
}

export function HeroBotanicals() {
  return (
    <>
      <BotanicalSide side="left" />
      <BotanicalSide side="right" />
    </>
  );
}
