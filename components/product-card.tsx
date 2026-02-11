'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';
import { useCart } from '@/lib/cart-store';

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className='group relative flex flex-col'>
      <Link
        href={`/product/${product.id}`}
        className='relative overflow-hidden rounded-xl bg-secondary/50'
      >
        <div className='aspect-square p-6'>
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={400}
            height={400}
            className='h-full w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        {product.badge && (
          <span className='absolute left-3 top-3 rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-medium text-background'>
            {product.badge}
          </span>
        )}
      </Link>
      <div className='mt-4 flex items-start justify-between'>
        <div className='min-w-0 flex-1'>
          <p className='text-xs text-muted-foreground'>{product.category}</p>
          <Link href={`/product/${product.id}`}>
            <h3 className='mt-0.5 truncate text-sm font-medium transition-colors hover:text-muted-foreground'>
              {product.name}
            </h3>
          </Link>
          <div className='mt-1 flex items-center gap-2'>
            <span className='text-sm font-semibold'>
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className='text-xs text-muted-foreground line-through'>
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        <Button
          variant='outline'
          size='icon'
          className='mt-1 h-8 w-8 shrink-0 rounded-full bg-transparent'
          onClick={() => add(product)}
        >
          <Plus className='h-3.5 w-3.5' />
          <span className='sr-only'>Add {product.name} to cart</span>
        </Button>
      </div>
    </div>
  );
}
