import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { awardAssets, awards } from '@/data/awards';

export const metadata: Metadata = {
  title: 'Prêmios Beg | Beg Gin',
  description: 'Conheça os reconhecimentos e selos de premiação da Beg Gin.',
};

const notes = [
  'Reconhecimento em competições nacionais e internacionais de destilados.',
  'Produção artesanal em pequenos lotes, com atenção ao perfil sensorial.',
  'Gin brasileiro feito para ser lembrado, com identidade própria e acabamento premium.',
];

export default function AwardsLandingPage() {
  return (
    <main className="min-h-screen bg-[#FEFAF3] text-beggin-ink">
      <Header />
      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="pointer-events-none absolute right-[-90px] bottom-[80px] h-[440px] w-[300px] opacity-45">
          <Image src={awardAssets.flowerRight} alt="" fill sizes="300px" className="object-contain" />
        </div>
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
            <div className="relative z-[2]">
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Prêmios Beg</p>
              <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
              <h1 className="mt-8 font-serifDisplay text-[clamp(3.4rem,6vw,7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Reconhecido. Premiado.</h1>
              <div className="relative mt-7 h-[24px] w-[48px]">
                <Image src={awardAssets.waves} alt="" fill sizes="48px" className="object-contain" />
              </div>
              <p className="mt-8 max-w-[650px] text-[1.05rem] leading-[1.85] text-beggin-ink/72">A Beg Gin carrega uma trajetória de reconhecimento, qualidade sensorial e atenção artesanal aos detalhes que fazem cada rótulo ter presença própria.</p>
              <Link href="/produtos" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Conheça a linha Beg</Link>
            </div>
            <div className="relative z-[2] grid gap-4 md:grid-cols-3">
              {notes.map((note) => (
                <div key={note} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-5 text-[0.95rem] leading-relaxed text-beggin-ink/72 shadow-[0_14px_40px_rgba(54,43,25,0.04)]">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-[2] mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award) => (
              <article key={award.id} className="group border border-[#c7b889]/60 bg-[#FFFCF6] p-7 text-center shadow-[0_18px_50px_rgba(54,43,25,0.05)] transition duration-300 hover:-translate-y-1 hover:border-beggin-gold">
                <div className="relative mx-auto h-[190px] w-[190px] transition duration-300 group-hover:scale-105">
                  <Image src={award.image} alt={award.title} fill sizes="190px" className="object-contain" />
                </div>
                <h2 className="mt-6 font-serifDisplay text-[1.1rem] font-bold uppercase leading-tight tracking-[0.04em] text-beggin-ink">{award.title}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
