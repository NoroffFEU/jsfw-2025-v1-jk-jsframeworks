'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6-xl items-center justify-between p-4">
        <Link href="/" className="text-lg font-semibold text-black">
          Online Shop
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/contact" className="text-sm hover:underline text-black">
            Contact
          </Link>
          <Link
            href="/cart"
            className="rounded-md bg-black px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}
