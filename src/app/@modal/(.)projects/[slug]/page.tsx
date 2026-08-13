import { notFound } from "next/navigation";
import { ProjectDetailContent } from "@/components/project-detail-content";
import { ProjectModal } from "@/components/project-modal";
import { getProjectBySlug } from "@/content/projects";

export default async function InterceptedProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <ProjectModal>
      <ProjectDetailContent project={project} />
    </ProjectModal>
  );
}
