// app/(main)/product/[id]/page.tsx
import { ProductDetail } from "@/components/product-detail";
import { getProducts } from "@/lib/db";
import type { Product } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products = (await getProducts()) as Product[];
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    throw new Error("Product not found");
  }

  return <ProductDetail product={product} products={products} />;
}