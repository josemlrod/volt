// app/(main)/product/[id]/page.tsx
import { ProductDetail } from "@/components/product-detail";
import { getProducts } from "@/lib/db";
import type { Product } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage({ params, }: { params: Promise<{ id: string }>; }) {
  const { id } = await params;

  const products = (await getProducts()) as Product[];
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} products={products} />;
}