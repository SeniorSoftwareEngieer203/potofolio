"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { Section } from "../components/Section";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form backend (e.g. Formspree, Netlify Forms, API route)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <>
      <Section
        title="Contact"
        subtitle="Short, friendly. Let's build something that converts."
      >
        <div className="mx-auto max-w-xl">
          <p className="mb-10 text-center text-[var(--muted)]">
            Have a project in mind? Drop a message and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-[var(--accent)] py-3 font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)] disabled:opacity-50"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message sent!"
                  : "Send message"}
            </button>
          </form>

          <div className="mt-12 border-t border-[var(--border)] pt-10 text-center">
            <p className="text-sm text-[var(--muted)]">Or reach me directly:</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block font-medium text-[var(--accent)] hover:underline"
            >
              {site.email}
            </a>
            {site.calendly && (
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium text-[var(--accent)] hover:underline"
              >
                Book a call (Calendly)
              </a>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
