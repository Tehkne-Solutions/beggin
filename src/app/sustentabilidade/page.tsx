import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { sustainabilityAssets, sustainabilityItems } from '@/data/sustainability';

export const metadata: Metadata = {
  title: 'Sustentabilidade | Beg Gin',
  description: 'Conheça os pilares de sustentabilidade, produção artesanal e origem responsável da Beg Gin.',
};

const paragraphs = [
  'Crafted com propósito traduz a forma como a Beg Gin conecta produção artesanal, ingredientes naturais e atenção aos detalhes em pequenos lotes.',
  'A marca valoriza botânicos selecionados, processos cuidadosos, embalagens com menor impacto e orgulho por suas origens brasileiras.',
  'Cada escolha reforça uma visão de produto premium: menos excesso, mais consciência, procedência e respeito pela experiência de quem aprecia o gin brasileiro.',
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#DFDEC9] text-beggin-ink">
      <Header />
      <section className="paper-texture relative overflow-hidden bg-[#DFDEC9] px-5 pb-20 pt-[130px] md:px-8 lg:pb-24 lg:pt-[160px]">
        <div className="pointer-events-none absolute left-[-90px] top-[130px] h-[520px] w-[300px] opacity-55">
          <Image src={sustainabilityAssets.leftOrnament} alt="" fill sizes="300px" className="object-contain" />
        </div>
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div className="relative z-[2]">
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Sustentabilidade</p>
              <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
              <h1 className="mt-8 font-serifDisplay text-[clamp(3.2rem,5.8vw,6.9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.05em]">Crafted com propósito</h1>
              <div className="relative mt-7 h-[24px] w-[48px]">
                <Image src={sustainabilityAssets.waves} alt="" fill sizes="48px" className="object-contain" />
              </div>
              <div className="mt-8 space-y-5 text-[1.02rem] leading-[1.85] text-beggin-ink/72">
                {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link href="/produtos" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Conheça nossas opções</Link>
            </div>

            <div className="relative z-[2] grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {sustainabilityItems.map((item) => (
                <article key={item.title} className="border border-[#b8ad86]/70 bg-[#F7F2E7]/82 p-6 text-center shadow-[0_18px_50px_rgba(54,43,25,0.06)] transition duration-300 hover:-translate-y-1 hover:border-beggin-gold">
                  <div className="relative mx-auto h-[150px] w-[150px]">
                    <Image src={item.image} alt={item.title} fill sizes="150px" className="object-contain" />
                  </div>
                  <h2 className="mt-6 font-serifDisplay text-[1.35rem] font-bold uppercase leading-[1.05] tracking-[0.04em]">{item.title}</h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-beggin-ink/68">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
