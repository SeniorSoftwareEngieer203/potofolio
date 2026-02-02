import Link from "next/link";
import {
  summary,
  experience,
  education,
  skills,
  site,
} from "@/lib/data";
import { Section } from "../components/Section";

export default function ResumePage() {
  return (
    <>
      <Section
        title="Resume"
        subtitle="Structured, skimmable version of my CV."
      >
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[var(--muted)]">{site.email} · {site.phone}</p>
            <a
              href={`${site.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Summary
            </h3>
            <p className="mt-3 text-[var(--muted)]">{summary}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Experience
            </h3>
            <div className="mt-6 space-y-8">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-[var(--foreground)]">
                      {job.role} · {job.company}
                    </h4>
                    <span className="text-sm text-[var(--muted)]">
                      {job.period} | {job.location}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1 pl-4">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-[var(--muted)] text-sm list-disc">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)]">
              Skills
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {Object.entries(skills).map(([category, list]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-[var(--foreground)]">
                    {category}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {list.join(", ")}
                  </p>
                </div>
              ))}
            </div>
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

          <div className="border-t border-[var(--border)] pt-8">
            <p className="text-sm text-[var(--muted)]">
              Resume = credentials. Portfolio = proof. Check out my{" "}
              <Link href="/work" className="text-[var(--accent)] hover:underline">
                Work
              </Link>{" "}
              for case studies and results.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
            >
              Download PDF
            </a>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Add your resume PDF to <code className="rounded bg-[var(--border)] px-1">public/resume.pdf</code> to enable the button.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
