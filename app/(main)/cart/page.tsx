import type { Metadata } from 'next';
import { CartView } from '@/components/cart-view';

export const metadata: Metadata = {
  title: 'Cart — VOLT',
  description: 'Review your cart and proceed to checkout.',
};

export default function Cart() {
  return <CartView />;
}
