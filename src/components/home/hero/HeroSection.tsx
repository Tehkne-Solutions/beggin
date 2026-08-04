import { HeroBottleStage } from './HeroBottleStage';
import { HeroClouds } from './HeroClouds';
import { HeroSun } from './HeroSun';
import { HeroTextBlock } from './HeroTextBlock';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-motion relative min-h-[820px] overflow-hidden bg-white pt-[76px] max-lg:min-h-[760px] max-md:min-h-[820px]"
    >
      <div className="absolute inset-0 z-0 bg-white" aria-hidden="true" />

      <HeroClouds />

      <div className="relative z-[2] mx-auto h-[calc(100svh-0px)] min-h-[744px] max-h-[940px] max-w-[1500px] max-md:h-[820px] max-md:min-h-[820px]">
        <HeroTextBlock />
        <HeroSun />
        <HeroBottleStage />
      </div>
    </section>
  );
}
