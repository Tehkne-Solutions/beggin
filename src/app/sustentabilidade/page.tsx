import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { sustainabilityAssets, sustainabilityItems } from '@/data/sustainability';

export const metadata: Metadata = {
  title: 'Sustentabilidade | BEG Destilaria',
  description: 'Conheça os pilares de sustentabilidade, produção artesanal e origem responsável da BEG Destilaria.',
};

const introParagraphs = [
  'Orgulhosamente artesanal traduz a forma como a BEG Destilaria conecta produção em pequenos lotes, ingredientes naturais e atenção aos detalhes.',
  'A marca valoriza botânicos selecionados, processos cuidadosos, embalagens com menor impacto e orgulho por suas origens brasileiras.',
  'Cada escolha reforça uma visão de produto premium: menos excesso, mais consciência, procedência e respeito pela experiência de quem aprecia bebidas artesanais brasileiras.',
];

const detailCopy = [
  'A seleção de botânicos é parte essencial da assinatura sensorial da BEG Destilaria. Ingredientes naturais, origem responsável e equilíbrio aromático conduzem o perfil de cada rótulo.',
  'A produção em pequenos lotes permite controle, cuidado e acabamento artesanal. Cada etapa é pensada para preservar qualidade, identidade e consistência.',
  'A embalagem faz parte da experiência e também da responsabilidade da marca. A escolha por materiais recicláveis reduz impacto e reforça uma relação mais consciente com o produto.',
  'A BEG Destilaria nasce no Brasil e carrega esse orgulho em sua narrativa, em seus botânicos, em sua estética e na forma como apresenta a produção artesanal brasileira ao mundo.',
] as const;

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#DFDEC9] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#DFDEC9] px-5 pb-16 pt-[130px] md:px-8 lg:pb-20 lg:pt-[160px]">
        <div className="pointer-events-none absolute left-[-100px] top-[120px] h-[560px] w-[330px] opacity-50">
          <Image src={sustainabilityAssets.leftOrnament} alt="" fill sizes="330px" className="object-contain" priority />
        </div>
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div className="relative z-[2]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Sustentabilidade</p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 font-serifDisplay text-[clamp(3.5rem,6.6vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">Orgulhosamente Artesanal.</h1>
            <div className="relative mt-7 h-[24px] w-[48px]">
              <Image src={sustainabilityAssets.waves} alt="" fill sizes="48px" className="object-contain" />
            </div>
          </div>

          <div className="relative z-[2] border border-[#b8ad86]/70 bg-[#F7F2E7]/70 p-7 shadow-[0_24px_70px_rgba(54,43,25,0.08)] md:p-10">
            <div className="space-y-5 text-[1.04rem] leading-[1.9] text-beggin-ink/74">
              {introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href="/produtos" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Conheça nossas opções</Link>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#DFDEC9] px-5 pb-24 md:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1380px] space-y-10 lg:space-y-14">
          {sustainabilityItems.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={item.title} className="grid overflow-hidden border border-[#b8ad86]/70 bg-[#F7F2E7]/78 shadow-[0_24px_70px_rgba(54,43,25,0.07)] lg:grid-cols-2">
                <div className={`${reversed ? 'lg:order-2' : ''} relative min-h-[320px] bg-[#ebe7d7] p-10 md:min-h-[380px]`}>
                  <div className="absolute inset-6 border border-[#c8b98e]/45" />
                  <div className="relative mx-auto h-full min-h-[260px] max-w-[430px]">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 80vw, 430px" className="object-cover" />
                  </div>
                </div>
                <div className={`${reversed ? 'lg:order-1' : ''} flex flex-col justify-center p-8 md:p-12 lg:p-16`}>
                  <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-red">Pilar {String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-5 font-serifDisplay text-[clamp(2.3rem,4vw,4.7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">{item.title}</h2>
                  <div className="mt-6 h-px w-20 bg-beggin-gold/70" />
                  <p className="mt-7 text-[1.03rem] leading-[1.85] text-beggin-ink/72">{detailCopy[index]}</p>
                  <p className="mt-5 font-serifDisplay text-[1.1rem] font-bold uppercase tracking-[0.08em] text-beggin-ink/80">{item.description}</p>
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
