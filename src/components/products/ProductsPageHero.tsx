import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function ProductsPageHero() {
  return (
    <section className="paper-texture relative min-h-[650px] overflow-hidden bg-[#FCF7F1] px-5 pt-[96px] md:px-8 lg:min-h-[760px] lg:pt-[76px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_42%,rgba(255,255,255,.78),transparent_30%),linear-gradient(180deg,rgba(252,247,241,.98),rgba(246,237,219,.92))]" />

      <div className="pointer-events-none absolute inset-x-0 top-[76px] z-[1] hidden h-[95px] opacity-35 lg:block">
        <div className="animate-cloudTrack relative h-full w-[200%] [animation-duration:118s]">
          <div className="absolute left-[18%] top-0 h-full w-[520px]">
            <Image src={heroAssets.cloudsTop} alt="" fill sizes="520px" className="object-contain object-top" />
          </div>
          <div className="absolute left-[58%] top-2 h-full w-[460px]">
            <Image src={heroAssets.cloudsTop} alt="" fill sizes="460px" className="object-contain object-top" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-8px] z-[2] hidden h-[125px] opacity-60 lg:block">
        <div className="animate-cloudTrack relative h-full w-[200%] [animation-direction:reverse] [animation-duration:150s]">
          <div className="absolute left-[3%] bottom-0 h-full w-[430px]">
            <Image src={heroAssets.cloudsTop} alt="" fill sizes="430px" className="object-contain object-bottom" />
          </div>
          <div className="absolute left-[48%] bottom-0 h-full w-[430px]">
            <Image src={heroAssets.cloudsTop} alt="" fill sizes="430px" className="object-contain object-bottom" />
          </div>
          <div className="absolute left-[76%] bottom-0 h-full w-[430px]">
            <Image src={heroAssets.cloudsTop} alt="" fill sizes="430px" className="object-contain object-bottom" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-145px] top-[88px] z-[2] hidden h-[485px] w-[450px] opacity-62 lg:block xl:left-[-105px] xl:h-[555px] xl:w-[500px]">
        <Image
          src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png"
          alt=""
          fill
          priority
          sizes="500px"
          className="object-contain object-left-top"
        />
      </div>

      <div className="pointer-events-none absolute right-[-145px] top-[82px] z-[2] hidden h-[485px] w-[450px] scale-x-[-1] opacity-56 lg:block xl:right-[-105px] xl:h-[555px] xl:w-[500px]">
        <Image
          src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png"
          alt=""
          fill
          priority
          sizes="500px"
          className="object-contain object-right-top"
        />
      </div>

      <div className="pointer-events-none absolute right-[-6%] top-[15%] z-[3] hidden h-[74%] w-[62%] lg:block xl:right-[-1%] xl:w-[58%]">
        <Image
          src={heroAssets.mainProduct}
          alt=""
          fill
          priority
          sizes="(max-width: 1200px) 62vw, 860px"
          className="object-contain object-right-bottom drop-shadow-[0_24px_42px_rgba(38,28,14,0.16)]"
        />
      </div>

      <div className="pointer-events-none absolute right-[8.2%] top-[14.5%] z-[4] hidden w-[92px] lg:block xl:right-[7.5%] xl:w-[108px]">
        <Image
          src="/images/home/beggin-home-premios-selo-3.png"
          alt=""
          width={140}
          height={140}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(60,42,12,0.22)]"
        />
      </div>
      <div className="pointer-events-none absolute right-[8.6%] top-[30%] z-[4] hidden w-[86px] lg:block xl:right-[7.9%] xl:w-[100px]">
        <Image
          src="/images/home/beggin-home-premios-selo-1.png"
          alt=""
          width={130}
          height={130}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(60,42,12,0.2)]"
        />
      </div>
      <div className="pointer-events-none absolute right-[7.9%] top-[45.5%] z-[4] hidden w-[94px] lg:block xl:right-[7.2%] xl:w-[112px]">
        <Image
          src="/images/home/beggin-home-premios-selo-2.png"
          alt=""
          width={145}
          height={145}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_10px_18px_rgba(60,42,12,0.2)]"
        />
      </div>

      <div className="pointer-events-none absolute inset-5 z-[4] hidden border border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute left-8 top-[100px] z-[4] hidden h-20 w-20 border-l border-t border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute right-8 top-[100px] z-[4] hidden h-20 w-20 border-r border-t border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute bottom-8 left-8 z-[4] hidden h-20 w-20 border-b border-l border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 z-[4] hidden h-20 w-20 border-b border-r border-[#b99a5d]/55 lg:block" />

      <div className="relative z-[5] mx-auto flex min-h-[540px] max-w-[1500px] items-center lg:min-h-[684px]">
        <div className="max-w-[760px] pt-8 text-left max-lg:max-w-[560px] max-md:mx-auto max-md:pt-16 max-md:text-center">
          <p className="mb-7 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.32em] text-beggin-ink">
            Beg Experience
          </p>
          <div className="mb-10 h-px w-24 bg-beggin-gold/70 max-md:mx-auto" />
          <h1 className="font-serifDisplay text-[clamp(3.75rem,6.2vw,7.6rem)] font-semibold uppercase leading-[0.94] tracking-[-0.048em] text-beggin-ink">
            Conheça toda
            <br />
            a nossa linha
            <br />
            de produtos
            <br />
            Beg Gin.
          </h1>

          <div className="relative mt-8 h-[34px] w-[70px] wave-pulse max-md:mx-auto">
            <Image src={heroAssets.waves} alt="" fill priority sizes="70px" className="object-contain" />
          </div>

          <p className="mt-7 max-w-[430px] font-serifDisplay text-[1.35rem] font-semibold leading-[1.2] text-beggin-ink/86 md:text-[1.65rem] max-md:mx-auto">
            Feito para ser lembrado.
            <br />
            Escolha o seu favorito.
          </p>
        </div>
      </div>
    </section>
  );
}
