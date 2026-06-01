import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative flex min-h-[292px] flex-col items-center justify-start px-6 text-center transition duration-300 sm:px-8 lg:px-6 xl:px-8',
        hasDivider
          ? 'border-b border-[#b9a875]/25 pb-9 lg:border-b-0 lg:border-r lg:border-[#b9a875]/45 lg:pb-0'
          : '',
      ].join(' ')}
    >
      <div className="relative mb-6 h-[136px] w-[190px] overflow-hidden border border-[#b9a875]/25 bg-[#fdf9f1]/45 sm:h-[146px] sm:w-[210px] lg:h-[126px] lg:w-[176px] xl:h-[142px] xl:w-[204px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 210px, 204px"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        </motion.div>
      </div>

      <h3 className="font-serifDisplay text-[1.32rem] font-bold uppercase leading-[1.02] tracking-[-0.012em] text-beggin-ink lg:text-[1.16rem] xl:text-[1.28rem]">
        {title}
      </h3>

      <p className="mt-5 max-w-[230px] font-serifDisplay text-[15px] font-semibold leading-[1.22] text-beggin-ink/80 lg:text-[14px] xl:text-[15px]">
        {description}
      </p>

      {hasDivider ? (
        <span className="pointer-events-none absolute right-0 top-0 h-full w-px origin-top scale-y-0 bg-beggin-ink/15 transition-transform duration-700 ease-out group-hover:scale-y-100" />
      ) : null}
    </motion.article>
  );
}
