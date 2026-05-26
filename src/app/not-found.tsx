import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { heroAssets } from '@/data/hero-assets';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-20 pt-[130px] md:px-8 lg:pb-28 lg:pt-[170px]">
        <div className="pointer-events-none absolute left-[-120px] top-[120px] h-[360px] w-[460px] opacity-20">
          <Image src={heroAssets.cloudsTop} alt="" fill sizes="460px" className="object-contain" />
        </div>
        <div className="pointer-events-none absolute right-[-130px] bottom-[40px] h-[280px] w-[420px] opacity-25">
          <Image src={heroAssets.cloudsTop} alt="" fill sizes="420px" className="object-contain" />
        </div>

        <div className="relative mx-auto max-w-[980px] border border-[#c7b889]/60 bg-[#FDF9F1]/86 px-6 py-14 text-center shadow-[0_24px_70px_rgba(54,43,25,0.08)] md:px-10 lg:py-20">
          <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-red">
            Página não encontrada
          </p>
          <div className="relative mx-auto mt-7 h-[28px] w-[58px] wave-pulse">
            <Image src={heroAssets.waves} alt="" fill sizes="58px" className="object-contain" />
          </div>
          <h1 className="mt-8 font-serifDisplay text-[clamp(3.4rem,8vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
            404
          </h1>
          <p className="mx-auto mt-7 max-w-[620px] text-[1.05rem] leading-[1.8] text-beggin-ink/72">
            A página que você tentou acessar não existe ou mudou de endereço. Continue navegando pela BEG Destilaria pelos links abaixo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Voltar para a Home
            </Link>
            <Link href="/produtos" className="inline-flex border border-beggin-gold/70 px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:border-beggin-red hover:text-beggin-red">
              Ver produtos
            </Link>
            <Link href="/contato" className="inline-flex border border-beggin-gold/70 px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:border-beggin-red hover:text-beggin-red">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
