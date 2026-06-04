'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation, useInView, useReducedMotion } from 'framer-motion';
import { cocktails, cocktailsContent, cocktailAssets } from '@/data/cocktails';
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
        Blog de Drinks
        <br />
        BEG.
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
        className="relative z-[2] mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start xl:gap-16"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: easeOut }}
      >
        <div className="max-w-[480px] max-lg:mx-auto max-lg:text-center lg:sticky lg:top-28 lg:pl-2">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Drinks editoriais</p>
          <div className="mt-4 h-px w-10 bg-beggin-gold/60 max-lg:mx-auto" />

          <h2 className="mt-8 font-serifDisplay text-[clamp(3rem,4.45vw,5.7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.052em] text-beggin-ink">
            <CocktailTitle title={cocktailsContent.title} />
          </h2>

          <p className="mt-7 max-w-[420px] text-[1.03rem] leading-[1.78] text-beggin-ink/72 max-lg:mx-auto">
            A seção foi reorganizada como chamada editorial para três momentos de consumo: dia a dia, ocasiões especiais e drinks para impressionar.
          </p>

          <div className="relative mt-7 h-[22px] w-[44px] max-lg:mx-auto">
            <Image
              src={cocktailAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="44px"
            />
          </div>

          <Reveal delay={0.1} className="mt-10 lg:mt-12">
            <MagneticLink
              href={cocktailsContent.href}
              className="group inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink xl:text-[13px]"
            >
              <span>{cocktailsContent.cta}</span>
              <ArrowRight size={16} />
            </MagneticLink>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {cocktails.map((cocktail, index) => (
            <Link
              key={cocktail.id}
              href={cocktailsContent.href}
              className="group grid overflow-hidden border border-[#c8b98e]/60 bg-[#FFFCF6] shadow-[0_20px_54px_rgba(54,43,25,0.055)] transition duration-300 hover:border-beggin-red/60 hover:shadow-[0_28px_70px_rgba(54,43,25,0.09)] md:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative min-h-[210px] overflow-hidden bg-[#e7dfc9] md:min-h-[238px]">
                <Image
                  src={cocktail.image}
                  alt={cocktail.title}
                  fill
                  sizes="(max-width: 768px) 92vw, 420px"
                  className="object-cover transition duration-700 group-hover:scale-[1.045]"
                />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-8">
                <span className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.28em] text-beggin-red">
                  {String(index + 1).padStart(2, '0')} — Categoria
                </span>
                <h3 className="mt-4 font-serifDisplay text-[clamp(1.9rem,2.8vw,3.2rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em] text-beggin-ink">
                  {cocktail.title}
                </h3>
                <p className="mt-5 font-serifDisplay text-[13px] font-bold uppercase leading-[1.25] tracking-[0.13em] text-beggin-ink/72">
                  {cocktail.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition group-hover:text-beggin-red">
                  Abrir blog de drinks
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
