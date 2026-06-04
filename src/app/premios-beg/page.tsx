import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Globe2, Medal, MessageSquareQuote, Sparkles, Star, Trophy } from 'lucide-react';
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
    text: 'A BEG Destilaria acumula reconhecimento em competições globais de destilados, reforçando a força da produção artesanal brasileira no mundo.',
  },
  {
    icon: Medal,
    label: 'Brasil',
    title: 'Orgulho artesanal brasileiro',
    text: 'Cada medalha celebra uma produção em pequenos lotes, feita com botânicos selecionados, atenção sensorial e identidade nacional.',
  },
  {
    icon: Sparkles,
    label: 'Excelência',
    title: 'Mais de 100 medalhas',
    text: 'Uma trajetória construída por consistência, acabamento premium, inovação e presença em avaliações técnicas de alto padrão.',
  },
] as const;

const featuredMedals = [
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20Tonic%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian Tonic IWSC 2024',
  },
  {
    src: '/images/premios/selo-premio-1.png',
    alt: 'Selo World Gin Awards Brazil Classic Winner',
  },
  {
    src: '/images/premios/selo-premio-2.png',
    alt: 'Selo World Gin Awards Gold',
  },
  {
    src: '/images/premios/selo-premio-3.png',
    alt: 'Selo World Gin Awards Brazil Colour Changing Winner',
  },
  {
    src: '/images/premios/1-main_std-iwsc2024-gold-98-medal-lores-png.png',
    alt: 'Medalha IWSC Gold 98 pontos 2024',
  },
  {
    src: '/images/premios/Medalha%20BEG%20Brazilian%20IWSC%202024.png',
    alt: 'Medalha BEG Brazilian IWSC 2024',
  },
] as const;

const awardNarratives = [
  'Reconhecimento que valoriza destilados com qualidade sensorial, presença de marca, apresentação e consistência técnica no mercado de bebidas.',
  'Competição internacional respeitada no universo de destilados, com avaliação técnica criteriosa e alcance global.',
  'Selo que reforça o posicionamento da BEG Destilaria entre rótulos de destaque no universo do gin artesanal contemporâneo.',
  'Conquista que amplia a trajetória internacional da marca e confirma personalidade, equilíbrio e acabamento sensorial.',
] as const;

const timeline = [
  {
    year: '2012',
    title: 'Início da jornada',
    text: 'Quatro amigos unidos pela paixão por destilados começam a construir a história da BEG.',
    status: 'História da marca',
  },
  {
    year: '2024',
    title: 'Gold 98 pontos',
    text: 'Marco preparado para destacar a conquista de 98 pontos e as medalhas internacionais já presentes no acervo visual.',
    status: 'Conteúdo a validar',
  },
  {
    year: '2026',
    title: 'Nova fase',
    text: 'Espaço preparado para receber a ordem correta das próximas medalhas e reconhecimentos enviados pelo cliente.',
    status: 'Aguardando ordem final',
  },
] as const;

const tripadvisorPlaceholders = [
  'Avaliação real com link original será inserida após envio do cliente.',
  'Bloco preparado para comentário verificado, nota e referência externa.',
  'Espaço reservado para prova social conectada ao TripAdvisor.',
] as const;

