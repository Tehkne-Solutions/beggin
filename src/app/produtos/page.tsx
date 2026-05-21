import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductsPageHero } from '@/components/products/ProductsPageHero';
import { ProductBenefitsStrip } from '@/components/products/ProductBenefitsStrip';
import { ProductCategoryTabs } from '@/components/products/ProductCategoryTabs';
import { ProductGrid } from '@/components/products/ProductGrid';
import { productCategories, products } from '@/data/products';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FDF9F1] text-beggin-ink">
      <Header />
      <ProductsPageHero />

      <section className="paper-texture bg-[#FDF9F1] px-5 py-14 md:px-8 lg:py-18">
        <div className="mx-auto max-w-[1500px]">
          <ProductCategoryTabs categories={productCategories} activeCategory="todos" />
          <div className="mt-9">
            <ProductGrid products={products} />
          </div>
        </div>
      </section>

      <ProductBenefitsStrip />
      <Footer />
    </main>
  );
}
