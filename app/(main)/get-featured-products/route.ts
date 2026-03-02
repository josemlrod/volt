import { products } from '@/lib/products';

export async function GET() {
  const featured = products
    .map((p) => {
      if (p.featured === true) {
        return p;
      }

      return null;
    })
    .filter(Boolean);
  return Response.json({ data: featured });
}
