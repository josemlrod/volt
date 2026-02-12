'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/lib/cart-store';

export function CartView() {
  const { items, update, remove, total, count } = useCart();

  if (items.length === 0) {
    return (
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center lg:px-8'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
          <ShoppingBag className='h-8 w-8 text-muted-foreground' />
        </div>
        <h1 className='mt-6 text-2xl font-semibold tracking-tight'>
          Your cart is empty
        </h1>
        <p className='mt-2 text-muted-foreground'>
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link href='/' className='mt-8'>
          <Button className='gap-2 rounded-full px-8'>
            <ArrowLeft className='h-4 w-4' />
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 lg:px-8'>
      <h1 className='text-2xl font-semibold tracking-tight'>
        Shopping Cart
        <span className='ml-2 text-base font-normal text-muted-foreground'>
          ({count} {count === 1 ? 'item' : 'items'})
        </span>
      </h1>

      <div className='mt-8 grid gap-10 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className='flex flex-col gap-4'>
            {items.map((item) => (
              <div
                key={item.product.id}
                className='flex gap-4 rounded-xl bg-secondary/30 p-4'
              >
                <Link href={`/product/${item.product.id}`}>
                  <Image
                    src={item.product.image || '/placeholder.svg'}
                    alt={item.product.name}
                    width={100}
                    height={100}
                    className='h-24 w-24 shrink-0 rounded-lg bg-secondary object-cover'
                  />
                </Link>
                <div className='flex min-w-0 flex-1 flex-col justify-between'>
                  <div>
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className='text-sm font-medium'>
                        {item.product.name}
                      </h3>
                    </Link>
                    <p className='text-xs text-muted-foreground'>
                      {item.product.category}
                    </p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-7 w-7 rounded-full bg-transparent'
                        onClick={() =>
                          update(item.product.id, item.quantity - 1)
                        }
                      >
                        <Minus className='h-3 w-3' />
                        <span className='sr-only'>Decrease quantity</span>
                      </Button>
                      <span className='w-6 text-center text-sm font-medium'>
                        {item.quantity}
                      </span>
                      <Button
                        variant='outline'
                        size='icon'
                        className='h-7 w-7 rounded-full bg-transparent'
                        onClick={() =>
                          update(item.product.id, item.quantity + 1)
                        }
                      >
                        <Plus className='h-3 w-3' />
                        <span className='sr-only'>Increase quantity</span>
                      </Button>
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='text-sm font-semibold'>
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </span>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='h-7 w-7 text-muted-foreground hover:text-destructive'
                        onClick={() => remove(item.product.id)}
                      >
                        <Trash2 className='h-3.5 w-3.5' />
                        <span className='sr-only'>
                          Remove {item.product.name}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='lg:col-span-1'>
          <div className='rounded-xl border border-border p-6'>
            <h2 className='text-lg font-semibold'>Order Summary</h2>
            <Separator className='my-4' />
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>Shipping</span>
                <span className='text-sm'>Free</span>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>Tax</span>
                <span>${Math.round(total * 0.08).toLocaleString()}</span>
              </div>
            </div>
            <Separator className='my-4' />
            <div className='flex items-center justify-between'>
              <span className='font-semibold'>Total</span>
              <span className='text-lg font-semibold'>
                ${(total + Math.round(total * 0.08)).toLocaleString()}
              </span>
            </div>
            <Link href='/checkout' className='mt-6 block'>
              <Button className='w-full gap-2 rounded-full' size='lg'>
                Checkout
                <ArrowRight className='h-4 w-4' />
              </Button>
            </Link>
            <Link href='/' className='mt-3 block'>
              <Button
                variant='outline'
                className='w-full rounded-full bg-transparent'
                size='lg'
              >
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
