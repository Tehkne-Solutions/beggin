import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Sprout, SunMedium, Droplets, RefreshCcw } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { sustainabilityAssets } from '@/data/sustainability';

export const metadata: Metadata = {
  title: 'Sustentabilidade | BEG Destilaria',
  description:
    'Muito Além do Gin: conheça o compromisso da BEG Destilaria com sustentabilidade, Projeto Refil, energia limpa, biodiversidade e produção consciente.',
};

const heroText =
  'A sustentabilidade não é uma opção, é uma obrigação. Operamos de maneira ecológica, desde a origem dos nossos ingredientes, práticas de produção e embalagem. Nosso compromisso com a sustentabilidade é tão forte quanto nosso compromisso com a qualidade.';

const sustainabilityImages = {
  refilRepeat: '/images/sustentabilidade/post%20feed%20refil%20recicle%20e%20repita.jpg',
  freedomRefil: '/images/sustentabilidade/IMG_2516.jpg',
  sameGinLessImpact: '/images/sustentabilidade/Beg%20(1).jpg',
  euReciclo: '/images/sustentabilidade/i%CC%81cone%20eureciclo%20preto.png',
  solarPanels: '/images/sustentabilidade/Paineis%20solares%20.png',
} as const;

const refilHighlights = [
  {
    title: 'Um verdadeiro ícone de sustentabilidade, inovação e liberdade.',
    text: 'O Projeto Refil nasce para transformar a forma como o consumidor se relaciona com um gin premium: menos impacto, mais praticidade e a mesma assinatura BEG.',
    image: sustainabilityImages.refilRepeat,
    imageMode: 'cover',
  },
  {
    title: '9x Mais Leve que o Vidro.',
    text: 'Feita 100% em alumínio, a nossa garrafa refil reduz consideravelmente a nossa pegada de carbono durante o transporte.',
    image: sustainabilityImages.refilRepeat,
    imageMode: 'cover',
  },
  {
    title: 'Infinitamente Reciclável.',
    text: 'O alumínio economiza uma quantidade imensa de energia no processo de reciclagem. É a escolha mais eco consciente para o seu destilado.',
    image: sustainabilityImages.refilRepeat,
    imageMode: 'cover',
  },
  {
    title: 'O alumínio vai onde o vidro não vai.',
    text: 'Muito mais do que sustentável, o nosso refil é sinônimo de liberdade. Leve o seu Refil BEG com total segurança para praias, piscinas, barcos e shows.',
    image: sustainabilityImages.freedomRefil,
    imageMode: 'cover',
  },
  {
    title: 'O Mesmo Gin, Menos Impacto e Menor Custo.',
    text: 'Você leva para casa o mesmo gin premium, paga menos por isso e ainda apoia ativamente a cadeia de reciclagem nacional.',
    image: sustainabilityImages.sameGinLessImpact,
    imageMode: 'cover',
  },
  {
    title: 'Selo Eu Reciclo.',
    text: 'Garantimos a compensação ambiental das nossas embalagens, apoiando ativamente a reciclagem em mais de 12 estados do Brasil.',
    image: sustainabilityImages.euReciclo,
    imageMode: 'contain',
  },
] as const;

