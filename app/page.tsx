export const dynamic = 'force-dynamic';

import { Suspense } from 'react';

import { HeroCarousel } from '@/components/hero-carousel';
import { ProductGrid } from '@/components/product-grid';

const DOMAIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export default async function Home() {
  const getFeaturedProductsResponse = await fetch(
    `${DOMAIN}/get-featured-products`,
    {
      method: 'GET',
    },
  );
  const { data: featured } = await getFeaturedProductsResponse.json();

  // TODO:
  // implement UI to paginate
  // replace static values here
  const allProductsResponse = await fetch(
    `${DOMAIN}/all-products?page=1&itemsPerPage=25`,
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
