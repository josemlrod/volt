import { products } from '@/lib/products';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = url.searchParams;

  const page = Number(queryParams.get('page'));
  const itemsPerPage = Number(queryParams.get('itemsPerPage'));

  const totalPages = products.length / itemsPerPage;

  const start = page * itemsPerPage - itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedProducts = products.slice(start, end);

  return Response.json({
    data: paginatedProducts,
    totalPages,
    currentPage: page,
  });
}
