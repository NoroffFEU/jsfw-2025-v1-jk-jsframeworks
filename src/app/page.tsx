import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/lib/api';

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main className="mx-auto max-w-6-xl p-4">
      <h1 className="text-2xl font-semibold">Online Shop</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
