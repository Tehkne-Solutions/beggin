'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { heroAssets } from '@/data/hero-assets';

function BotanicalSide({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 26, rotate: isLeft ? -3 : 3 }}
      animate={{ opacity: 0.9, y: [0, -10, 0], x: isLeft ? [-8, 12, -8] : [10, -12, 10], rotate: isLeft ? [-1.5, 1.2, -1.5] : [1.5, -1.2, 1.5] }}
      transition={{ opacity: { duration: 0.9, delay: 0.65 }, x: { duration: isLeft ? 7 : 8.5, repeat: Infinity, ease: 'easeInOut' }, y: { duration: isLeft ? 6 : 7, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: isLeft ? 6 : 7.4, repeat: Infinity, ease: 'easeInOut' } }}
      className={
        isLeft
          ? 'pointer-events-none absolute left-[29%] top-[37%] z-[4] h-[360px] w-[310px] max-lg:left-[31%] max-lg:w-[250px] max-md:left-[-6%] max-md:top-[44%] max-md:opacity-45'
          : 'pointer-events-none absolute right-[5%] top-[34%] z-[7] h-[410px] w-[365px] max-lg:right-[-2%] max-lg:w-[290px] max-md:right-[-24%] max-md:top-[44%] max-md:opacity-45'
      }
    >
      <Image
        src={isLeft ? heroAssets.herbLeft : heroAssets.herbRight}
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 220px, 380px"
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
