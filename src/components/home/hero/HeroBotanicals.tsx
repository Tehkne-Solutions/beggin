'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function BotanicalSide({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      aria-hidden="true"
      initial={{
        opacity: 0,
        y: 22,
        rotate: isLeft ? -2 : 2,
      }}
      animate={{
        opacity: 0.92,
        y: isLeft ? [0, -5, 0] : [0, -4, 0],
        x: isLeft ? [-3, 5, -3] : [4, -5, 4],
        rotate: isLeft ? [-0.8, 0.6, -0.8] : [0.7, -0.6, 0.7],
      }}
      transition={{
        opacity: { duration: 0.9, delay: 0.58 },
        x: {
          duration: isLeft ? 9.5 : 10.8,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        y: {
          duration: isLeft ? 8.8 : 10.2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        rotate: {
          duration: isLeft ? 9.5 : 11,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      className={
        isLeft
          ? 'pointer-events-none absolute left-[35%] top-[38%] z-[4] h-[390px] w-[330px] max-lg:left-[34%] max-lg:w-[280px] max-md:left-[2%] max-md:top-[46%] max-md:h-[290px] max-md:w-[230px] max-md:opacity-45'
          : 'pointer-events-none absolute right-[6%] top-[34%] z-[7] h-[455px] w-[405px] max-lg:right-[-1%] max-lg:w-[330px] max-md:right-[-22%] max-md:top-[46%] max-md:h-[320px] max-md:w-[280px] max-md:opacity-50'
      }
    >
      <Image
        src={isLeft ? heroAssets.herbLeft : heroAssets.herbRight}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 260px, 430px"
        className="object-contain"
      />
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
