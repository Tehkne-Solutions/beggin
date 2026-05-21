import Image from 'next/image';
import { heroAssets } from '@/data/hero-assets';

export function ProductsPageHero() {
  return (
    <section className="paper-texture relative min-h-[520px] overflow-hidden bg-[#FCF7F1] px-5 pt-[86px] md:px-8 lg:min-h-[600px] lg:pt-[76px] xl:min-h-[660px]">
      <div className="absolute inset-0 bg-[#FCF7F1]" />

      <div className="pointer-events-none absolute bottom-0 right-0 top-[76px] z-[1] hidden w-[66vw] min-w-[860px] overflow-hidden lg:block xl:w-[64vw]">
        <Image
          src="/images/produtos/design-hero-page-produtos-sem-texto.png"
          alt=""
          fill
          priority
          sizes="66vw"
          className="object-cover object-right-bottom"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[72px] z-[1] overflow-hidden lg:hidden">
        <Image
          src="/images/produtos/design-hero-page-produtos-sem-texto.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_bottom] opacity-55"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(90deg,#FCF7F1_0%,rgba(252,247,241,0.96)_30%,rgba(252,247,241,0.62)_46%,rgba(252,247,241,0.12)_64%,rgba(252,247,241,0)_82%)] max-md:bg-[linear-gradient(180deg,rgba(252,247,241,0.96)_0%,rgba(252,247,241,0.72)_48%,rgba(252,247,241,0.18)_100%)]" />

      <div className="relative z-[5] mx-auto flex min-h-[434px] max-w-[1500px] items-center lg:min-h-[524px] xl:min-h-[584px]">
        <div className="max-w-[520px] pt-3 text-left max-lg:max-w-[480px] max-md:mx-auto max-md:max-w-[420px] max-md:pt-10 max-md:text-center">
          <p className="mb-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.32em] text-beggin-ink md:text-[11px]">
            Beg Experience
          </p>
          <div className="mb-7 h-px w-20 bg-beggin-gold/70 max-md:mx-auto" />
          <h1 className="font-serifDisplay text-[clamp(2.05rem,3.05vw,3.45rem)] font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-beggin-ink md:text-[clamp(2.25rem,3.25vw,3.75rem)]">
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
