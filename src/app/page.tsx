"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Solace</h1>
      <Link href="/advocates">
        Go to Advocates
      </Link>
    </main>
  );
}
