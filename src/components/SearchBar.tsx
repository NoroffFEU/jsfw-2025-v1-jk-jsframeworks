'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/lib/types';

type Props = {
  products: Product[];
};

export default function SearchBar({ products }: Props) {
  const [query, setQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative mt-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md border p-2"
      />

      {query && (
        <div className="absolute z-19 mt-2 w-full rounded-md border bg-white shadow-md text-black">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 6).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {product.title}
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
  );
}
