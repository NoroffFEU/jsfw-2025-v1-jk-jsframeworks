import { Product } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_API_BASE_URL in .env.local');
}

// fetch all products
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/online-shop`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

// fetch single product with id
export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`${BASE_URL}/online-shop/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}
