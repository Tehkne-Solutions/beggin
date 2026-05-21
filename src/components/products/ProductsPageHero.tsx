import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function ProductsPageHero() {
  return (
    <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-16 pt-[118px] md:px-8 lg:pb-20 lg:pt-[136px]">
      <div className="pointer-events-none absolute left-[-90px] top-[140px] hidden h-[300px] w-[320px] opacity-55 lg:block">
        <Image
          src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png"
          alt=""
          fill
          priority
          sizes="320px"
          className="object-contain object-left-top"
        />
      </div>

      <div className="pointer-events-none absolute right-[-80px] top-[115px] hidden h-[310px] w-[320px] scale-x-[-1] opacity-45 lg:block">
        <Image
          src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png"
          alt=""
          fill
          priority
          sizes="320px"
          className="object-contain object-right-top"
        />
      </div>

      <div className="pointer-events-none absolute left-[8%] bottom-0 hidden h-[95px] w-[360px] opacity-35 lg:block">
        <Image src={heroAssets.cloudsTop} alt="" fill sizes="360px" className="object-contain" />
      </div>

      <div className="pointer-events-none absolute right-[9%] bottom-2 hidden h-[95px] w-[360px] opacity-35 lg:block">
        <Image src={heroAssets.cloudsTop} alt="" fill sizes="360px" className="object-contain" />
      </div>

      <div className="relative z-[2] mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <h1 className="font-serifDisplay text-[clamp(3.1rem,6vw,6.9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-beggin-ink">
          Conheça toda a nossa
          <br />
          linha de produtos Beg Gin.
        </h1>

        <div className="relative mt-7 h-[24px] w-[48px] wave-pulse">
          <Image src={heroAssets.waves} alt="" fill priority sizes="48px" className="object-contain" />
        </div>

        <p className="mt-6 max-w-[560px] font-serifDisplay text-[1.35rem] font-semibold leading-[1.2] text-beggin-ink/80 md:text-[1.55rem]">
          Feito para ser lembrado. Escolha o seu favorito.
        </p>
      </div>
    </section>
  );
}
