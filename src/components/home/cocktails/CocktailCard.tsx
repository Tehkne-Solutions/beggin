'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const easeOut = [0.25, 0.1, 0.25, 1] as const;

type CocktailCardProps = {
  title: string;
  description: string;
  image: string;
  index: number;
};

export function CocktailCard({ title, description, image, index }: CocktailCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: index * 0.14,
            ease: easeOut,
          },
        },
      }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.02,
            }
      }
      className="group relative flex h-[430px] w-full flex-col overflow-hidden rounded-[14px] border border-[#c8b98e]/25 bg-[#fbf6ea] shadow-[0_14px_30px_rgba(47,42,28,0.08)] transition duration-300 hover:border-[#b99f60] hover:shadow-[0_24px_50px_rgba(47,42,28,0.12)] max-md:h-[390px]"
    >
      <div className="pointer-events-none absolute inset-0 border border-[#b9a875]/15" />

      <div className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-[#b9a875]/30" />
      <div className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-[#b9a875]/30" />
      <div className="pointer-events-none absolute left-4 bottom-4 h-3 w-3 border-l border-b border-[#b9a875]/30" />
      <div className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-[#b9a875]/30" />

      <div className="relative z-[2] mt-6 px-6 text-center">
        <h3 className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.1em] text-beggin-ink md:text-xl">
          {title}
        </h3>
        <div className="mx-auto mt-3 h-px w-12 bg-beggin-gold/50" />
      </div>

      <div className="relative z-[2] mx-auto mt-6 h-[240px] w-full max-w-[260px] overflow-hidden md:max-w-[280px]">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 70vw, 260px"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] mt-6 px-6 pb-6 text-center">
        <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.14em] text-beggin-ink/80">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
