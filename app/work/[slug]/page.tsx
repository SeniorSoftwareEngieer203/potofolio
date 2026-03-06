import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, site } from "@/lib/data";
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
    title: `${project.name} | ${site.name}`,
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
        <div className="mx-auto max-w-6xl w-full px-4 md:px-6">
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
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            Project type
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
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
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {project.storeUrl && (
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-xs font-medium uppercase text-[var(--muted)]">
                Store
              </p>
              <a
                href={project.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block truncate text-[var(--accent)] hover:underline"
              >
                {project.storeUrl.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}
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
        <p className="text-[var(--foreground)]">{project.problem}</p>
      </Section>

      <Section title="Solution">
        <p className="text-[var(--foreground)]">{project.solution}</p>
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

    </>
  );
}
