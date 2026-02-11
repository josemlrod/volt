'use client';
import { useSyncExternalStore, useCallback } from 'react';
import type { Product } from './products';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
};

let store: CartStore = { items: [] };
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function getSnapshot(): CartItem[] {
  return store.items;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addToCart(product: Product) {
  const existing = store.items.find((i) => i.product.id === product.id);
  if (existing) {
    store = {
      items: store.items.map((i) =>
        i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    };
  } else {
    store = { items: [...store.items, { product, quantity: 1 }] };
  }
  emitChange();
}

export function removeFromCart(productId: string) {
  store = { items: store.items.filter((i) => i.product.id !== productId) };
  emitChange();
}

export function updateQuantity(productId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  store = {
    items: store.items.map((i) =>
      i.product.id === productId ? { ...i, quantity } : i,
    ),
  };
  emitChange();
}

export function clearCart() {
  store = { items: [] };
  emitChange();
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
}

export function getCartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, () => []);

  const add = useCallback((product: Product) => addToCart(product), []);
  const remove = useCallback(
    (productId: string) => removeFromCart(productId),
    [],
  );
  const update = useCallback(
    (productId: string, quantity: number) =>
      updateQuantity(productId, quantity),
    [],
  );
  const clear = useCallback(() => clearCart(), []);
  const total = getCartTotal(items);
  const count = getCartCount(items);

  return { items, add, remove, update, clear, total, count };
}
