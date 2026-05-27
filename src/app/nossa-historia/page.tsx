import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { heroAssets } from '@/data/hero-assets';
import { storyAssets } from '@/data/story';

export const metadata: Metadata = {
  title: 'Nossa História | BEG Destilaria',
  description: 'Conheça a trajetória da BEG Destilaria, da paixão de quatro amigos pela destilação à produção artesanal brasileira em Campinas.',
};

const botanicals = [
  'Semente de coentro',
  'Sabugueiro do Brasil',
  'Raiz de angélica',
  'Mexerica pokan',
  'Limão Taiti',
  'Laranja lima',
  'Folha de pitangueira',
  'Cardamomo',
  'Capim santo',
  'Canela',
  'Blue pea',
  'Zimbro',
];

export default function NossaHistoriaPage() {
  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />

      <section className="paper-texture relative overflow-hidden bg-[#FCF7F1] px-5 pb-16 pt-[120px] md:px-8 lg:pb-20 lg:pt-[150px]">
        <div className="pointer-events-none absolute left-[-110px] top-[110px] h-[430px] w-[330px] opacity-35">
          <Image src={storyAssets.botanicalLeft} alt="" fill priority sizes="330px" className="object-contain" />
        </div>
        <div className="pointer-events-none absolute right-[-120px] top-[90px] h-[280px] w-[430px] opacity-25">
          <Image src={heroAssets.cloudsTop} alt="" fill priority sizes="430px" className="object-contain" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">
          <div>
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.34em] text-beggin-ink/80">
              Nossa História
            </p>
            <div className="mt-5 h-px w-20 bg-beggin-gold/70" />
            <h1 className="mt-8 max-w-[760px] font-serifDisplay text-[clamp(3.3rem,6.2vw,7.2rem)] font-semibold uppercase leading-[0.84] tracking-[-0.055em] text-beggin-ink">
              Conheça a história da BEG Destilaria.
            </h1>
            <div className="relative mt-8 h-[30px] w-[62px] wave-pulse">
              <Image src={heroAssets.waves} alt="" fill priority sizes="62px" className="object-contain" />
            </div>
          </div>

          <div className="relative min-h-[360px] border border-[#c7b889]/60 bg-[#FFFCF6]/60 p-4 shadow-[0_24px_70px_rgba(54,43,25,0.08)] lg:min-h-[470px]">
            <Image src={storyAssets.photoRight} alt="BEG Destilaria em coquetelaria" fill priority sizes="(max-width: 1024px) 92vw, 650px" className="object-cover p-4" />
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FDF9F1] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <div className="relative h-[28px] w-[58px] wave-pulse">
                <Image src={heroAssets.waves} alt="" fill sizes="58px" className="object-contain" />
              </div>
              <h2 className="mt-5 font-serifDisplay text-[clamp(2.6rem,4.2vw,4.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.045em]">
                Nossa
                <br />
                História
              </h2>
            </div>
            <div className="space-y-5 text-[1.02rem] leading-[1.85] text-beggin-ink/75">
              <p>
                A jornada da BEG Destilaria começou em 2012, quando quatro amigos, unidos por sua paixão por destilados, decidiram explorar o universo das bebidas destiladas. Essa aventura marcou o ponto de partida para algo verdadeiramente especial e pioneiro no país.
              </p>
              <p>
                Ao longo dessa jornada, acumulamos mais de 80 medalhas, sendo 9 delas conquistadas apenas em 2023. Conquistamos premiações a nível nacional e internacional, como o San Francisco World Spirits Competition e o World Gin Awards, que destacam a excelência dos nossos produtos.
              </p>
              <p>
                Sabemos que um produto BEG é facilmente reconhecível pela sua qualidade superior, pelo design exclusivo e pelo cuidado artesanal com que é produzido. Nossa dedicação aos detalhes e o uso de tecnologia de destilação de ponta se unem para criar bebidas verdadeiramente especiais.
              </p>
              <p className="font-serifDisplay text-[1.12rem] font-bold text-beggin-ink">
                Você sabe que o BEG só de pegar na mão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FCF7F1] px-5 py-16 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[360px] border border-[#c7b889]/65 bg-[#FFFCF6] p-3 shadow-[0_20px_54px_rgba(54,43,25,0.08)]">
            <Image src={storyAssets.photoLeft} alt="Destilaria BEG" fill sizes="(max-width: 1024px) 92vw, 560px" className="object-cover p-3" />
          </div>
          <div>
            <p className="font-serifDisplay text-[11px] font-bold uppercase tracking-[0.32em] text-beggin-red">A Destilaria</p>
            <h2 className="mt-4 font-serifDisplay text-[clamp(2.7rem,4.5vw,5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Produção artesanal em pequenos lotes.
            </h2>
            <p className="mt-7 text-[1.02rem] leading-[1.85] text-beggin-ink/74">
              A BEG Destilaria está localizada no charmoso e bucólico distrito de Joaquim Egídio, em Campinas-SP. Uma antiga sede tombada de uma fazenda de café, construída em meados do século XIX, foi cuidadosamente revitalizada pela BEG com o intuito de proporcionar uma experiência inesquecível para nossos clientes.
            </p>
            <Link href="https://agendamento.beggin.com.br" target="_blank" rel="noreferrer" className="mt-8 inline-flex bg-beggin-red px-7 py-4 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-beggin-ink">
              Conheça a Beg Experience
            </Link>
          </div>
        </div>
      </section>

      <section className="paper-texture bg-[#FDF9F1] px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[900px]">
            <h2 className="font-serifDisplay text-[clamp(2.7rem,4.6vw,5.2rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
              Botânicos
              <br />
              BEG
            </h2>
            <p className="mt-7 text-[1.02rem] leading-[1.85] text-beggin-ink/74">
              Na BEG Destilaria, dedicamos cuidadosa atenção à seleção de botânicos que compõem nossos produtos. A essência britânica é meticulosamente recriada com zimbro, semente de coentro e raiz de angélica, proporcionando o caráter seco e as notas frutadas típicas de um London Dry clássico.
            </p>
            <p className="mt-5 text-[1.02rem] leading-[1.85] text-beggin-ink/74">
              Contudo, nossa paixão pelo Brasil se manifesta nos botânicos exclusivos, como as folhas de pitangueira, que conferem notas picantes e cítricas, e o sabugueiro-do-Brasil, que contribui com suaves toques florais e doces.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {botanicals.map((item) => (
              <div key={item} className="border border-[#c7b889]/50 bg-[#FFFCF6] px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-beggin-gold/80">
                <div className="mx-auto mb-4 h-14 w-14 rounded-full border border-[#c7b889]/70 bg-[#DFDEC9]" />
                <p className="font-serifDisplay text-[1.05rem] font-bold text-beggin-ink">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-[680px] text-[1.02rem] leading-[1.85] text-beggin-ink/74">
            <p>
              Handcrafted é o termo utilizado para se referir à produção que prioriza um processo manual e personalizado. A BEG Destilaria preza pela produção humanizada de seus produtos, cada receita é verificada manualmente para garantir os mais altos padrões de sabor e qualidade.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
