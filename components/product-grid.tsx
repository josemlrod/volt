'use client';
import { useState } from 'react';
import { products, categories } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function ProductGrid() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [active, setActive] = useState(categoryParam || 'All');

  useEffect(() => {
    if (categoryParam) {
      setActive(categoryParam);
    }
  }, [categoryParam]);

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
            onClick={() => setActive(cat)}
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
