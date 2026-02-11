import { Suspense } from 'react';

import { HeroCarousel } from '@/components/hero-carousel';
import { ProductGrid } from '@/components/product-grid';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Suspense>
        <ProductGrid />
      </Suspense>
    </>
  );
}
