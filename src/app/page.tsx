"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Solace</h1>
      <Link href="/advocates">
        Go to Advocates
      </Link>
    </div>
  );
}
