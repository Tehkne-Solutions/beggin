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
  {
    label: 'Competições',
    title: 'Reconhecimento em competições',
    text: 'Trajetória construída em avaliações nacionais e internacionais dedicadas ao universo dos destilados.',
  },
  {
    label: 'Artesanal',
    title: 'Produção em pequenos lotes',
    text: 'Processo cuidadoso, atenção ao perfil sensorial e acabamento premium em cada rótulo Beg Gin.',
  },
  {
    label: 'Identidade',
    title: 'Gin brasileiro com presença',
    text: 'Um destilado feito para ser lembrado, com personalidade própria, origem brasileira e assinatura visual marcante.',
  },
] as const;

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

      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="pointer-events-none absolute right-[-120px] bottom-[8px] hidden h-[520px] w-[360px] opacity-38 lg:block">
          <Image src={awardAssets.flowerRight} alt="" fill sizes="360px" className="object-contain" priority />
        </div>

        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-[2] max-w-[880px]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Prêmios</p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 font-serifDisplay text-[clamp(3.5rem,7.2vw,8.4rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
              Reconhecido.
              <br />
              Premiado.
            </h1>
            <div className="relative mt-7 h-[24px] w-[48px]">
              <Image src={awardAssets.waves} alt="" fill sizes="48px" className="object-contain" />
            </div>
            <p className="mt-8 max-w-[650px] text-[1.05rem] leading-[1.85] text-beggin-ink/72">
              A Beg Gin carrega uma trajetória de reconhecimento, qualidade sensorial e atenção artesanal aos detalhes que fazem cada rótulo ter presença própria.
            </p>
            <Link href="/produtos" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Conheça a linha Beg
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1320px] border border-[#c7b889]/65 bg-[#FFFCF6] px-6 py-8 shadow-[0_22px_70px_rgba(54,43,25,0.055)] md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="mb-8 grid gap-6 border-b border-[#d7c89e]/55 pb-7 lg:grid-cols-[0.33fr_0.67fr] lg:items-end">
            <div>
              <p className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.3em] text-beggin-red">Reconhecimento</p>
              <h2 className="mt-4 font-serifDisplay text-[clamp(2rem,3.3vw,3.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">
                Três pilares de uma trajetória premiada.
              </h2>
            </div>
            <p className="max-w-[720px] text-[1rem] leading-[1.85] text-beggin-ink/68 lg:justify-self-end">
              Qualidade sensorial, produção cuidadosa e identidade brasileira sustentam a presença da Beg Gin em premiações e experiências de destilados.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {notes.map((note, index) => (
              <article key={note.label} className="group relative min-h-[230px] overflow-hidden border border-[#d7c89e]/60 bg-[#FEFAF3]/84 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/70 md:p-7">
                <div className="absolute inset-x-6 top-0 h-px bg-beggin-gold/45" />
                <span className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.22em] text-beggin-gold">{String(index + 1).padStart(2, '0')}</span>
                <p className="mt-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.28em] text-beggin-red/80">{note.label}</p>
                <h3 className="mt-3 font-serifDisplay text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[0.02em] text-beggin-ink">{note.title}</h3>
                <p className="mt-5 text-[0.98rem] leading-[1.75] text-beggin-ink/70">{note.text}</p>
              </article>
            ))}
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
