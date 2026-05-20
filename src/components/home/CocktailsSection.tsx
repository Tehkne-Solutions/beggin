'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { cocktails, cocktailsContent, cocktailAssets } from '@/data/cocktails';
import { CocktailCard } from './cocktails/CocktailCard';

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function CocktailsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section
      ref={ref}
      id="coqueteis"
      className="paper-texture relative overflow-hidden bg-[#fdf9f1] px-5 py-24 md:px-8 lg:py-28"
    >
      <div className="pointer-events-none absolute right-[-56px] top-10 z-[1] hidden h-[420px] w-[260px] opacity-80 lg:block">
        <Image
          src={cocktailAssets.flowersRight}
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="320px"
        />
      </div>

      <motion.div
        className="relative z-[2] mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.27fr_0.73fr] lg:items-start"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: easeOut }}
      >
        <div className="max-w-[320px]">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.26em] text-beggin-ink">
            {cocktailsContent.label}
          </p>

          <div className="mt-3 h-px w-10 bg-beggin-gold/60" />

          <h2 className="mt-8 font-serifDisplay text-[clamp(2.8rem,4.2vw,4.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">
            {cocktailsContent.title}
          </h2>

          <div className="relative mt-7 h-[22px] w-[44px]">
            <Image
              src={cocktailAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="44px"
            />
          </div>

          <Link
            href="#coqueteis"
            className="group mt-16 inline-flex items-center gap-3 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.2em] text-beggin-ink"
          >
            <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
              {cocktailsContent.cta}
            </span>
            <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
              ✦
            </span>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {cocktails.map((cocktail, index) => (
            <CocktailCard
              key={cocktail.id}
              index={index}
              title={cocktail.title}
              description={cocktail.description}
              image={cocktail.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
