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
        rotate: isLeft ? -10 : 8,
      }}
      animate={{
        opacity: 0.9,
        y: isLeft ? [0, 9, 0] : [0, 11, 0],
        x: isLeft ? [0, -3, 0] : [0, 3, 0],
        rotate: isLeft ? [-10, -12, -10] : [8, 10, 8],
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
          ? 'pointer-events-none absolute left-[37.5%] top-[42.5%] z-[3] h-[500px] w-[425px] origin-bottom max-lg:left-[34%] max-lg:h-[410px] max-lg:w-[350px] max-md:left-[1%] max-md:top-[48%] max-md:h-[315px] max-md:w-[265px] max-md:opacity-45'
          : 'pointer-events-none absolute right-[15%] top-[40.5%] z-[3] h-[500px] w-[445px] origin-bottom max-lg:right-[8%] max-lg:h-[410px] max-lg:w-[365px] max-md:right-[-18%] max-md:top-[48%] max-md:h-[325px] max-md:w-[285px] max-md:opacity-50'
      }
    >
      <Image
        src={isLeft ? heroAssets.herbLeft : heroAssets.herbRight}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 285px, 500px"
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
