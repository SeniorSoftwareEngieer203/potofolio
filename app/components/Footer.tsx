import Link from "next/link";
import { site, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)]/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-[var(--accent)]">
              Available for freelance / contract
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Worked with global brands · Remote
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 border-t border-[var(--border)] pt-8 text-sm text-[var(--muted)] md:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
