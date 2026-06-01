'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { cocktails, cocktailsContent, cocktailAssets } from '@/data/cocktails';
import { CocktailCard } from './cocktails/CocktailCard';
import { MagneticLink } from '@/components/motion/MagneticLink';
import { Reveal } from '@/components/motion/Reveal';

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function CocktailTitle({ title }: { title: string }) {
  if (title === 'Descubra o Drink perfeito para cada momento.') {
    return (
      <>
        Descubra o Drink
        <br />
        Perfeito para
        <br />
        Cada Momento.
      </>
    );
  }

  return <>{title}</>;
}

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
      className="paper-texture relative overflow-hidden bg-[#fdf9f1] px-5 py-20 md:px-8 lg:py-24 xl:py-28"
    >
      <motion.div
        className="relative z-[2] mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:items-start xl:gap-16"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: easeOut }}
      >
        <div className="max-w-[460px] max-lg:mx-auto max-lg:text-center lg:sticky lg:top-28">
          <div className="h-px w-10 bg-beggin-gold/60 max-lg:mx-auto" />

          <h2 className="mt-8 font-serifDisplay text-[clamp(2.75rem,4.25vw,5.25rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-beggin-ink">
            <CocktailTitle title={cocktailsContent.title} />
          </h2>

          <div className="relative mt-7 h-[22px] w-[44px] max-lg:mx-auto">
            <Image
              src={cocktailAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="44px"
            />
          </div>

          <Reveal delay={0.1} className="mt-12 lg:mt-16">
            <MagneticLink
              href="/blog"
              className="group inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink xl:text-[13px]"
            >
              <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
                {cocktailsContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
                ✦
              </span>
            </MagneticLink>
          </Reveal>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-8">
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
