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
      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'group relative flex min-h-[250px] flex-col items-center justify-start px-8 text-center transition duration-300',
        hasDivider
          ? 'border-b border-[#b9a875]/25 pb-8 lg:border-b-0 lg:border-r lg:border-[#b9a875]/45 lg:pb-0'
          : '',
      ].join(' ')}
    >
      <div className="relative mb-5 h-[124px] w-[172px] overflow-hidden border border-[#b9a875]/25 bg-[#fdf9f1]/45">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="172px"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </motion.div>
      </div>

      <h3 className="font-serifDisplay text-[19px] font-bold uppercase leading-[1.02] tracking-[-0.01em] text-beggin-ink">
        {title}
      </h3>

      <p className="mt-5 max-w-[190px] font-serifDisplay text-[16px] font-semibold leading-[1.12] text-beggin-ink/78">
        {description}
      </p>

      {hasDivider ? (
        <span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-beggin-ink/15 origin-top scale-y-0 transition-transform duration-700 ease-out group-hover:scale-y-100" />
      ) : null}
    </motion.article>
  );
}
