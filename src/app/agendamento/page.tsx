import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, GlassWater, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ExperienceCarousel } from '@/components/experience/ExperienceCarousel';

export const metadata: Metadata = {
  title: 'BEG Experience | BEG Destilaria',
  description:
    'Agende uma visita, degustação ou evento na BEG Destilaria em Joaquim Egídio, Campinas.',
};

const eventWhatsappUrl =
  'https://wa.me/5519996638642?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20a%20BEG%20Experience%20e%20consultar%20datas%20para%20visita%2C%20degusta%C3%A7%C3%A3o%20ou%20evento.';

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
    title: 'Visitas e degustações',
    text: 'Consulte datas, formatos e disponibilidade diretamente com a equipe da destilaria.',
  },
  {
    icon: MapPin,
    title: 'Joaquim Egídio',
    text: 'Um cenário histórico e bucólico de Campinas, conectado à origem e à produção da marca.',
  },
] as const;

const visitSteps = [
  ['01', 'Escolha o formato', 'Visita, degustação, evento, parceria ou experiência personalizada.'],
  ['02', 'Consulte a disponibilidade', 'Fale com a equipe pelo WhatsApp e encontre a melhor data para o seu grupo.'],
  ['03', 'Viva a experiência', 'Conheça a destilaria, os botânicos e o cuidado artesanal por trás da BEG.'],
] as const;

export default function BegExperiencePage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-16 pt-[128px] md:px-8 lg:pb-20 lg:pt-[154px]">
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div className="relative z-[2]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">
              BEG Experience
            </p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[760px] font-serifDisplay text-[clamp(3.45rem,6.4vw,7.4rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
              Viva a BEG Destilaria por dentro.
            </h1>
            <p className="mt-8 max-w-[650px] text-[1.05rem] leading-[1.86] text-beggin-ink/72">
              Conheça a destilaria em Joaquim Egídio, descubra os botânicos, participe de experiências guiadas e transforme encontros em momentos memoráveis.
            </p>
            <Link
              href={eventWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Consultar disponibilidade
            </Link>
          </div>

          <div className="relative z-[2]">
            <ExperienceCarousel images={experienceImages} />
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#131413] px-5 py-16 text-[#FCF7F1] md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1320px]">
          <div className="max-w-[850px]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-[#d7b866]">Como funciona</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.8rem,4.9vw,5.7rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Da escolha da experiência ao primeiro brinde.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {visitSteps.map(([number, title, text]) => (
              <article key={number} className="border border-[#d7b866]/30 bg-[#1a1b18] p-7 md:p-8">
                <span className="font-serifDisplay text-[3.1rem] font-semibold leading-none text-beggin-red">{number}</span>
                <h3 className="mt-6 font-serifDisplay text-[1.5rem] font-bold uppercase leading-[1] tracking-[0.04em]">{title}</h3>
                <p className="mt-4 text-[0.98rem] leading-[1.75] text-[#FCF7F1]/70">{text}</p>
              </article>
            ))}
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

      <section className="paper-texture bg-[#DFDEC9] px-5 py-16 md:px-8 lg:py-22">
        <div className="mx-auto max-w-[1320px] border-y border-[#c7b889]/60 py-12 text-center">
          <Sparkles className="mx-auto text-beggin-red" size={34} strokeWidth={1.55} />
          <h2 className="mx-auto mt-6 max-w-[900px] font-serifDisplay text-[clamp(2.6rem,4.7vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
            Sua próxima experiência começa aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[1.03rem] leading-[1.85] text-beggin-ink/72">
            Fale com a equipe da BEG para consultar formatos, datas e condições para visitas, degustações e eventos.
          </p>
          <Link
            href={eventWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-beggin-red px-8 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Falar com a BEG
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