export default function AwardsLandingPage() {
  return (
    <main className="min-h-screen bg-[#FEFAF3] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FEFAF3] px-5 pb-16 pt-[130px] md:px-8 lg:pb-20 lg:pt-[160px]">
        <div className="pointer-events-none absolute right-[-120px] bottom-[-24px] hidden h-[520px] w-[360px] opacity-24 lg:block">
          <Image src={awardAssets.flowerRight} alt="" fill sizes="360px" className="object-contain" priority />
        </div>

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
              Somos a Destilaria Artesanal Brasileira mais premiada do mundo!
            </p>
            <p className="mt-6 max-w-[680px] text-[1.05rem] leading-[1.85] text-beggin-ink/72">
              Do interior de São Paulo para o mundo, a BEG Destilaria transforma botânicos, técnica e brasilidade em uma trajetória reconhecida dentro e fora do país.
            </p>
            <Link href="/produtos" className="mt-9 inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Conheça a linha BEG
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative z-[2] overflow-hidden border border-[#c7b889]/65 bg-[#FFFCF6] p-5 shadow-[0_24px_72px_rgba(54,43,25,0.08)]">
            <div className="relative min-h-[390px] overflow-hidden bg-[#f5ecdc] md:min-h-[480px]">
              <Image src="/images/premios/BEGGIN_DESTILARIA-1246.jpg" alt="BEG Destilaria premiada" fill priority sizes="(max-width: 1024px) 92vw, 620px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131413]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-[#FCF7F1]">
                <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.26em] text-[#d7b866]">BEG Destilaria</p>
                <p className="mt-3 max-w-[420px] text-[1rem] leading-[1.65] text-[#FCF7F1]/88">Produção artesanal brasileira com presença em premiações nacionais e internacionais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1320px] border border-[#c7b889]/65 bg-[#FFFCF6] px-6 py-8 shadow-[0_22px_70px_rgba(54,43,25,0.055)] md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="mb-8 grid gap-6 border-b border-[#d7c89e]/55 pb-7 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.3em] text-beggin-red">Reconhecimento</p>
              <h2 className="mt-4 font-serifDisplay text-[clamp(2rem,3.3vw,3.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">Uma trajetória premiada.</h2>
            </div>
            <p className="max-w-[760px] text-[1rem] leading-[1.85] text-beggin-ink/68 lg:justify-self-end">
              Medalhas e certificações contam a consistência de uma destilaria que une técnica, experiência sensorial e orgulho brasileiro.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {proofPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.label} className="group relative min-h-[255px] overflow-hidden border border-[#d7c89e]/60 bg-[#FEFAF3]/84 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/70 md:p-7">
                  <div className="absolute inset-x-6 top-0 h-px bg-beggin-gold/45" />
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serifDisplay text-[10px] font-bold uppercase tracking-[0.22em] text-beggin-gold">{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={24} strokeWidth={1.55} className="text-beggin-red" />
                  </div>
                  <p className="mt-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.28em] text-beggin-red/80">{pillar.label}</p>
                  <h3 className="mt-3 font-serifDisplay text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[0.02em] text-beggin-ink">{pillar.title}</h3>
                  <p className="mt-5 text-[0.98rem] leading-[1.75] text-beggin-ink/70">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden border border-[#c7b889]/60 bg-[#131413] text-[#FCF7F1] shadow-[0_24px_70px_rgba(19,20,19,0.16)] lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14 xl:p-16">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-[#d7b866]">Destaque técnico</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(3.6rem,7vw,8.2rem)] font-semibold uppercase leading-[0.78] tracking-[-0.06em] text-[#FCF7F1]">
              98
              <span className="block text-[0.38em] leading-none tracking-[0.16em] text-[#d7b866]">pontos</span>
            </h2>
            <p className="mt-7 max-w-[620px] text-[1.04rem] leading-[1.82] text-[#FCF7F1]/74">
              Área preparada para destacar a conquista de 98 pontos com narrativa, medalha e confirmação oficial assim que a ordem final e o conteúdo validado forem enviados.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-items-center gap-5 border-t border-[#d7b866]/20 bg-[#171816] p-8 md:grid-cols-3 lg:border-l lg:border-t-0 lg:p-10">
            {featuredMedals.map((medal) => (
              <div key={medal.src} className="relative h-[132px] w-[132px] sm:h-[154px] sm:w-[154px] xl:h-[174px] xl:w-[174px]">
                <Image
                  src={medal.src}
                  alt={medal.alt}
                  fill
                  sizes="(max-width: 640px) 132px, (max-width: 1280px) 154px, 174px"
                  className="object-contain drop-shadow-[0_22px_34px_rgba(0,0,0,0.42)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-16 md:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-10 max-w-[760px]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Linha do tempo</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.6rem,4.4vw,5.2rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">Do primeiro lote aos grandes palcos.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-7 shadow-[0_18px_52px_rgba(54,43,25,0.045)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-serifDisplay text-[3.6rem] font-semibold leading-none text-beggin-gold/55">{item.year}</span>
                  <span className="border border-[#c7b889]/55 px-3 py-2 font-serifDisplay text-[9px] font-bold uppercase tracking-[0.16em] text-beggin-ink/58">{item.status}</span>
                </div>
                <h3 className="mt-5 font-serifDisplay text-[1.5rem] font-bold uppercase leading-[1] tracking-[0.04em]">{item.title}</h3>
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
                    <Image src={award.image} alt={award.title} fill sizes="(max-width: 768px) 78vw, (max-width: 1024px) 390px, 430px" className="object-contain drop-shadow-[0_18px_30px_rgba(54,43,25,0.16)]" />
                  </div>
                </div>
                <div className={`${reversed ? 'lg:order-1' : ''} flex min-h-[300px] flex-col justify-center p-8 md:p-12 lg:min-h-[420px] lg:p-14 xl:p-16`}>
                  <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.28em] text-beggin-red">Reconhecimento {String(index + 1).padStart(2, '0')}</p>
                  <h2 className="mt-5 max-w-[620px] font-serifDisplay text-[clamp(2.2rem,3.8vw,4.25rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-beggin-ink">{award.title}</h2>
                  <div className="mt-6 h-px w-20 bg-beggin-gold/70" />
                  <p className="mt-7 max-w-[620px] text-[1.03rem] leading-[1.85] text-beggin-ink/72">{awardNarratives[index]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1320px] gap-8 border-y border-[#c7b889]/55 py-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-center">
          <div>
            <MessageSquareQuote className="text-beggin-red" size={34} strokeWidth={1.55} />
            <p className="mt-6 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">TripAdvisor</p>
            <h2 className="mt-5 max-w-[680px] font-serifDisplay text-[clamp(2.4rem,4.2vw,4.9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">Avaliações verificadas em preparação.</h2>
            <p className="mt-6 max-w-[620px] text-[1.02rem] leading-[1.85] text-beggin-ink/72">
              Bloco criado para receber selo dourado, comentários reais e links originais assim que o cliente enviar os materiais oficiais.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {tripadvisorPlaceholders.map((review) => (
              <article key={review} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-6">
                <div className="flex gap-1 text-beggin-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" strokeWidth={1.4} />
                  ))}
                </div>
                <p className="mt-5 text-[0.98rem] leading-[1.72] text-beggin-ink/70">“{review}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FEFAF3] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1320px] border-y border-[#c7b889]/55 py-12 text-center">
          <Globe2 className="mx-auto text-beggin-red" size={34} strokeWidth={1.55} />
          <h2 className="mx-auto mt-6 max-w-[860px] font-serifDisplay text-[clamp(2.4rem,4.2vw,4.9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">O mundo reconhece. O Brasil se orgulha.</h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[1.02rem] leading-[1.85] text-beggin-ink/72">A BEG Destilaria segue levando a coquetelaria artesanal brasileira para novas experiências, novos consumidores e novos reconhecimentos.</p>
          <Link href="/agendamento" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">Conheça a BEG Experience</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
