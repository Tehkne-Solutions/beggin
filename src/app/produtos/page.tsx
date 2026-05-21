import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductsPageHero } from '@/components/products/ProductsPageHero';
import { ProductBenefitsStrip } from '@/components/products/ProductBenefitsStrip';
import { ProductCategoryTabs } from '@/components/products/ProductCategoryTabs';
import { ProductGrid } from '@/components/products/ProductGrid';
import type { ProductCategory } from '@/data/products';
import { productCategories, products } from '@/data/products';

type ProductsPageProps = {
  searchParams?: Promise<{ categoria?: string }>;
};

function isProductCategory(value: string | undefined): value is ProductCategory {
  return productCategories.some((category) => category.id === value);
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = isProductCategory(params?.categoria) ? params.categoria : 'todos';
  const filteredProducts = category === 'todos' ? products : products.filter((product) => product.category === category);

  return (
    <main className="min-h-screen bg-[#FDF9F1] text-beggin-ink">
      <Header />
      <ProductsPageHero />

      <section className="paper-texture bg-[#FDF9F1] px-5 py-14 md:px-8 lg:py-18">
        <div className="mx-auto max-w-[1500px]">
          <ProductCategoryTabs categories={productCategories} activeCategory={category} />
          <div className="mt-9">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <ProductBenefitsStrip />
      <Footer />
    </main>
  );
}
