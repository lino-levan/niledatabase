"use client";
import Link from "next/link";

export function Links({ className }: { className?: string }) {
  return (
    <>
      <Link className={className} href="/docs">
        Docs
      </Link>
      <Link href="/about-us" className={`whitespace-nowrap ${className}`}>
        About Us
      </Link>
      <Link className={className} href="/community">
        Community
      </Link>
      <Link className={className} href="/blog">
        Blog
      </Link>
      <Link className={className} href="/templates">
        Templates
      </Link>
      <Link className={className} href="/pricing">
        Pricing
      </Link>
    </>
  );
}
