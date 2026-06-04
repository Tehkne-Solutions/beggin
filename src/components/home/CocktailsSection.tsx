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

function CocktailTitle() {
  return (
    <>
      Conteúdos para
      <br />
      beber melhor.
    </>
  );
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
        className="relative z-[2] mx-auto max-w-[1500px]"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: easeOut }}
      >
        <div className="grid gap-10 border-b border-[#c8b98e]/45 pb-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div className="max-w-[520px] max-lg:text-center">
            <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.32em] text-beggin-red">Blog BEG</p>
            <div className="mt-4 h-px w-12 bg-beggin-gold/60 max-lg:mx-auto" />
            <h2 className="mt-8 font-serifDisplay text-[clamp(3rem,4.7vw,5.9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.052em] text-beggin-ink">
              <CocktailTitle />
            </h2>
            <div className="relative mt-7 h-[22px] w-[44px] max-lg:mx-auto">
              <Image src={cocktailAssets.waves} alt="" fill className="object-contain" sizes="44px" />
            </div>
          </div>

          <div className="max-w-[780px] lg:justify-self-end max-lg:text-center">
            <p className="text-[1.14rem] leading-[1.85] text-beggin-ink/74">
              A área de drinks foi reorganizada como chamada editorial para o Blog, com conteúdos alternados por momento de consumo e espaço preparado para receitas, releases e matérias.
            </p>
            <Reveal delay={0.1} className="mt-8">
              <MagneticLink
                href={cocktailsContent.href}
                className="group inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink xl:text-[13px]"
              >
                <span>{cocktailsContent.cta}</span>
                <ArrowRight size={16} />
              </MagneticLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 space-y-8 lg:space-y-10">
          {cocktails.map((cocktail, index) => {
            const reversed = index % 2 === 1;
            return (
              <Link
                key={cocktail.id}
                href={cocktailsContent.href}
                className="group grid overflow-hidden border border-[#c8b98e]/60 bg-[#FFFCF6] shadow-[0_20px_54px_rgba(54,43,25,0.055)] transition duration-300 hover:border-beggin-red/60 hover:shadow-[0_28px_70px_rgba(54,43,25,0.09)] lg:grid-cols-2"
              >
                <div className={`${reversed ? 'lg:order-2' : ''} relative min-h-[300px] overflow-hidden bg-[#e7dfc9] md:min-h-[390px] lg:min-h-[430px]`}>
                  <Image
                    src={cocktail.image}
                    alt={cocktail.title}
                    fill
                    sizes="(max-width: 1024px) 92vw, 720px"
                    className="object-cover transition duration-700 group-hover:scale-[1.045]"
                  />
                </div>

                <div className={`${reversed ? 'lg:order-1' : ''} flex flex-col justify-center p-8 md:p-12 lg:p-14 xl:p-16`}>
                  <span className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.3em] text-beggin-red">
                    {String(index + 1).padStart(2, '0')} — Editorial
                  </span>
                  <h3 className="mt-6 max-w-[620px] font-serifDisplay text-[clamp(2.3rem,4vw,4.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-beggin-ink">
                    {cocktail.title}
                  </h3>
                  <p className="mt-7 max-w-[560px] font-serifDisplay text-[1.15rem] font-bold uppercase leading-[1.28] tracking-[0.1em] text-beggin-ink/72">
                    {cocktail.description}
                  </p>
                  <span className="mt-9 inline-flex w-fit items-center gap-3 border-b border-beggin-gold pb-2 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition group-hover:border-beggin-red group-hover:text-beggin-red">
                    Abrir no Blog
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
