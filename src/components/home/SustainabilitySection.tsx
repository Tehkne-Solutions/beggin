'use client';

import Image from 'next/image';
import { MagneticLink } from '@/components/motion/MagneticLink';
import { Reveal } from '@/components/motion/Reveal';
import {
  sustainabilityAssets,
  sustainabilityContent,
  sustainabilityItems,
} from '@/data/sustainability';
import { SustainabilityItem } from './sustainability/SustainabilityItem';

export function SustainabilitySection() {
  return (
    <section
      id="sustentabilidade"
      className="paper-texture relative overflow-hidden bg-[#dfdec9] px-5 py-20 md:px-8 lg:py-24 xl:py-28"
    >
      <div className="relative mx-auto max-w-[1500px]">
        <div className="pointer-events-none absolute left-[-46px] top-[28px] z-[1] hidden h-[350px] w-[220px] opacity-56 lg:block">
          <Image
            src={sustainabilityAssets.leftOrnament}
            alt=""
            fill
            sizes="220px"
            className="object-contain object-left-center"
          />
        </div>

        <div className="relative z-[2] grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-center xl:gap-16 2xl:grid-cols-[0.38fr_0.62fr]">
          <Reveal className="relative max-w-[520px] max-lg:mx-auto max-lg:text-center lg:pl-20 xl:pl-24" delay={0.05}>
            <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.28em] text-beggin-ink">
              {sustainabilityContent.eyebrow}
            </p>

            <div className="mt-4 h-px w-12 bg-beggin-gold/60 max-lg:mx-auto" />

            <h2 className="mt-8 font-serifDisplay text-[clamp(2.65rem,3.7vw,5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em] text-beggin-ink">
              <span className="block">Orgulhosamente</span>
              <span className="block">Artesanal.</span>
            </h2>

            <div className="relative mt-7 h-[22px] w-[44px] max-lg:mx-auto">
              <Image
                src={sustainabilityAssets.waves}
                alt=""
                fill
                sizes="44px"
                className="object-contain"
              />
            </div>

            <MagneticLink
              href="/sustentabilidade"
              className="group mt-12 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
            >
              <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
                {sustainabilityContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
                ✦
              </span>
            </MagneticLink>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 2xl:gap-0" delay={0.14}>
            {sustainabilityItems.map((item, index) => (
              <SustainabilityItem
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                hasDivider={false}
                compact={index >= 0}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
