import { Suspense } from 'react';

import { HeroCarousel } from '@/components/hero-carousel';
import { ProductGrid } from '@/components/product-grid';

export default async function Home() {
  const getFeaturedProductsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/get-featured-products`,
    {
      method: 'GET',
    },
  );
  const { data: featured } = await getFeaturedProductsResponse.json();

  const allProductsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/all-products`,
    {
      method: 'GET',
    },
  );
  const { data: allProducts } = await allProductsResponse.json();

  return (
    <>
      <HeroCarousel featured={featured} />
      <Suspense>
        <ProductGrid products={allProducts} />
      </Suspense>
    </>
  );
}
