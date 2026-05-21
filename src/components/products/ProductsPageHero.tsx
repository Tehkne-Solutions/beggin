import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function ProductsPageHero() {
  return (
    <section className="paper-texture relative min-h-[560px] overflow-hidden bg-[#FCF7F1] px-5 pt-[86px] md:px-8 lg:min-h-[650px] lg:pt-[76px] xl:min-h-[700px]">
      <div className="absolute inset-0 bg-[#FCF7F1]" />

      <div className="pointer-events-none absolute inset-5 z-[2] hidden border border-[#b99a5d]/45 lg:block" />
      <div className="pointer-events-none absolute left-8 top-[100px] z-[2] hidden h-16 w-16 border-l border-t border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute right-8 top-[100px] z-[2] hidden h-16 w-16 border-r border-t border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute bottom-8 left-8 z-[2] hidden h-16 w-16 border-b border-l border-[#b99a5d]/55 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 z-[2] hidden h-16 w-16 border-b border-r border-[#b99a5d]/55 lg:block" />

      <div className="pointer-events-none absolute bottom-[-8px] right-[2vw] top-[90px] z-[1] hidden w-[64vw] max-w-[980px] min-w-[760px] overflow-visible lg:block xl:right-[4vw] xl:w-[60vw]">
        <Image
          src="/images/produtos/design-hero-page-produtos-bg.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 64vw, 980px"
          className="object-contain object-right-bottom drop-shadow-[0_28px_46px_rgba(48,35,18,0.12)]"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-12px] top-[74px] z-[1] overflow-hidden lg:hidden">
        <Image
          src="/images/produtos/design-hero-page-produtos-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-[75%_bottom] opacity-44"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,#FCF7F1_0%,rgba(252,247,241,0.98)_28%,rgba(252,247,241,0.68)_43%,rgba(252,247,241,0.2)_58%,rgba(252,247,241,0)_75%)] max-md:bg-[linear-gradient(180deg,rgba(252,247,241,0.96)_0%,rgba(252,247,241,0.76)_46%,rgba(252,247,241,0.2)_100%)]" />

      <div className="relative z-[5] mx-auto flex min-h-[474px] max-w-[1500px] items-center lg:min-h-[574px] xl:min-h-[624px]">
        <div className="max-w-[610px] pt-3 text-left max-lg:max-w-[500px] max-md:mx-auto max-md:max-w-[420px] max-md:pt-10 max-md:text-center">
          <p className="mb-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.32em] text-beggin-ink md:text-[11px]">
            Beg Experience
          </p>
          <div className="mb-7 h-px w-20 bg-beggin-gold/70 max-md:mx-auto" />
          <h1 className="font-serifDisplay text-[clamp(2.25rem,3.85vw,4.45rem)] font-semibold uppercase leading-[0.96] tracking-[-0.045em] text-beggin-ink md:text-[clamp(2.55rem,4vw,4.75rem)]">
            Conheça toda
            <br />
            a nossa linha
            <br />
            de produtos
            <br />
            Beg Gin.
          </h1>

          <div className="relative mt-7 h-[30px] w-[62px] wave-pulse max-md:mx-auto">
            <Image src={heroAssets.waves} alt="" fill priority sizes="62px" className="object-contain" />
          </div>

          <p className="mt-5 max-w-[390px] font-serifDisplay text-[1.12rem] font-semibold leading-[1.22] text-beggin-ink/86 md:text-[1.3rem] max-md:mx-auto">
            Feito para ser lembrado.
            <br />
            Escolha o seu favorito.
          </p>
        </div>
      </div>
    </section>
  );
}
