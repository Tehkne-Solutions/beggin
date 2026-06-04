import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, GlassWater, MapPin, MessageCircle, Play, Sparkles, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Beg Experience | BEG Destilaria',
  description:
    'Agende uma visita, degustação ou evento na BEG Destilaria em Joaquim Egídio, Campinas.',
};

const eventWhatsappUrl =
  'https://wa.me/551999816358?text=Ol%C3%A1%20gostaria%20de%20realizar%20meu%20evento%20na%20BEG%20Destilaria%20poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%21';

const experienceImages = [
  {
    src: '/images/BEGGIN_DESTILARIA-0313.jpg',
    alt: 'Experiência na BEG Destilaria',
  },
  {
    src: '/images/BEGGIN_DESTILARIA-1161.jpg',
    alt: 'Destilaria BEG em Joaquim Egídio',
  },
  {
    src: '/images/20210107_Gin Beg4179.jpg',
    alt: 'Botânicos e produção artesanal BEG',
  },
] as const;

const pillars = [
  {
    icon: GlassWater,
    title: 'Faça seu próprio gin',
    text: 'Uma experiência guiada para conhecer botânicos, aromas e a identidade artesanal da BEG.',
  },
  {
    icon: CalendarDays,
    title: 'Agendamento no site',
    text: 'A página já está preparada para receber o módulo oficial de reserva indicado pela equipe.',
  },
  {
    icon: MapPin,
    title: 'Joaquim Egídio',
    text: 'A destilaria fica em um cenário histórico e bucólico de Campinas, conectado à origem da marca.',
  },
] as const;

const visitSteps = [
  ['01', 'Escolha o formato', 'Visita, degustação, evento, parceria ou experiência personalizada.'],
  ['02', 'Solicite disponibilidade', 'Enquanto o módulo oficial não entra, o WhatsApp funciona como fallback direto com a equipe.'],
  ['03', 'Viva a experiência', 'Conheça a destilaria, os botânicos e o cuidado artesanal por trás da BEG.'],
] as const;

const reviews = [
  'Experiência sensorial, artesanal e muito bem conduzida.',
  'Ambiente charmoso para conhecer a destilaria e provar os produtos.',
  'Uma visita que conecta história, botânicos e coquetelaria.',
] as const;

