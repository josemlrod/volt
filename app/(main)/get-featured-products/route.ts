import { getFeaturedProducts } from '@/lib/db';

export async function GET() {
  const featured = await getFeaturedProducts();
  return Response.json({ data: featured });
}
