import Image from 'next/image';
import { motion } from 'framer-motion';

interface AwardSealProps {
  title: string;
  image: string;
  index: number;
}

const sealSizes = {
  0: { h: 170, w: 170 },
  1: { h: 170, w: 170 },
  2: { h: 165, w: 165 },
  3: { h: 165, w: 165 },
};

export function AwardSeal({ title, image, index }: AwardSealProps) {
  const size = sealSizes[index as keyof typeof sealSizes] || { h: 170, w: 170 };
  const sizeStr = `${size.h}px`;

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
    <article className="group relative flex min-h-[190px] items-center justify-center">
      <motion.div
        className="relative"
        style={{ height: size.h, width: size.w }}
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
