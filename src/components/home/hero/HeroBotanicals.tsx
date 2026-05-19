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
          ? 'pointer-events-none absolute left-[39.5%] top-[43.5%] z-[3] h-[430px] w-[365px] origin-bottom -rotate-[11deg] max-lg:left-[36%] max-lg:w-[300px] max-md:left-[4%] max-md:top-[48%] max-md:h-[295px] max-md:w-[235px] max-md:opacity-45'
          : 'pointer-events-none absolute right-[12.5%] top-[40.5%] z-[3] h-[470px] w-[420px] origin-bottom rotate-[9deg] max-lg:right-[4%] max-lg:w-[320px] max-md:right-[-18%] max-md:top-[48%] max-md:h-[315px] max-md:w-[275px] max-md:opacity-50'
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
