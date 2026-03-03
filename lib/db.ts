'use server';
import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let db: NeonQueryFunction<false, false> | null = null;

function initDb(): NeonQueryFunction<false, false> {
  if (db) return db;
  db = neon(process.env.STORAGE_DATABASE_URL);
  return db;
}

export async function getProducts() {
  if (!db) {
    initDb();
  }

  const products = await db`SELECT * FROM products`;
  return products;
}

export async function getFeaturedProducts() {
  if (!db) {
    initDb();
  }

  const featuredProducts =
    await db`SELECT * FROM products WHERE featured IS TRUE`;
  return featuredProducts;
}
