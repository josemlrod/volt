export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import { PaginationPage } from '@/components/pagination';
import { HeroCarousel } from '@/components/hero-carousel';
import { ProductGrid } from '@/components/product-grid';
import { products } from '@/lib/products';

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
    `${DOMAIN}/all-products?page=1&itemsPerPage=4`,
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
        <PaginationPage currentPage={1} totalPages={10} basePath='/'/>
      </Suspense>
    </>
  );
}
