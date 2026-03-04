import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="mx-auto max-w-xl p-4 text-center">
      <h1 className="text-2xl font-semibold">Order Confirmed</h1>
      <p className="mt-2 text-gray-600">
        Thanks! Your checkout was successful.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
      >
        Back to shop
      </Link>
    </main>
  );
}
