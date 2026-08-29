import { ProjectCard } from "./project-card";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t-2 border-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col gap-2">
          <p className="font-mono text-sm uppercase tracking-wide text-label">
            Featured work
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            A few things I&apos;ve built.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
