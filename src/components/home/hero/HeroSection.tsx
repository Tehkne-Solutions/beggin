import { HeroBottleStage } from './HeroBottleStage';
import { HeroBotanicals } from './HeroBotanicals';
import { HeroClouds } from './HeroClouds';
import { HeroSeal } from './HeroSeal';
import { HeroSun } from './HeroSun';
import { HeroTextBlock } from './HeroTextBlock';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="paper-texture relative min-h-[820px] overflow-hidden pt-[76px] max-lg:min-h-[760px] max-md:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_39%,rgba(255,255,255,.86),transparent_31%),radial-gradient(circle_at_78%_30%,rgba(185,154,93,.13),transparent_24%),linear-gradient(180deg,rgba(251,247,238,.98),rgba(246,237,219,.95))]" />

      <HeroClouds />

      <div className="relative mx-auto h-[calc(100svh-0px)] min-h-[744px] max-h-[940px] max-w-[1500px] max-md:h-[820px] max-md:min-h-[820px]">
        <HeroTextBlock />
        <HeroSun />
        <HeroBotanicals />
        <HeroBottleStage />
        <HeroSeal />
      </div>
    </section>
  );
}
