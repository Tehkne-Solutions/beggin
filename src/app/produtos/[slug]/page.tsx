import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductBenefitsStrip } from '@/components/products/ProductBenefitsStrip';
import { ProductDescriptionTabs } from '@/components/products/ProductDescriptionTabs';
import { ProductEssenceSection } from '@/components/products/ProductEssenceSection';
import { ProductSingleHero } from '@/components/products/ProductSingleHero';
import { ProductSpecsStrip } from '@/components/products/ProductSpecsStrip';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { getProductBySlug, getRelatedProducts, products } from '@/data/products';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produto não encontrado | BEG Destilaria',
    };
  }

  return {
    title: `${product.name} | BEG Destilaria`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 4);

  return (
    <main className="min-h-screen bg-[#FCF7F1] text-beggin-ink">
      <Header />
      <ProductSingleHero product={product} />
      <ProductEssenceSection product={product} />
      <ProductSpecsStrip product={product} />
      <ProductDescriptionTabs product={product} />
      <RelatedProducts products={relatedProducts} />
      <ProductBenefitsStrip />
      <Footer />
    </main>
  );
}
