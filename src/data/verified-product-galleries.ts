import type { Product } from '@/data/products';

/**
 * Somente imagens oficialmente confirmadas para cada produto devem entrar aqui.
 * Enquanto uma galeria individual não for recebida, a single utiliza apenas a
 * capa Omie do próprio produto, evitando cruzamento de rótulos.
 */
const verifiedSupplementalImages: Record<string, readonly string[]> = {
  'beg-brazilian-750ml': [],
  'beg-brazilian-gold-edition-750ml': [],
  'beg-brazilian-refil-500ml': [],
  'beg-modern-tropical-750ml': [],
  'beg-modern-tropical-refil-500ml': [],
  'beg-aged-negroni-750ml': [],
  'beg-aged-negroni-refil-500ml': [],
  'beg-aged-negroni-refil-250ml': [],
  'kit-tal-cha-beg-collab': [],
  'hype-gin-750ml': [],
  'hype-vodka-1000ml': [],
  'hype-drop-licor-framboesa-750ml': [],
};

export function getVerifiedProductGallery(
  product: Pick<Product, 'slug' | 'image'>,
): string[] {
  const supplementalImages = verifiedSupplementalImages[product.slug] ?? [];
  return Array.from(new Set([product.image, ...supplementalImages]));
}

export const verifiedProductGallerySlugs = Object.freeze(
  Object.keys(verifiedSupplementalImages),
);
