import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { awardAssets, awards } from '@/data/awards';

export const metadata: Metadata = {
  title: 'Prêmios | Beg Gin',
  description: 'Conheça os reconhecimentos e selos de premiação da Beg Gin.',
};

const notes = [
  'Reconhecimento em competições nacionais e internacionais de destilados.',
  'Produção artesanal em pequenos lotes, com atenção ao perfil sensorial.',
  'Gin brasileiro feito para ser lembrado, com identidade própria e acabamento premium.',
];

const awardDetails = [
  'Premiação que reconhece destilados, marcas e experiências com olhar para qualidade, apresentação e presença no mercado de bebidas.',
  'Competição internacional de destilados realizada em São Francisco, referência global para avaliação técnica e reconhecimento de bebidas premium.',
  'Selo de ouro que reforça o posicionamento da Beg Gin entre rótulos de destaque no universo do gin artesanal e contemporâneo.',
  'Reconhecimento que amplia a trajetória de conquistas da marca e confirma consistência sensorial, acabamento e identidade própria.',
] as const;

export default function AwardsLandingPage() {
  return (
    <main className="min-h-screen bg-[#FEFAF3] text-beggin-ink">
      <Header />
      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-16 pt-[130px] md:px-8 lg:pb-20 lg:pt-[160px]">
        <div className="pointer-events-none absolute right-[-110px] bottom-[30px] h-[470px] w-[330px] opacity-38">
          <Image src={awardAssets.flowerRight} alt="" fill sizes="330px" className="object-contain" priority />
        </div>
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div className="relative z-[2]">
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Prêmios</p>
              <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
              <h1 className="mt-8 font-serifDisplay text-[clamp(3.5rem,6.7vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">Reconhecido. Premiado.</h1>
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
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-24 md:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1320px] space-y-10 lg:space-y-12">
          {awards.map((award, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={award.id} className="grid overflow-hidden border border-[#c7b889]/60 bg-[#FFFCF6] shadow-[0_24px_70px_rgba(54,43,25,0.055)] lg:grid-cols-[0.42fr_0.58fr]">
                <div className={`${reversed ? 'lg:order-2' : ''} relative flex min-h-[300px] items-center justify-center bg-[#f6efe1] p-10 md:min-h-[380px]`}>
                  <div className="absolute inset-6 border border-[#c7b889]/45" />
                  <div className="relative h-[220px] w-[220px] md:h-[270px] md:w-[270px]">
                    <Image src={award.image} alt={award.title} fill sizes="270px" className="object-contain drop-shadow-[0_16px_26px_rgba(54,43,25,0.12)]" />
                  </div>
                </div>
                <div className={`${reversed ? 'lg:order-1' : ''} flex flex-col justify-center p-8 md:p-12 lg:p-16`}>
                  <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-red">Reconhecimento {String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-5 font-serifDisplay text-[clamp(2.2rem,3.9vw,4.4rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">{award.title}</h2>
                  <div className="mt-6 h-px w-20 bg-beggin-gold/70" />
                  <p className="mt-7 text-[1.03rem] leading-[1.85] text-beggin-ink/72">{awardDetails[index]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
