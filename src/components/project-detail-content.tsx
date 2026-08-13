import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/projects";

export function ProjectDetailContent({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border-2 border-ink bg-accent-yellow px-2 py-1 font-mono text-xs uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          {project.title}
        </h1>
        <p className="text-lg text-ink/80">{project.oneLiner}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border-2 border-ink bg-surface px-4 py-2 font-medium shadow-[var(--shadow-hard)] transition-transform hover:-translate-y-0.5"
        >
          <Github size={18} />
          Repository
        </a>
        {project.hasLiveDemo && project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border-2 border-ink bg-card-pink px-4 py-2 font-medium shadow-[var(--shadow-hard)] transition-transform hover:-translate-y-0.5"
          >
            <ExternalLink size={18} />
            Live demo
          </a>
        )}
      </div>

      {project.hasLiveDemo && project.demoUrl ? (
        <div className="overflow-hidden rounded-xl border-2 border-ink shadow-[var(--shadow-hard)]">
          <iframe
            src={project.demoUrl}
            title={`${project.title} live demo`}
            className="h-[320px] w-full bg-surface sm:h-[420px] md:h-[480px]"
          />
        </div>
      ) : (
        project.gallery &&
        project.gallery.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} screenshot`}
                width={640}
                height={400}
                className="rounded-lg border-2 border-ink"
              />
            ))}
          </div>
        )
      )}

      <div className="grid gap-6 border-t-2 border-ink pt-8 md:grid-cols-3">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wide text-accent-coral">
            Problem
          </h2>
          <p className="mt-2 text-sm text-ink/80">
            {project.caseStudy.problem}
          </p>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wide text-accent-coral">
            Approach
          </h2>
          <p className="mt-2 text-sm text-ink/80">
            {project.caseStudy.approach}
          </p>
        </div>
        <div>
          <h2 className="font-mono text-xs uppercase tracking-wide text-accent-coral">
            Outcome
          </h2>
          <p className="mt-2 text-sm text-ink/80">
            {project.caseStudy.outcome}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-t-2 border-ink pt-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border-2 border-ink bg-surface px-2 py-1 font-mono text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
