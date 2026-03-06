import { summary, experience, education } from "@/lib/data";
import { Section } from "../components/Section";

export default function AboutPage() {
  return (
    <>
      <Section
        title="About"
        subtitle="Human + senior-level confidence."
      >
        <div className="mx-auto max-w-2xl space-y-12">
          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Short intro
            </h3>
            <p className="mt-3 text-[var(--muted)]">
              I&apos;m Sugar Ray, a Senior Shopify Full Stack Developer with over 5
              years of experience creating custom e-commerce solutions. I focus
              on Shopify Plus, headless commerce (Next.js, React), and
              third-party integrations driving revenue through optimized
              conversion and streamlined checkout. I work comfortably in remote,
              async teams with a strong sense of ownership and craftsmanship.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Experience summary
            </h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              <li>5+ years in e-commerce and Shopify</li>
              <li>Remote agency work with global brands</li>
              <li>Ownership mindset: I own projects end-to-end</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              How I work
            </h3>
            <ul className="mt-3 space-y-2 text-[var(--muted)]">
              <li>Async-first; clear communication and documentation</li>
              <li>Detail-oriented; clean, maintainable code</li>
              <li>Business-focused; speed, conversion, and revenue matter</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Education
            </h3>
            <p className="mt-3 text-[var(--muted)]">
              {education.degree} — {education.school}, {education.year},{" "}
              {education.location}. {education.gpa}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
