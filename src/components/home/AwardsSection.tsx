'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { awardsContent, awardAssets } from '@/data/awards';
import { Reveal } from '@/components/motion/Reveal';

const featuredMedals = [
  {
    src: '/images/premios/selo-premio-1.png',
    alt: 'Selo World Gin Awards Brazil Classic Winner',
  },
  {
    src: '/images/premios/selo-premio-2.png',
    alt: 'Selo World Gin Awards Gold',
  },
  {
    src: '/images/premios/selo-premio-3.png',
    alt: 'Selo World Gin Awards Brazil Colour Changing Winner',
  },
  {
    src: '/images/premios/1-main_std-iwsc2024-gold-98-medal-lores-png.png',
    alt: 'Medalha IWSC Gold 98 pontos 2024',
  },
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian IWSC 2024',
  },
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20Tonic%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian Tonic IWSC 2024',
  },
] as const;

function AwardsTitle({ title }: { title: string }) {
  if (title.includes('Medalha de Ouro')) {
    return (
      <>
        Medalha de Ouro
        <br />
        no Brasil
        <br />
        e no Mundo.
      </>
    );
  }

  return <>{title}</>;
}

export function AwardsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const stripVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="premios"
      className="paper-texture relative overflow-hidden bg-[#fefaf3] px-0 py-16 lg:py-18"
    >
      <div className="relative mx-auto grid w-[calc(100%-44px)] max-w-[1540px] items-center gap-10 border-y border-[#c8b98e]/30 py-12 lg:w-[calc(100%-64px)] lg:grid-cols-[0.28fr_0.72fr] lg:py-14 xl:gap-12">
        <div className="pointer-events-none absolute bottom-[-72px] right-[-120px] z-[1] hidden h-[350px] w-[260px] opacity-18 lg:block 2xl:opacity-26">
          <Image
            src={awardAssets.flowerRight}
            alt=""
            fill
            className="object-contain object-right-bottom"
            sizes="260px"
          />
        </div>

        <Reveal className="relative z-[3] space-y-6 max-lg:text-center">
          <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.24em] text-beggin-ink xl:text-[13px]">
            {awardsContent.eyebrow}
            <span className="ml-3 text-beggin-gold">✧</span>
          </p>

          <h2 className="mt-5 max-w-[430px] font-serifDisplay text-[clamp(2.45rem,3.45vw,4.55rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-beggin-ink max-lg:mx-auto">
            <AwardsTitle title={awardsContent.title} />
          </h2>

          <div className="relative mt-6 h-[22px] w-[48px] max-lg:mx-auto">
            <Image
              src={awardAssets.waves}
              alt=""
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>

          <a
            href="/premios"
            className="group relative z-[6] mt-6 inline-flex w-fit items-center gap-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink xl:text-[13px]"
          >
            <span className="border-b border-beggin-gold/80 pb-2 pr-8 transition-colors duration-300 group-hover:border-beggin-red">
              {awardsContent.cta}
            </span>
            <span className="text-[11px] text-beggin-gold transition-transform duration-300 group-hover:translate-x-1 xl:text-[12px]">
              ✧
            </span>
          </a>
        </Reveal>

        <motion.div
          className="relative z-[3] w-full pb-2"
          animate={controls}
          initial="hidden"
          variants={stripVariants}
        >
          <div className="mx-auto grid max-w-[720px] grid-cols-2 items-center justify-items-center gap-5 sm:grid-cols-3 lg:max-w-[760px] lg:grid-cols-3 xl:max-w-[820px] xl:gap-6 2xl:flex 2xl:max-w-none 2xl:items-center 2xl:justify-center 2xl:gap-6">
            {featuredMedals.map((medal) => (
              <div key={medal.src} className="relative h-[128px] w-[128px] sm:h-[148px] sm:w-[148px] lg:h-[154px] lg:w-[154px] xl:h-[168px] xl:w-[168px] 2xl:h-[188px] 2xl:w-[188px]">
                <Image
                  src={medal.src}
                  alt={medal.alt}
                  fill
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 148px, (max-width: 1536px) 168px, 188px"
                  className="object-contain drop-shadow-[0_14px_22px_rgba(54,43,25,0.13)]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
