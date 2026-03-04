"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingBag, Check, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-store"
import { Product } from '@/lib/products';
import { ProductCard } from "@/components/product-card"
import { useState } from "react"

type Props = {
    product: Product;
    products: Product[];
  };
  
export function ProductDetail({ product,products }: Props) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    add(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products
    .filter((p : any) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to store
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl bg-secondary/50">
          <div className="aspect-square p-8 lg:p-12">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full rounded-xl object-cover"
              priority
            />
          </div>
          {product.badge && (
            <Badge className="absolute left-4 top-4">{product.badge}</Badge>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm text-muted-foreground">{product.category}</p>
          <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight lg:text-4xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-semibold">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="mt-6 text-pretty text-base text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {product.specs.map((spec : any) => (
              <div
                key={spec}
                className="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2.5"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span className="text-sm">{spec}</span>
              </div>
            ))}
          </div>

          <Separator className="my-8" />

          <Button
            size="lg"
            className="w-full gap-2 rounded-full"
            onClick={handleAdd}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" />
                Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">2-Year Warranty</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-center">
              <RotateCcw className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-xl font-semibold tracking-tight">You might also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {related.map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}