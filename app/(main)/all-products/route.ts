import { getProducts } from '@/lib/db';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const page = Number(queryParams.get('page'));
  const itemsPerPage = Number(queryParams.get('itemsPerPage'));
  const category = queryParams.get('category');

  const products = await getProducts();
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  const totalPages = filtered.length / itemsPerPage;

  const start = page * itemsPerPage - itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedProducts = filtered.slice(start, end);

  return Response.json({
    data: paginatedProducts,
    totalPages,
    currentPage: page,
  });
}
