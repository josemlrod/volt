import type { Metadata } from 'next';
import { CheckoutView } from '@/components/checkout-view';

export const metadata: Metadata = {
  title: 'Checkout — VOLT',
  description: 'Complete your order.',
};

export default function Checkout() {
  return <CheckoutView />;
}
