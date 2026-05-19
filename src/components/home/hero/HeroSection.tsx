import { HeroArch } from './HeroArch';
import { HeroBottleStage } from './HeroBottleStage';
import { HeroBotanicals } from './HeroBotanicals';
import { HeroClouds } from './HeroClouds';
import { HeroSeal } from './HeroSeal';
import { HeroSun } from './HeroSun';
import { HeroTextBlock } from './HeroTextBlock';

export function HeroSection() {
  return (
    <section id="inicio" className="paper-texture relative min-h-[820px] overflow-hidden pt-[76px] max-lg:min-h-[760px] max-md:min-h-[780px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_38%,rgba(255,255,255,.72),transparent_34%),linear-gradient(180deg,rgba(251,247,238,.96),rgba(246,237,219,.94))]" />
      <HeroClouds />
      <div className="relative mx-auto h-[calc(100svh-0px)] min-h-[744px] max-h-[980px] max-w-[1500px] max-md:h-[780px] max-md:min-h-[780px]">
        <HeroTextBlock />
        <HeroSun />
        <HeroArch />
        <HeroBotanicals />
        <HeroBottleStage />
        <HeroSeal />
      </div>
    </section>
  );
}
