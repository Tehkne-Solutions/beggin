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
          ? 'pointer-events-none absolute left-[37%] top-[40%] z-[3] h-[400px] w-[340px] max-lg:left-[35%] max-lg:w-[290px] max-md:left-[4%] max-md:top-[48%] max-md:h-[295px] max-md:w-[235px] max-md:opacity-45'
          : 'pointer-events-none absolute right-[9%] top-[39%] z-[3] h-[450px] w-[395px] max-lg:right-[4%] max-lg:w-[320px] max-md:right-[-18%] max-md:top-[48%] max-md:h-[315px] max-md:w-[275px] max-md:opacity-50'
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
