import { projects } from "@/lib/data";
import { Section } from "@/app/components/Section";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function WorkPage() {
  return (
    <>
      <Section
        title="Experience & Work"
        subtitle="Proof, not just skills. Projects with measurable results."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </Section>
    </>
  );
}
