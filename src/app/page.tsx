'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Welcome to Solace
      </h1>
      <Link
        href="/advocates"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-200"
      >
        View Advocates
      </Link>
    </main>
  );
}
