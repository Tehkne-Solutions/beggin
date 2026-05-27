import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BottleWine, Leaf, PackageCheck, Play, Recycle, Sprout } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { sustainabilityAssets, sustainabilityItems } from '@/data/sustainability';

export const metadata: Metadata = {
  title: 'Sustentabilidade | BEG Destilaria',
  description: 'Conheça os pilares de sustentabilidade, Projeto Refil, produção artesanal e origem responsável da BEG Destilaria.',
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

const refilBullets = [
  'Refis pensados para reduzir descarte e prolongar a experiência com os rótulos BEG.',
  'Formato mais consciente para consumidores que já conhecem seus sabores favoritos.',
  'Menor impacto na reposição do produto, mantendo qualidade, identidade sensorial e praticidade.',
  'Um caminho para unir consumo premium, recorrência e responsabilidade ambiental.',
] as const;

const impactCards = [
  {
    icon: Recycle,
    title: 'Menos descarte',
    text: 'O Projeto Refil incentiva uma relação mais duradoura com a embalagem e reduz desperdícios desnecessários.',
  },
  {
    icon: BottleWine,
    title: 'Mesmo padrão BEG',
    text: 'A proposta mantém o cuidado artesanal e a assinatura sensorial da destilaria em cada reposição.',
  },
  {
    icon: PackageCheck,
    title: 'Compra mais consciente',
    text: 'Uma alternativa para quem busca praticidade, menor impacto e conexão real com a marca.',
  },
] as const;

const commitments = [
  'Priorizar processos cuidadosos e produção em pequenos lotes.',
  'Valorizar ingredientes, fornecedores e escolhas com responsabilidade.',
  'Reduzir excessos sem abrir mão da experiência premium.',
  'Comunicar sustentabilidade de forma prática, transparente e possível.',
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
            <h1 className="mt-8 max-w-[760px] font-serifDisplay text-[clamp(3.5rem,6.6vw,8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">Orgulhosamente Artesanal.</h1>
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

      <section className="paper-texture bg-[#DFDEC9] px-5 pb-18 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1380px] overflow-hidden border border-[#b8ad86]/70 bg-[#131413] text-[#FCF7F1] shadow-[0_28px_78px_rgba(19,20,19,0.2)] lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative min-h-[420px] overflow-hidden bg-[#211f1b]">
            <Image
              src="/images/fotos-omie/MODERN%20REFIL.jpg"
              alt="Projeto Refil BEG Destilaria"
              fill
              sizes="(max-width: 1024px) 92vw, 660px"
              className="object-cover opacity-88"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131413]/72 via-[#131413]/10 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.3em] text-[#d7b866]">Projeto Refil</p>
              <p className="mt-3 max-w-[430px] text-[1rem] leading-[1.72] text-[#FCF7F1]/82">Uma escolha para reduzir impacto, preservar qualidade e ampliar a experiência BEG.</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <Leaf className="text-[#d7b866]" size={34} strokeWidth={1.55} />
            <h2 className="mt-6 font-serifDisplay text-[clamp(2.8rem,5vw,5.8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">Projeto Refil.</h2>
            <p className="mt-7 max-w-[650px] text-[1.05rem] leading-[1.85] text-[#FCF7F1]/74">
              Sustentabilidade também acontece quando a marca cria alternativas reais para o consumo recorrente. O Projeto Refil reforça esse compromisso: reduzir excesso, manter o padrão artesanal e aproximar a BEG de escolhas mais conscientes.
            </p>
            <ul className="mt-8 grid gap-4 text-[0.98rem] leading-[1.7] text-[#FCF7F1]/78">
              {refilBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d7b866]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link href="/produtos?categoria=refis" className="mt-9 inline-flex w-fit items-center gap-3 border border-[#d7b866]/70 px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-[#FCF7F1] transition hover:border-beggin-red hover:text-beggin-red">
              Conheça os refis
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#DFDEC9] px-5 pb-18 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end">
            <div>
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Impacto prático</p>
              <h2 className="mt-5 font-serifDisplay text-[clamp(2.5rem,4.2vw,4.9rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em]">Consciência em cada escolha.</h2>
            </div>
            <p className="max-w-[720px] text-[1.04rem] leading-[1.85] text-beggin-ink/72 lg:justify-self-end">
              A sustentabilidade da BEG não é tratada como discurso isolado. Ela aparece em produto, processo, embalagem, origem e nas formas de consumo que a marca incentiva.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {impactCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="border border-[#b8ad86]/70 bg-[#F7F2E7]/78 p-7 shadow-[0_18px_52px_rgba(54,43,25,0.055)]">
                  <Icon className="text-beggin-red" size={30} strokeWidth={1.6} />
                  <h3 className="mt-6 font-serifDisplay text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[0.04em]">{card.title}</h3>
                  <p className="mt-4 text-[1rem] leading-[1.76] text-beggin-ink/70">{card.text}</p>
                </article>
              );
            })}
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
                  <div className="relative mx-auto h-full min-h-[260px] max-w-[430px] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 80vw, 430px" className="object-cover transition duration-700 hover:scale-[1.03]" />
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

      <section className="paper-texture bg-[#DFDEC9] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1380px] gap-8 border-y border-[#b8ad86]/70 py-12 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Compromisso</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.5rem,4.2vw,4.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em]">Produzir melhor também é escolher melhor.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex gap-3 border border-[#b8ad86]/55 bg-[#F7F2E7]/55 p-5">
                <Sprout className="mt-1 shrink-0 text-beggin-red" size={20} strokeWidth={1.7} />
                <p className="text-[0.98rem] leading-[1.7] text-beggin-ink/72">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#DFDEC9] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1380px] overflow-hidden border border-[#b8ad86]/70 bg-[#F7F2E7]/78 shadow-[0_22px_70px_rgba(54,43,25,0.06)] lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative min-h-[330px] bg-[#131413] text-[#FCF7F1]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,184,102,0.24),rgba(19,20,19,0.98))]" />
            <div className="relative z-[2] flex min-h-[330px] flex-col items-center justify-center p-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d7b866]/70 bg-[#FCF7F1]/10 text-[#FCF7F1] backdrop-blur-sm">
                <Play size={34} fill="currentColor" strokeWidth={1.5} />
              </div>
              <p className="mt-7 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.24em] text-[#d7b866]">Vídeo institucional</p>
              <p className="mt-4 max-w-[420px] text-[1rem] leading-[1.7] text-[#FCF7F1]/76">Área preparada para receber vídeos oficiais do Projeto Refil, produção artesanal ou sustentabilidade BEG.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Próximo passo</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.4rem,4vw,4.6rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">Conheça a BEG por dentro.</h2>
            <p className="mt-6 text-[1.03rem] leading-[1.85] text-beggin-ink/72">
              Da escolha dos botânicos ao envase, a sustentabilidade também passa pela experiência de quem conhece a destilaria, entende o processo e valoriza o cuidado por trás de cada rótulo.
            </p>
            <Link href="/agendamento" className="mt-8 inline-flex w-fit bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Viva a BEG Experience</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
