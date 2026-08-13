import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectDetailContent } from "@/components/project-detail-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getProjectBySlug, projects } from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Nand Patel`,
    description: project.oneLiner,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SiteNav />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-ink/70 hover:text-ink"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
          <ProjectDetailContent project={project} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