const biodiversityBullets = [
  {
    icon: SunMedium,
    title: 'Energia 100% Limpa.',
    text: 'Nossa destilaria opera com painéis solares, gerando até 200% de energia limpa e renovável para a nossa produção.',
  },
  {
    icon: Leaf,
    title: 'Botânicos Locais e Redução de Carbono.',
    text: 'Priorizamos o uso de botânicos brasileiros em grande parte da composição — como o Flor de sabugueiro do Brasil, mexerica, limão Tahiti e a folha de pitangueira. Isso valoriza a biodiversidade nacional e reduz drasticamente a pegada de carbono que seria gerada pela importação de insumos.',
  },
  {
    icon: Droplets,
    title: 'Água Sustentável.',
    text: 'Toda a água utilizada em nosso processo de produção provém de um poço artesiano próprio, com controle rigoroso que garante sustentabilidade e altíssima qualidade.',
  },
  {
    icon: RefreshCcw,
    title: 'Upcycling.',
    text: 'Operamos com uma política de reaproveitamento dos excedentes de produção, evitando desperdícios e reforçando o compromisso com uma produção consciente.',
  },
] as const;

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-16 pt-[130px] md:px-8 lg:pb-20 lg:pt-[160px]">
        <div className="pointer-events-none absolute left-[-105px] top-[118px] h-[560px] w-[330px] opacity-45">
          <Image src={sustainabilityAssets.leftOrnament} alt="" fill sizes="330px" className="object-contain" priority />
        </div>

        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
          <div className="relative z-[2]">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/75">Sustentabilidade</p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[920px] font-serifDisplay text-[clamp(3rem,5.85vw,7.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em]">
              Muito Além do Gin: Nosso Compromisso com o Futuro
            </h1>
            <div className="relative mt-7 h-[24px] w-[48px]">
              <Image src={sustainabilityAssets.waves} alt="" fill sizes="48px" className="object-contain" />
            </div>
          </div>

          <div className="relative z-[2] border border-[#d8caa4]/70 bg-[#FFFCF6]/84 p-7 shadow-[0_24px_70px_rgba(54,43,25,0.08)] md:p-10">
            <p className="text-[1.06rem] leading-[1.92] text-beggin-ink/76">{heroText}</p>
            <Link href="/produtos?categoria=refis" className="mt-9 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Conheça nossas opções
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-16 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1380px] overflow-hidden border border-[#d8caa4]/70 bg-[#131413] text-[#FCF7F1] shadow-[0_28px_78px_rgba(19,20,19,0.2)]">
          <div className="grid gap-0 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-[#d7b866]">O Grande Destaque</p>
              <h2 className="mt-6 font-serifDisplay text-[clamp(2.6rem,4.9vw,5.9rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
                Projeto Refil: O Mesmo Gin Premium, com Menos Impacto Ambiental
              </h2>
              <p className="mt-7 max-w-[720px] text-[1.05rem] leading-[1.82] text-[#FCF7F1]/76">
                Uma solução criada para reduzir impacto, ampliar liberdade de consumo e manter a experiência premium que define a BEG Destilaria.
              </p>
            </div>

            <div className="relative min-h-[330px] bg-[#0f100f] lg:min-h-[520px]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/pVYi8eKMpVo"
                title="Projeto Refil Sustentabilidade"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid border-t border-[#d7b866]/25 bg-[#171816] md:grid-cols-2 xl:grid-cols-3">
            {refilHighlights.map((item, index) => (
              <article key={item.title} className="grid min-h-[430px] border-b border-r border-[#d7b866]/18 md:min-h-[470px]">
                <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden bg-[#23241f] p-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 460px"
                    className={`${item.imageMode === 'contain' ? 'object-contain p-10 opacity-95' : 'object-cover opacity-90'} transition duration-700 hover:scale-[1.04]`}
                  />
                  <div className="absolute left-5 top-5 font-serifDisplay text-[10px] font-bold uppercase tracking-[0.22em] text-[#d7b866]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-serifDisplay text-[1.45rem] font-bold uppercase leading-[1.02] tracking-[0.03em] text-[#FCF7F1]">{item.title}</h3>
                  <p className="mt-4 text-[0.98rem] leading-[1.74] text-[#FCF7F1]/72">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[1380px] overflow-hidden border border-[#d8caa4]/70 bg-[#FFFCF6]/82 shadow-[0_24px_70px_rgba(54,43,25,0.065)] lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative min-h-[420px] bg-[#e9e3d2]">
            <Image src={sustainabilityImages.solarPanels} alt="Painéis solares da BEG Destilaria" fill sizes="(max-width: 1024px) 92vw, 650px" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">Respeito à Nossa Terra e Biodiversidade</p>
            <h2 className="mt-5 font-serifDisplay text-[clamp(2.4rem,4.4vw,5.1rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em]">
              Uma destilaria conectada ao território.
            </h2>
            <div className="mt-8 grid gap-5">
              {biodiversityBullets.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 border-t border-[#d8caa4]/65 pt-5">
                    <Icon className="mt-1 shrink-0 text-beggin-red" size={24} strokeWidth={1.7} />
                    <div>
                      <h3 className="font-serifDisplay text-[1.05rem] font-bold uppercase tracking-[0.08em] text-beggin-ink">{item.title}</h3>
                      <p className="mt-2 text-[0.98rem] leading-[1.72] text-beggin-ink/72">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 pb-20 md:px-8 lg:pb-24">
        <div className="mx-auto max-w-[1380px] border-y border-[#d8caa4]/70 py-12 text-center">
          <Sprout className="mx-auto text-beggin-red" size={34} strokeWidth={1.55} />
          <h2 className="mx-auto mt-6 max-w-[900px] font-serifDisplay text-[clamp(2.4rem,4.2vw,4.9rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">
            Produzir melhor também é escolher melhor.
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-[1.03rem] leading-[1.85] text-beggin-ink/72">
            Da escolha dos botânicos ao envase, da energia limpa aos refis, cada etapa reforça o compromisso da BEG com qualidade, consciência e futuro.
          </p>
          <Link href="/produtos?categoria=refis" className="mt-9 inline-flex items-center gap-3 bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
            Conheça os refis
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
