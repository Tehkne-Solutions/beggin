import type { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductGrid(props: { products: Product[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {props.products.map((product, index) => (
        <ProductCard key={product.slug} product={product} index={index} />
      ))}
    </div>
  );
}
