import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { Section } from "@/app/components/Section";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} | Dejan Mitrovic`,
    description: project.result,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-[var(--border)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            href="/work"
            className="text-sm font-medium text-[var(--accent)] hover:underline"
          >
            ← Back to Work
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-[var(--foreground)] md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-[var(--muted)]">{project.role}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[var(--accent)]/20 px-2.5 py-1 text-sm text-[var(--accent)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section title="Project Overview">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase text-[var(--muted)]">
              Client type
            </p>
            <p className="mt-1 text-[var(--foreground)]">{project.clientType}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase text-[var(--muted)]">
              Timeline
            </p>
            <p className="mt-1 text-[var(--foreground)]">{project.timeline}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase text-[var(--muted)]">
              Role
            </p>
            <p className="mt-1 text-[var(--foreground)]">{project.role}</p>
          </div>
        </div>
      </Section>

      <Section
        title="Problem"
        className="border-t border-[var(--border)] bg-[var(--card)]/50"
      >
        <p className="max-w-2xl text-[var(--muted)]">{project.problem}</p>
      </Section>

      <Section title="Solution">
        <p className="max-w-2xl text-[var(--muted)]">{project.solution}</p>
      </Section>

      <Section
        title="Tech Stack"
        className="border-t border-[var(--border)] bg-[var(--card)]/50"
      >
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-sm text-[var(--foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Results">
        <ul className="space-y-3">
          {project.resultsDetail.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[var(--foreground)]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              {r}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-medium text-[var(--accent)]">{project.result}</p>
      </Section>

      <Section
        title="Screenshots / Demo"
        className="border-t border-[var(--border)] bg-[var(--card)]/50"
      >
        <div className="aspect-video max-w-3xl rounded-xl border border-[var(--border)] bg-[var(--border)]">
          <div className="h-full w-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--background)]" />
        </div>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Desktop + mobile views. Replace with real screenshots when available.
        </p>
      </Section>

      <section className="border-t border-[var(--border)] py-16 text-center">
        <h2 className="text-xl font-bold text-[var(--foreground)]">
          Want similar results?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-[var(--background)] transition hover:bg-[var(--accent-hover)]"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
