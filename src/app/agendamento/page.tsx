import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, ExternalLink, GlassWater, MapPin, MessageCircle, Sparkles, Star } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ExperienceCarousel } from '@/components/experience/ExperienceCarousel';

export const metadata: Metadata = {
  title: 'BEG Experience | BEG Destilaria',
  description:
    'Agende uma visita, degustação ou evento na BEG Destilaria em Joaquim Egídio, Campinas.',
};

const eventWhatsappUrl =
  'https://wa.me/5519996638642?text=Ol%C3%A1%21%20Gostaria%20de%20realizar%20meu%20evento%20na%20BEG%20Destilaria.%20Poderia%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F';

const tripadvisorUrl =
  'https://www.tripadvisor.com.br/Attraction_Review-g303605-d25045490-Reviews-BEG_Destilaria_Boutique-Campinas_State_of_Sao_Paulo.html';

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

const verifiedReview = {
  author: 'Regina B.',
  context: 'jun. de 2026 • Amigos',
  title: 'BEG for Gin',
  text: 'Sensacional a experiência de aprender como se fazer gin de qualidade, poder preparar a receita de acordo com seus botânicos favoritos, em um lugar lindo e preparado com tanto carinho.',
} as const;

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
              Faça seu evento na BEG
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
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-10 border-y border-[#b5a879]/65 py-12 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
            <div>
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Avaliações</p>
              <h2 className="mt-5 font-serifDisplay text-[clamp(2.8rem,5vw,5.8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em]">
                Quem visita, lembra.
              </h2>
              <p className="mt-6 max-w-[520px] text-[1rem] leading-[1.8] text-beggin-ink/72">
                Confira uma avaliação publicada por visitante e acesse a página oficial da BEG Destilaria no Tripadvisor.
              </p>
              <Link
                href={tripadvisorUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 border border-beggin-ink/45 px-6 py-4 font-serifDisplay text-[11px] font-bold uppercase tracking-[0.17em] transition hover:border-beggin-red hover:text-beggin-red"
              >
                Ver avaliações no Tripadvisor
                <ExternalLink size={16} strokeWidth={1.7} />
              </Link>
            </div>

            <Link
              href={tripadvisorUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir a avaliação da BEG Destilaria no Tripadvisor"
              className="group block border border-[#b5a879]/75 bg-[#FFFCF6] p-7 shadow-[0_20px_60px_rgba(54,43,25,0.08)] transition hover:-translate-y-1 hover:border-beggin-red md:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <p className="font-serifDisplay text-[1.15rem] font-bold uppercase tracking-[0.08em]">{verifiedReview.author}</p>
                  <p className="mt-1 text-[0.88rem] text-beggin-ink/60">{verifiedReview.context}</p>
                </div>
                <div className="flex items-center gap-1 text-[#00aa6c]" aria-label="Avaliação positiva no Tripadvisor">
                  {[0, 1, 2, 3, 4].map((item) => <Star key={item} size={19} fill="currentColor" strokeWidth={1.2} />)}
                </div>
              </div>
              <h3 className="mt-7 font-serifDisplay text-[1.65rem] font-bold uppercase leading-[1] tracking-[0.03em]">{verifiedReview.title}</h3>
              <p className="mt-5 text-[1rem] leading-[1.82] text-beggin-ink/74">“{verifiedReview.text}”</p>
              <div className="mt-7 inline-flex items-center gap-2 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.2em] text-beggin-red">
                Abrir fonte original
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FDF9F1] px-5 py-16 md:px-8 lg:py-22">
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
            Consultar evento e disponibilidade
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
