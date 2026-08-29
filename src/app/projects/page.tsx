import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects — Nand Patel",
  description: "A selection of full-stack web projects built by Nand Patel.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-2">
            <p className="font-mono text-sm uppercase tracking-wide text-label">
              Projects
            </p>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Things I&apos;ve built.
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
