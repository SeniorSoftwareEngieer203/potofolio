"use client";

import Link from "next/link";
import { site } from "@/lib/data";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-0.5 text-lg font-semibold text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
      aria-label={`${site.name} - Home`}
    >
      <span className="font-bold tracking-tight d-block">{site.name}</span>   | 
      <span className="font-medium text-[var(--foreground)]/90">
        {site.title}
      </span>
    </Link>
  );
}
