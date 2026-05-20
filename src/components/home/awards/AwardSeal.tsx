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
    <article className="group relative flex h-[160px] w-[160px] items-center justify-center">
      <motion.div
        className="relative h-full w-full"
        style={{ height: sealSize, width: sealSize }}
        variants={sealVariants}
        whileHover={{
          y: -6,
          scale: 1.025,
          rotate: 1,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes={sizeStr}
        />
      </motion.div>
    </article>
  );
}
