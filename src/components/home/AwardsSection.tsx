'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { awardsContent, awardAssets } from '@/data/awards';
import { Reveal } from '@/components/motion/Reveal';

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
      className="paper-texture relative overflow-hidden bg-[#fefaf3] px-0 py-10 lg:py-12"
    >
      <div className="relative mx-auto grid w-[calc(100%-48px)] max-w-[1540px] items-center gap-8 border-y border-[#c8b98e]/30 py-8 lg:w-[calc(100%-64px)] lg:grid-cols-[0.27fr_0.73fr] lg:py-9">
        <div className="pointer-events-none absolute bottom-[-42px] right-[-128px] z-[1] hidden h-[340px] w-[260px] opacity-35 lg:block">
          <Image
            src={awardAssets.flowerRight}
            alt=""
            fill
            className="object-contain object-right-bottom"
            sizes="260px"
          />
        </div>

        <Reveal className="relative z-[3] space-y-6">
          <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.24em] text-beggin-ink xl:text-[13px]">
            {awardsContent.eyebrow}
            <span className="ml-3 text-beggin-gold">✧</span>
          </p>

          <h2 className="mt-5 max-w-[380px] font-serifDisplay text-[clamp(2.05rem,2.75vw,3.45rem)] font-semibold uppercase leading-[0.92] text-beggin-ink">
            {awardsContent.title.split('\n').map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="relative mt-6 h-[22px] w-[48px]">
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
          className="relative z-[3] mx-auto flex w-full max-w-[860px] items-center justify-center"
          animate={controls}
          initial="hidden"
          variants={stripVariants}
        >
          <div className="relative h-[130px] w-full max-w-[760px] sm:h-[150px] lg:h-[170px]">
            <Image
              src={awardAssets.medalsStrip}
              alt="Medalhas e reconhecimentos BEG Destilaria"
              fill
              sizes="(max-width: 768px) 92vw, 760px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
