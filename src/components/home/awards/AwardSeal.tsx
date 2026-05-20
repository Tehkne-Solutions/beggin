import Image from 'next/image';

interface AwardSealProps {
  title: string;
  image: string;
  index: number;
}

const sealSize = 160;
const sizeStr = `${sealSize}px`;

export function AwardSeal({ title, image }: AwardSealProps) {
  return (
    <article className="group relative flex shrink-0 items-center justify-center">
      <div
        className="relative h-full w-full"
        style={{ height: sealSize, width: sealSize }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes={sizeStr}
        />
      </div>
    </article>
  );
}
