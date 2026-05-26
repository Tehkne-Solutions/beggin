import { Headphones, Leaf, LockKeyhole, PackageCheck, Truck } from 'lucide-react';

const benefits = [
  {
    title: 'Frete grátis',
    description: 'Acima de R$150 para a cidade de São Paulo',
    Icon: Truck,
  },
  {
    title: 'Compra segura',
    description: 'Ambiente 100% protegido',
    Icon: LockKeyhole,
  },
  {
    title: 'Destilação em pequenos lotes',
    description: 'Qualidade e atenção em cada detalhe',
    Icon: PackageCheck,
  },
  {
    title: 'Botânicos selecionados',
    description: 'Ingredientes naturais de origem responsável',
    Icon: Leaf,
  },
  {
    title: 'Atendimento especializado',
    description: 'Estamos prontos para ajudar você',
    Icon: Headphones,
  },
] as const;

export function ProductBenefitsStrip() {
  return (
    <section className="paper-texture relative overflow-hidden bg-[#131413] px-5 py-10 text-[#f4efe3] md:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {benefits.map(({ title, description, Icon }, index) => (
          <article
            key={title}
            className={[
              'flex flex-col items-center px-6 text-center',
              index !== benefits.length - 1 ? 'lg:border-r lg:border-[#b9a875]/35' : '',
            ].join(' ')}
          >
            <Icon size={34} strokeWidth={1.35} className="mb-4 text-[#c8a759]" />
            <h2 className="font-serifDisplay text-[14px] font-bold uppercase tracking-[0.12em]">
              {title}
            </h2>
            <p className="mt-2 max-w-[190px] text-[13px] leading-[1.35] text-[#f4efe3]/72">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
