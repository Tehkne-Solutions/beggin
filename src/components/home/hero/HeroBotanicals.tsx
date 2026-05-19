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
        opacity: 0.9,
        y: isLeft ? [0, 10, 0] : [0, 12, 0],
        x: isLeft ? [0, -3, 0] : [0, 3, 0],
        rotate: isLeft ? [-11, -13, -11] : [9, 11, 9],
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
          ? 'pointer-events-none absolute left-[24%] top-[40%] z-[3] h-[390px] w-[330px] max-lg:left-[21%] max-lg:w-[280px] max-md:left-[-6%] max-md:top-[47%] max-md:h-[290px] max-md:w-[230px] max-md:opacity-45'
          : 'pointer-events-none absolute right-[24%] top-[40%] z-[3] h-[455px] w-[405px] max-lg:right-[21%] max-lg:w-[330px] max-md:right-[-6%] max-md:top-[47%] max-md:h-[320px] max-md:w-[280px] max-md:opacity-50'
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
