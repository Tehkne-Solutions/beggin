import Image from 'next/image';
import clsx from 'clsx';

type BrandLogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function BrandLogo({ variant = 'dark', className }: BrandLogoProps) {
  return (
    <Image
      src="/images/brand/logo-official.webp"
      alt="BEG Boutique Distillery"
      width={672}
      height={835}
      sizes="(max-width: 768px) 125px, 155px"
      className={clsx('h-auto object-contain', variant === 'light' && 'brightness-0 invert', className)}
    />
  );
}
