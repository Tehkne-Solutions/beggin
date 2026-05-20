import Image from 'next/image';

type SustainabilityItemProps = {
  title: string;
  description: string;
  image: string;
  hasDivider?: boolean;
};

export function SustainabilityItem({
  title,
  description,
  image,
  hasDivider = true,
}: SustainabilityItemProps) {
  return (
    <article
      className={[
        'relative flex min-h-[250px] flex-col items-center justify-start px-8 text-center',
        hasDivider
          ? 'border-b border-[#b9a875]/25 pb-8 lg:border-b-0 lg:border-r lg:border-[#b9a875]/45 lg:pb-0'
          : '',
      ].join(' ')}
    >
      <div className="relative mb-5 h-[118px] w-[150px]">
        <Image
          src={image}
          alt=""
          fill
          sizes="150px"
          className="object-contain"
        />
      </div>

      <h3 className="font-serifDisplay text-[19px] font-bold uppercase leading-[1.02] tracking-[-0.01em] text-beggin-ink">
        {title}
      </h3>

      <p className="mt-5 max-w-[190px] font-serifDisplay text-[16px] font-semibold leading-[1.12] text-beggin-ink/78">
        {description}
      </p>
    </article>
  );
}
