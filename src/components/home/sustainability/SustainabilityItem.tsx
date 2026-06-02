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
      className="group relative flex min-h-[350px] flex-col items-center justify-start border border-[#b9a875]/35 bg-[#fdf9f1]/42 px-6 py-7 text-center shadow-[0_18px_42px_rgba(54,43,25,0.045)] transition duration-300 sm:px-8 lg:min-h-[360px] xl:min-h-[370px]"
    >
      <div className="relative mb-7 h-[150px] w-full max-w-[250px] overflow-hidden border border-[#b9a875]/30 bg-[#fdf9f1]/65 sm:h-[165px] sm:max-w-[270px] lg:h-[160px] xl:h-[170px] 2xl:h-[140px] 2xl:max-w-[210px]">
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
            sizes="(max-width: 768px) 270px, (max-width: 1536px) 270px, 210px"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        </motion.div>
      </div>

      <h3 className="max-w-[280px] font-serifDisplay text-[1.42rem] font-bold uppercase leading-[1.02] tracking-[-0.015em] text-beggin-ink lg:text-[1.34rem] xl:text-[1.46rem] 2xl:text-[1.18rem]">
        {title}
      </h3>

      <p className="mt-5 max-w-[265px] font-serifDisplay text-[15px] font-semibold leading-[1.28] text-beggin-ink/80 lg:text-[15px] xl:text-[15px] 2xl:text-[14px]">
        {description}
      </p>
    </motion.article>
  );
}