export default function BegExperiencePage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-16 pt-[128px] md:px-8 lg:pb-20 lg:pt-[154px]">
        <div className="pointer-events-none absolute left-[-130px] top-[140px] h-[430px] w-[330px] opacity-35">
          <Image
            src="/images/home/beggin-home-nossa-historia-folhas-lateral-esquerdo.png"
            alt=""
            fill
            priority
            sizes="330px"
            className="object-contain"
          />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="relative z-[2]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">
              Beg Experience
            </p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[760px] font-serifDisplay text-[clamp(3.45rem,6.4vw,7.4rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
              Viva a BEG Destilaria por dentro.
            </h1>
            <p className="mt-8 max-w-[650px] text-[1.05rem] leading-[1.86] text-beggin-ink/72">
              Conheça a destilaria em Joaquim Egídio, descubra os botânicos, participe de experiências guiadas e transforme encontros em momentos memoráveis.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={eventWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink"
              >
                <MessageCircle size={18} strokeWidth={1.8} />
                Solicitar agendamento
              </Link>
              <a
                href="#modulo-agendamento"
                className="inline-flex border border-beggin-gold/65 px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:border-beggin-red hover:text-beggin-red"
              >
                Ver módulo interno
              </a>
            </div>
          </div>

          <div className="relative z-[2]">
            <div className="pointer-events-none absolute inset-[-18px] border border-[#c8b98e]/45" />
            <div className="relative grid min-h-[520px] gap-4 border border-[#c8b98e]/60 bg-[#FFFCF6]/78 p-4 shadow-[0_28px_78px_rgba(54,43,25,0.1)] md:grid-cols-[0.55fr_0.45fr]">
              <div className="relative min-h-[470px] overflow-hidden bg-[#e7dfc9]">
                <Image
                  src={experienceImages[0].src}
                  alt={experienceImages[0].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 520px"
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="grid gap-4">
                {experienceImages.slice(1).map((image) => (
                  <div key={image.src} className="relative min-h-[228px] overflow-hidden bg-[#e7dfc9]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 45vw, 300px"
                      className="object-cover transition duration-700 hover:scale-[1.04]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modulo-agendamento" className="paper-texture bg-[#131413] px-5 py-16 text-[#FCF7F1] md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div>
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-[#d7b866]">Agendamento interno</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.8rem,4.9vw,5.7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Espaço pronto para o módulo oficial.
            </h2>
            <p className="mt-7 max-w-[620px] text-[1.03rem] leading-[1.85] text-[#FCF7F1]/72">
              Assim que a ferramenta indicada for confirmada, o embed será incorporado diretamente aqui, sem redirecionar o usuário para uma página externa.
            </p>
          </div>
          <div className="border border-[#c8a759]/45 bg-[#1a1b18] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <div className="flex min-h-[340px] flex-col items-center justify-center border border-dashed border-[#c8a759]/45 p-8 text-center">
              <CalendarDays className="text-[#d7b866]" size={42} strokeWidth={1.55} />
              <h3 className="mt-6 font-serifDisplay text-[1.65rem] font-bold uppercase tracking-[0.06em]">Embed de agendamento</h3>
              <p className="mt-4 max-w-[520px] text-[0.98rem] leading-[1.75] text-[#FCF7F1]/68">
                Placeholder técnico para iframe, script ou widget oficial. Enquanto isso, o fallback é o botão de WhatsApp da página.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FDF9F1] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title} className="border border-[#c7b889]/60 bg-[#FFFCF6] p-7 shadow-[0_18px_52px_rgba(54,43,25,0.05)]">
                  <Icon className="text-beggin-red" size={30} strokeWidth={1.65} />
                  <h2 className="mt-6 font-serifDisplay text-[1.55rem] font-bold uppercase leading-[1] tracking-[0.04em]">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-[1.76] text-beggin-ink/70">{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 py-16 md:px-8 lg:py-22">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">
              Vídeo
            </p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.8rem,4.9vw,5.7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Já pensou em fazer seu próprio gin?
            </h2>
            <p className="mt-7 max-w-[620px] text-[1.02rem] leading-[1.85] text-beggin-ink/72">
              Espaço preparado para incorporar o vídeo oficial da BEG Experience no YouTube. Assim que o link final for confirmado, o bloco recebe o embed definitivo sem alterar o layout.
            </p>
          </div>

          <div className="relative overflow-hidden border border-[#c8b98e]/60 bg-[#131413] p-4 shadow-[0_24px_70px_rgba(19,20,19,0.18)]">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(201,167,89,0.25),rgba(19,20,19,0.98))]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#c8a759]/70 bg-[#FCF7F1]/10 text-[#FCF7F1] backdrop-blur-sm">
                <Play size={34} fill="currentColor" strokeWidth={1.5} />
              </div>
              <p className="absolute bottom-6 left-6 right-6 font-serifDisplay text-[13px] font-bold uppercase tracking-[0.18em] text-[#FCF7F1]/86">
                BEG Experience — vídeo oficial em breve
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#DFDEC9] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">
                Avaliações
              </p>
              <h2 className="mt-5 font-serifDisplay text-[clamp(2.5rem,4.2vw,4.9rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em]">
                Quem visita, lembra.
              </h2>
              <Link
                href="https://www.tripadvisor.com.br/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex border border-beggin-ink/35 px-6 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-beggin-ink transition hover:border-beggin-red hover:text-beggin-red"
              >
                Ver avaliações no TripAdvisor
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <article key={review} className="border border-[#b8ad86]/70 bg-[#F7F2E7]/82 p-6">
                  <div className="flex gap-1 text-beggin-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} fill="currentColor" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="mt-5 text-[1rem] leading-[1.75] text-beggin-ink/72">“{review}”</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px] border-y border-[#c8b98e]/45 py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {visitSteps.map(([number, title, text]) => (
              <article key={title} className="relative pl-6">
                <span className="font-serifDisplay text-[3.2rem] font-semibold leading-none text-beggin-gold/45">
                  {number}
                </span>
                <h2 className="mt-4 font-serifDisplay text-[1.45rem] font-bold uppercase tracking-[0.04em]">
                  {title}
                </h2>
                <p className="mt-3 text-[1rem] leading-[1.75] text-beggin-ink/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
