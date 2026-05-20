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
            }
      }
      className="group relative flex h-[430px] w-full flex-col overflow-hidden border border-[#b99f60]/45 bg-[#f8f0df] shadow-[0_14px_30px_rgba(66,50,28,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#a9843e]/70 hover:bg-[#fbf3e4] hover:shadow-[0_22px_46px_rgba(66,50,28,0.11)] max-md:h-[390px]"
    >
      <div className="pointer-events-none absolute inset-3 border border-[#b99f60]/30" />

      <div className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-[#b9a875]/30" />
      <div className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-[#b9a875]/30" />
      <div className="pointer-events-none absolute left-4 bottom-4 h-3 w-3 border-l border-b border-[#b9a875]/30" />
      <div className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-[#b9a875]/30" />

      <div className="relative z-[2] mt-6 px-6 text-center">
        <h3 className="font-serifDisplay text-[1rem] font-semibold uppercase tracking-[0.12em] text-beggin-ink md:text-[1.08rem]">
          {title}
        </h3>
        <div className="mx-auto mt-3 h-px w-12 bg-beggin-gold/50" />
      </div>

      <div className="relative z-[2] mx-auto mt-7 h-[190px] w-full max-w-[205px] overflow-visible md:h-[205px] md:max-w-[220px]">
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 58vw, 220px"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] mt-auto px-6 pb-8 text-center">
        <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.14em] text-beggin-ink/75">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
