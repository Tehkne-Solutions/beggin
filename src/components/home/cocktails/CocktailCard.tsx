'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { TiltCard } from '@/components/motion/TiltCard';

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
    <TiltCard className="group relative flex h-[455px] w-full flex-col max-md:h-[420px]">
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 26,
            rotate: index % 2 === 0 ? -1 : 0.8,
          },
          visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
              duration: 0.72,
              delay: index * 0.12,
              ease: easeOut,
            },
          },
        }}
        className="relative flex h-full w-full flex-col overflow-hidden border border-[#b99f60]/45 bg-[#fffcf6] shadow-[0_16px_34px_rgba(66,50,28,0.075)] transition duration-300 hover:border-[#a9843e]/70 hover:bg-[#fbf3e4] hover:shadow-[0_24px_50px_rgba(66,50,28,0.12)]"
      >
        <div className="pointer-events-none absolute inset-3 border border-[#b99f60]/30" />

        <div className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-[#b9a875]/30" />
        <div className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-[#b9a875]/30" />
        <div className="pointer-events-none absolute left-4 bottom-4 h-3 w-3 border-l border-b border-[#b9a875]/30" />
        <div className="pointer-events-none absolute right-4 bottom-4 h-3 w-3 border-r border-b border-[#b9a875]/30" />

        <div className="relative z-[2] mt-7 px-6 text-center">
          <h3 className="font-serifDisplay text-[1.08rem] font-semibold uppercase leading-[1.08] tracking-[0.1em] text-beggin-ink md:text-[1.16rem]">
            {title}
          </h3>
          <div className="mx-auto mt-3 h-px w-14 bg-beggin-gold/50" />
        </div>

        <div className="relative z-[2] mx-auto mt-7 h-[205px] w-full max-w-[230px] overflow-visible md:h-[222px] md:max-w-[245px]">
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.012 }}
            transition={{ duration: 0.45, ease: easeOut }}
            className="relative h-full w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 62vw, 245px"
            />
          </motion.div>
        </div>

        <div className="relative z-[2] mt-auto px-7 pb-9 text-center">
          <p className="font-serifDisplay text-[12px] font-bold uppercase leading-[1.22] tracking-[0.13em] text-beggin-ink/78 md:text-[13px]">
            {description}
          </p>
        </div>
      </motion.article>
    </TiltCard>
  );
}
