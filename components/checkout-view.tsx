'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Lock, ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/lib/cart-store';

export function CheckoutView() {
  const { items, total, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const tax = Math.round(total * 0.08);
  const grandTotal = total + tax;

  if (items.length === 0 && !submitted) {
    return (
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center lg:px-8'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-secondary'>
          <ShoppingBag className='h-8 w-8 text-muted-foreground' />
        </div>
        <h1 className='mt-6 text-2xl font-semibold tracking-tight'>
          Nothing to checkout
        </h1>
        <p className='mt-2 text-muted-foreground'>
          Add items to your cart first.
        </p>
        <Link href='/' className='mt-8'>
          <Button className='gap-2 rounded-full px-8'>
            <ArrowLeft className='h-4 w-4' />
            Browse Products
          </Button>
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-32 text-center lg:px-8'>
        <div className='flex h-20 w-20 items-center justify-center rounded-full bg-foreground'>
          <Check className='h-8 w-8 text-background' />
        </div>
        <h1 className='mt-6 text-2xl font-semibold tracking-tight'>
          Order Confirmed
        </h1>
        <p className='mt-2 max-w-sm text-muted-foreground'>
          Thank you for your order. You will receive a confirmation email
          shortly.
        </p>
        <Link href='/' className='mt-8'>
          <Button className='gap-2 rounded-full px-8'>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clear();
    setSubmitted(true);
  };

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 lg:px-8'>
      <Link
        href='/cart'
        className='inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
      >
        <ArrowLeft className='h-3.5 w-3.5' />
        Back to cart
      </Link>

      <h1 className='mt-6 text-2xl font-semibold tracking-tight'>Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className='mt-8 grid gap-10 lg:grid-cols-3'>
          <div className='flex flex-col gap-8 lg:col-span-2'>
            <section>
              <h2 className='text-lg font-semibold'>Contact Information</h2>
              <div className='mt-4 grid gap-4 md:grid-cols-2'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='you@example.com'
                    required
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+1 (555) 000-0000'
                  />
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className='text-lg font-semibold'>Shipping Address</h2>
              <div className='mt-4 grid gap-4'>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Input id='firstName' placeholder='Jane' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input id='lastName' placeholder='Doe' required />
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input id='address' placeholder='123 Main St' required />
                </div>
                <div className='grid gap-4 md:grid-cols-3'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='city'>City</Label>
                    <Input id='city' placeholder='San Francisco' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='state'>State</Label>
                    <Input id='state' placeholder='CA' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='zip'>ZIP Code</Label>
                    <Input id='zip' placeholder='94102' required />
                  </div>
                </div>
              </div>
            </section>

            <Separator />

            <section>
              <h2 className='text-lg font-semibold'>Payment</h2>
              <div className='mt-4 grid gap-4'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='card'>Card Number</Label>
                  <Input id='card' placeholder='4242 4242 4242 4242' required />
                </div>
                <div className='grid gap-4 md:grid-cols-3'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='expiry'>Expiration</Label>
                    <Input id='expiry' placeholder='MM / YY' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='cvc'>CVC</Label>
                    <Input id='cvc' placeholder='123' required />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='cardName'>Name on Card</Label>
                    <Input id='cardName' placeholder='Jane Doe' required />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className='lg:col-span-1'>
            <div className='sticky top-24 rounded-xl border border-border p-6'>
              <h2 className='text-lg font-semibold'>Order Summary</h2>
              <div className='mt-4 flex flex-col gap-3'>
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className='flex items-center gap-3'
                  >
                    <Image
                      src={item.product.image || '/placeholder.svg'}
                      alt={item.product.name}
                      width={48}
                      height={48}
                      className='h-12 w-12 shrink-0 rounded-lg bg-secondary object-cover'
                    />
                    <div className='min-w-0 flex-1'>
                      <p className='truncate text-sm font-medium'>
                        {item.product.name}
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <span className='shrink-0 text-sm font-medium'>
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <Separator className='my-4' />
              <div className='flex flex-col gap-2 text-sm'>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-muted-foreground'>Tax</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
              </div>
              <Separator className='my-4' />
              <div className='flex items-center justify-between'>
                <span className='font-semibold'>Total</span>
                <span className='text-lg font-semibold'>
                  ${grandTotal.toLocaleString()}
                </span>
              </div>
              <Button
                type='submit'
                className='mt-6 w-full gap-2 rounded-full'
                size='lg'
              >
                <Lock className='h-4 w-4' />
                Place Order
              </Button>
              <p className='mt-3 text-center text-xs text-muted-foreground'>
                Your payment information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
