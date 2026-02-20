'use client';
import { useState, useEffect } from 'react';
import { categories, Product } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get('category');
  const [active, setActive] = useState(categoryParam || 'All');

  // Sincronizar estado con la URL cuando cambia
  useEffect(() => {
    const category = categoryParam || 'All';
    setActive(category);
  }, [categoryParam, pathname]);

  const handleCategoryClick = (category: string) => {
    setActive(category);
    if (category === 'All') {
      router.push('/');
    } else {
      router.push(`/?category=${category}`);
    }
  };

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section className='mx-auto max-w-7xl px-4 py-16 lg:px-8'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold tracking-tight'>All Products</h2>
      </div>

      <div className='mt-6 flex flex-wrap items-center gap-2'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-foreground text-background'
                : 'bg-secondary text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6'>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className='mt-12 text-center text-muted-foreground'>
          No products found in this category.
        </p>
      )}
    </section>
  );
}
