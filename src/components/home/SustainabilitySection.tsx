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
      <div className="relative mx-auto max-w-[1560px]">
        <div className="relative z-[2] space-y-12 xl:space-y-14">
          <Reveal className="relative mx-auto max-w-[980px] text-center" delay={0.05}>
            <p className="font-serifDisplay text-[12px] font-bold uppercase tracking-[0.28em] text-beggin-ink">
              {sustainabilityContent.eyebrow}
            </p>

            <div className="mx-auto mt-4 h-px w-12 bg-beggin-gold/60" />

            <h2 className="mx-auto mt-8 max-w-[940px] font-serifDisplay text-[clamp(3.1rem,4.6vw,6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-beggin-ink">
              <span className="block">Orgulhosamente</span>
              <span className="block">Artesanal.</span>
            </h2>

            <div className="relative mx-auto mt-7 h-[22px] w-[44px]">
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
              className="group mt-9 inline-flex items-center gap-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink"
            >
              <span className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-beggin-gold after:transition-transform after:duration-300 group-hover:after:scale-x-125">
                {sustainabilityContent.cta}
              </span>
              <span className="text-beggin-gold transition-transform duration-300 group-hover:translate-x-1">
                ✦
              </span>
            </MagneticLink>
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6" delay={0.14}>
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
