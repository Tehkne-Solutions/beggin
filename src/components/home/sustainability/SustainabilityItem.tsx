import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

type SustainabilityItemProps = {
  title: string;
  description: string;
  image: string;
  hasDivider?: boolean;
  compact?: boolean;
};

export function SustainabilityItem({
  title,
  description,
  image,
}: SustainabilityItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[420px] flex-col items-center justify-start border border-[#b9a875]/42 bg-[#fdf9f1]/48 px-8 py-9 text-center shadow-[0_18px_42px_rgba(54,43,25,0.045)] transition duration-300 lg:min-h-[430px] xl:min-h-[455px]"
    >
      <div className="relative mb-8 h-[185px] w-full max-w-[315px] overflow-hidden border border-[#b9a875]/35 bg-[#fdf9f1]/70 sm:h-[200px] lg:h-[205px] xl:h-[215px]">
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
            sizes="(max-width: 768px) 315px, (max-width: 1536px) 315px, 315px"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        </motion.div>
      </div>

      <h3 className="max-w-[320px] font-serifDisplay text-[1.72rem] font-bold uppercase leading-[0.98] tracking-[-0.018em] text-beggin-ink lg:text-[1.62rem] xl:text-[1.72rem]">
        {title}
      </h3>

      <p className="mt-6 max-w-[310px] font-serifDisplay text-[17px] font-semibold leading-[1.35] text-beggin-ink/82 lg:text-[16px] xl:text-[17px]">
        {description}
      </p>
    </motion.article>
  );
}
