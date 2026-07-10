import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Medal, Sparkles, Trophy } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { awardAssets, awards, awardsContent } from '@/data/awards';

export const metadata: Metadata = {
  title: 'Prêmios | BEG Destilaria',
  description: 'Conheça os reconhecimentos nacionais e internacionais da BEG Destilaria.',
};

const proofPillars = [
  {
    icon: Trophy,
    label: 'Mundo',
    title: 'Reconhecimento internacional',
    text: 'Uma trajetória construída em competições técnicas de destilados, levando a produção artesanal brasileira aos principais palcos do setor.',
  },
  {
    icon: Medal,
    label: 'Brasil',
    title: 'Orgulho artesanal brasileiro',
    text: 'Cada conquista reforça a consistência da produção em pequenos lotes, o cuidado sensorial e a identidade brasileira da BEG.',
  },
  {
    icon: Sparkles,
    label: 'Excelência',
    title: 'Consistência premiada',
    text: 'Qualidade, inovação e personalidade conectam os diferentes capítulos da história da destilaria.',
  },
] as const;

const medal98 = '/images/premios/1-main_std-iwsc2024-gold-98-medal-lores-png.png';

const timeline = [
  {
    year: '2012',
    title: 'Início da jornada',
    text: 'Quatro amigos unidos pela paixão por destilados começam a construir a história da BEG.',
  },
  {
    year: '2018',
    title: 'O Começo de Tudo',
    text: 'A produção ganha forma, método e identidade própria, consolidando as bases da destilaria artesanal.',
  },
  {
    year: '2019',
    title: 'Reconhecimento Máximo de Engenharia e Experiência',
    text: 'A estrutura, o processo produtivo e a experiência BEG passam a representar a união entre técnica e hospitalidade.',
  },
  {
    year: '2021–2022',
    title: 'Consagração nos EUA e Reino Unido',
    text: 'A BEG amplia sua presença internacional e fortalece o reconhecimento da produção brasileira fora do país.',
  },
  {
    year: '2023',
    title: 'A Nota Quase Perfeita em São Francisco',
    text: 'Um novo marco técnico reafirma a qualidade sensorial, o equilíbrio e a consistência dos rótulos BEG.',
  },
  {
    year: '2024',
    title: 'GOLD 98 PONTOS — O Topo do Mundo',
    text: 'O BEG New World Navy conquista a medalha GOLD Outstanding e a marca alcança o maior marco de sua história.',
  },
  {
    year: '2026',
    title: 'O MAIS PREMIADO DO BRASIL',
    text: 'Consagração absoluta: os melhores do Brasil e uma trajetória que continua levando a destilaria artesanal brasileira ao mundo.',
  },
] as const;

const awardNarratives = [
  'Reconhecimento que valoriza destilados com qualidade sensorial, presença de marca, apresentação e consistência técnica.',
  'Competição internacional respeitada no universo de destilados, com avaliação criteriosa e alcance global.',
  'Selo que reforça o posicionamento da BEG entre os rótulos de destaque do gin artesanal contemporâneo.',
  'Conquista que amplia a trajetória internacional da marca e confirma personalidade, equilíbrio e acabamento sensorial.',
] as const;

