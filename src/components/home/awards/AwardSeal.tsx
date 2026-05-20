import Image from 'next/image';
import { motion } from 'framer-motion';

interface AwardSealProps {
  title: string;
  image: string;
  index: number;
}

const sealSize = 160;
const sizeStr = `${sealSize}px`;

export function AwardSeal({ title, image }: AwardSealProps) {
  const sealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.article
      className="group relative flex shrink-0 items-center justify-center"
      whileHover={{ y: -8, scale: 1.035, rotate: 0.8 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{ height: sealSize, width: sealSize }}
        variants={sealVariants}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes={sizeStr}
        />
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      </motion.div>
    </motion.article>
  );
}
