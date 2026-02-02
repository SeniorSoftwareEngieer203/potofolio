import Link from "next/link";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition hover:border-[var(--accent)]/50"
    >
      <div className="aspect-video w-full bg-[var(--border)]">
        <div
          className="h-full w-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--background)]"
          aria-hidden
        />
      </div>
      <div className="p-5 md:p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--muted)]">{project.role}</p>
        <p className="mt-2 text-sm text-[var(--accent)]">{project.result}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 4 : 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm font-medium text-[var(--accent)] group-hover:underline">
          View case study →
        </p>
      </div>
    </Link>
  );
}
