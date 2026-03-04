'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/ProductCard';

type SortOption =
  | 'default'
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'title-asc';

export default function ProductBrowser({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('default');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => p.title.toLowerCase().includes(q));
  }, [products, query]);

  const sorted = useMemo(() => {
    const arr = [...filtered];

    const priceToUse = (p: Product) =>
      p.discountedPrice < p.price ? p.discountedPrice : p.price;
    switch (sort) {
      case 'price-asc':
        arr.sort((a, b) => priceToUse(a) - priceToUse(b));
        break;
      case 'price-desc':
        arr.sort((a, b) => priceToUse(b) - priceToUse(a));
        break;
      case 'rating-desc':
        arr.sort((a, b) => b.rating - a.rating);
        break;
      case 'title-asc':
        arr.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    return arr;
  }, [filtered, sort]);

  const dropdownMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) => p.title.toLowerCase().includes(q))
      .slice(0, 6);
  }, [products, query]);
  return (
    <>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-md border p-2"
          />

          {query.trim() && (
            <div className="absolute z-20 mt-2 w-full rounded-md border bg-white shadow-md">
              {dropdownMatches.length > 0 ? (
                dropdownMatches.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-black"
                  >
                    {p.title}
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No products found
                </div>
              )}
            </div>
          )}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="w-full rounded-md border p-2"
        >
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating-desc">Rating: High → Low</option>
          <option value="title-asc">Title: A → Z</option>
        </select>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
