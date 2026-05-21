import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function ProductsPageHero() {
  return (
    <section className="paper-texture relative min-h-[560px] overflow-hidden bg-[#FCF7F1] px-5 pt-[86px] md:px-8 lg:min-h-[650px] lg:pt-[76px] xl:min-h-[720px]">
      <div className="absolute inset-0 bg-[#FCF7F1]" />

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <Image
          src="/images/produtos/design-hero-page-produtos-sem-texto.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center max-md:object-[68%_center]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(252,247,241,0.92)_0%,rgba(252,247,241,0.72)_28%,rgba(252,247,241,0.16)_48%,rgba(252,247,241,0)_70%)] max-md:bg-[linear-gradient(180deg,rgba(252,247,241,0.92)_0%,rgba(252,247,241,0.62)_42%,rgba(252,247,241,0.08)_100%)]" />

      <div className="relative z-[5] mx-auto flex min-h-[450px] max-w-[1500px] items-center lg:min-h-[574px] xl:min-h-[644px]">
        <div className="max-w-[560px] pt-4 text-left max-lg:max-w-[500px] max-md:mx-auto max-md:max-w-[420px] max-md:pt-10 max-md:text-center">
          <p className="mb-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.32em] text-beggin-ink md:text-[11px]">
            Beg Experience
          </p>
          <div className="mb-7 h-px w-20 bg-beggin-gold/70 max-md:mx-auto" />
          <h1 className="font-serifDisplay text-[clamp(2.1rem,3.35vw,3.8rem)] font-semibold uppercase leading-[0.96] tracking-[-0.04em] text-beggin-ink md:text-[clamp(2.35rem,3.55vw,4.05rem)]">
            Conheça toda
            <br />
            a nossa linha
            <br />
            de produtos
            <br />
            Beg Gin.
          </h1>

          <div className="relative mt-7 h-[28px] w-[58px] wave-pulse max-md:mx-auto">
            <Image src={heroAssets.waves} alt="" fill priority sizes="58px" className="object-contain" />
          </div>

          <p className="mt-5 max-w-[380px] font-serifDisplay text-[1.08rem] font-semibold leading-[1.2] text-beggin-ink/86 md:text-[1.22rem] max-md:mx-auto">
            Feito para ser lembrado.
            <br />
            Escolha o seu favorito.
          </p>
        </div>
      </div>
    </section>
  );
}
