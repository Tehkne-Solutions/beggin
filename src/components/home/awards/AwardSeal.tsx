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
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{ height: sealSize, width: sealSize }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          sizes={sizeStr}
        />
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_38%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>
    </article>
  );
}