export default function AwardsLandingPage() {
  return (
    <main className="min-h-screen bg-[#FEFAF3] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-16 pt-[130px] md:px-8 lg:pb-20 lg:pt-[160px]">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.54fr_0.46fr] lg:items-center">
          <div className="relative z-[2]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">{awardsContent.eyebrow}</p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[860px] font-serifDisplay text-[clamp(3.35rem,6.7vw,7.9rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
              {awardsContent.title.split('\n').map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <div className="relative mt-7 h-[24px] w-[48px]">
              <Image src={awardAssets.waves} alt="" fill sizes="48px" className="object-contain" />
            </div>
            <p className="mt-8 max-w-[700px] font-serifDisplay text-[1.35rem] font-bold uppercase leading-[1.16] tracking-[0.02em] text-beggin-red md:text-[1.55rem]">
              Somos a Destilaria Artesanal Brasileira mais premiada do mundo.
            </p>
            <p className="mt-6 max-w-[680px] text-[1.05rem] leading-[1.85] text-beggin-ink/72">
              Do interior de São Paulo para o mundo, a BEG transforma botânicos, técnica e brasilidade em uma trajetória reconhecida dentro e fora do país.
            </p>
            <Link href="/produtos" className="mt-9 inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Conheça a linha BEG
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative z-[2] overflow-hidden border border-[#c7b889]/65 bg-[#FFFCF6] p-5 shadow-[0_24px_72px_rgba(54,43,25,0.08)]">
            <div className="relative min-h-[390px] overflow-hidden bg-[#f5ecdc] md:min-h-[480px]">
              <Image
                src="/images/premios/BEGGIN_DESTILARIA-1246.jpg"
                alt="BEG Destilaria premiada"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 620px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1320px] border border-[#c7b889]/65 bg-[#FFFCF6] px-6 py-8 shadow-[0_22px_70px_rgba(54,43,25,0.055)] md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="grid gap-5 md:grid-cols-3">
            {proofPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.label} className="relative min-h-[250px] border border-[#d7c89e]/60 bg-[#FEFAF3]/84 p-7">
                  <Icon size={26} strokeWidth={1.55} className="text-beggin-red" />
                  <p className="mt-6 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.28em] text-beggin-red/80">{pillar.label}</p>
                  <h2 className="mt-3 font-serifDisplay text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[0.02em]">{pillar.title}</h2>
                  <p className="mt-5 text-[0.98rem] leading-[1.75] text-beggin-ink/70">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden border border-[#c7b889]/60 bg-[#131413] text-[#FCF7F1] shadow-[0_24px_70px_rgba(19,20,19,0.16)] lg:grid-cols-[0.66fr_0.34fr]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14 xl:p-16">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-[#d7b866]">O maior marco histórico</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(3.6rem,7vw,8.2rem)] font-semibold uppercase leading-[0.78] tracking-[-0.06em] text-[#FCF7F1]">
              98
              <span className="block text-[0.38em] leading-none tracking-[0.16em] text-[#d7b866]">pontos</span>
            </h2>
            <p className="mt-7 max-w-[760px] text-[1.04rem] leading-[1.82] text-[#FCF7F1]/78">
              Em 2024, cravamos o nosso maior marco histórico: fomos eleitos o Melhor Gin do Mundo. No gigantesco IWSC Londres, o BEG New World Navy conquistou a raríssima medalha GOLD Outstanding. Na mesma edição, o BEG Brazilian Dry brilhou com Prata (Qualidade) e Bronze (Gin & Tonic).
            </p>
          </div>
          <div className="relative flex min-h-[360px] items-center justify-center border-t border-[#d7b866]/20 bg-[#171816] p-10 lg:border-l lg:border-t-0">
            <div className="relative h-[250px] w-[250px] md:h-[300px] md:w-[300px]">
              <Image
                src={medal98}
                alt="Medalha IWSC Gold Outstanding de 98 pontos"
                fill
                sizes="300px"
                className="object-contain drop-shadow-[0_24px_38px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 max-w-[820px]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Linha do tempo</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.6rem,4.4vw,5.2rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
              Do primeiro lote ao topo do mundo.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-7 shadow-[0_18px_52px_rgba(54,43,25,0.045)]">
                <span className="font-serifDisplay text-[3.25rem] font-semibold leading-none text-beggin-red">{item.year}</span>
                <h3 className="mt-5 font-serifDisplay text-[1.42rem] font-bold uppercase leading-[1.02] tracking-[0.035em]">{item.title}</h3>
                <p className="mt-4 text-[1rem] leading-[1.75] text-beggin-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-24 md:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1320px] space-y-8 lg:space-y-10">
          {awards.map((award, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={award.id} className="grid overflow-hidden border border-[#c7b889]/60 bg-[#FFFCF6] shadow-[0_24px_70px_rgba(54,43,25,0.055)] lg:grid-cols-2 lg:items-stretch">
                <div className={`${reversed ? 'lg:order-2' : ''} relative flex min-h-[300px] items-center justify-center bg-[#f6efe1] px-6 py-10 md:min-h-[360px] lg:min-h-[420px] lg:px-10 lg:py-12`}>
                  <div className="absolute inset-6 border border-[#c7b889]/45" />
                  <div className="relative z-[2] h-[230px] w-full max-w-[330px] md:h-[280px] md:max-w-[390px] lg:h-[315px] lg:max-w-[430px]">
                    <Image src={award.image} alt={award.title} fill sizes="(max-width: 768px) 78vw, 430px" className="object-contain drop-shadow-[0_18px_30px_rgba(54,43,25,0.16)]" />
                  </div>
                </div>
                <div className={`${reversed ? 'lg:order-1' : ''} flex min-h-[300px] flex-col justify-center p-8 md:p-12 lg:min-h-[420px] lg:p-14 xl:p-16`}>
                  <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-red">Reconhecimento {String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-5 max-w-[620px] font-serifDisplay text-[clamp(2.2rem,3.8vw,4.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">{award.title}</h2>
                  <div className="mt-6 h-px w-20 bg-beggin-gold/70" />
                  <p className="mt-7 max-w-[620px] text-[1.03rem] leading-[1.85] text-beggin-ink/72">{awardNarratives[index]}</p>
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
