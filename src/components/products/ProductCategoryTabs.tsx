import type { ProductCategory } from '@/data/products';

type ProductCategoryTabsProps = {
  categories: readonly { id: ProductCategory; label: string }[];
  activeCategory?: ProductCategory;
};

export function ProductCategoryTabs({ categories, activeCategory = 'todos' }: ProductCategoryTabsProps) {
  return (
    <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-4 border-b border-beggin-line/70 pb-4">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;
        return (
          <span
            key={category.id}
            className={[
              'relative pb-3 font-serifDisplay text-[12px] font-bold uppercase tracking-[0.16em]',
              isActive ? 'text-beggin-red' : 'text-beggin-ink',
            ].join(' ')}
          >
            {category.label}
            <span className={['absolute bottom-0 left-0 h-px bg-beggin-red', isActive ? 'w-full opacity-100' : 'w-0 opacity-0'].join(' ')} />
          </span>
        );
      })}
    </div>
  );
}
