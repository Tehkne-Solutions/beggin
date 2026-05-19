'use client';

import { motion } from 'framer-motion';

function BotanicalSide({ side }: { side: 'left' | 'right' }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 26, rotate: isLeft ? -3 : 3 }}
      animate={{ opacity: 0.84, y: [0, -10, 0], x: isLeft ? [-8, 12, -8] : [10, -12, 10], rotate: isLeft ? [-1.5, 1.2, -1.5] : [1.5, -1.2, 1.5] }}
      transition={{ opacity: { duration: 0.9, delay: 0.65 }, x: { duration: isLeft ? 7 : 8.5, repeat: Infinity, ease: 'easeInOut' }, y: { duration: isLeft ? 6 : 7, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: isLeft ? 6 : 7.4, repeat: Infinity, ease: 'easeInOut' } }}
      className={
        isLeft
          ? 'pointer-events-none absolute left-[31%] top-[36%] z-[4] h-[360px] w-[310px] max-lg:left-[34%] max-lg:w-[250px] max-md:left-[2%] max-md:top-[42%] max-md:opacity-45'
          : 'pointer-events-none absolute right-[6%] top-[33%] z-[7] h-[410px] w-[365px] max-lg:right-[0%] max-lg:w-[290px] max-md:right-[-18%] max-md:top-[43%] max-md:opacity-45'
      }
    >
      <svg viewBox="0 0 320 430" className="h-full w-full overflow-visible" fill="none">
        <path d={isLeft ? 'M210 398C186 316 164 235 135 63' : 'M84 402C116 306 146 210 184 44'} stroke="rgba(56,62,48,0.58)" strokeWidth="2" strokeLinecap="round" />
        {Array.from({ length: 14 }).map((_, index) => {
          const y = 76 + index * 22;
          const spread = 26 + (index % 4) * 8;
          const flip = index % 2 === 0 ? 1 : -1;
          const baseX = isLeft ? 150 + index * 3 : 170 - index * 3;
          const controlX = baseX + flip * spread * (isLeft ? -1 : 1);
          const endX = baseX + flip * (spread + 28) * (isLeft ? -1 : 1);
          return (
            <g key={index} opacity={0.72 - index * 0.018}>
              <path d={`M${baseX} ${y} C${controlX} ${y - 18}, ${endX} ${y - 14}, ${endX + flip * 4} ${y + 9}`} stroke="rgba(56,62,48,0.48)" strokeWidth="1.45" strokeLinecap="round" />
              <ellipse cx={endX + flip * 8} cy={y + 5} rx="18" ry="8" transform={`rotate(${flip * 28} ${endX + flip * 8} ${y + 5})`} stroke="rgba(56,62,48,0.44)" />
            </g>
          );
        })}
        {Array.from({ length: 8 }).map((_, index) => (
          <circle key={`berry-${index}`} cx={(isLeft ? 98 : 215) + (index % 3) * 16} cy={180 + index * 23} r={8 + (index % 2) * 3} stroke="rgba(56,62,48,0.5)" fill="rgba(248,241,227,0.55)" />
        ))}
      </svg>
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
