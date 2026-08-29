"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const cardColor = index % 2 === 0 ? "bg-card-pink" : "bg-card-mint";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
        delay: index * 0.08,
      }}
    >
      <Link
        href={`/projects/${project.slug}`}
        scroll={false}
        className={`group flex h-full flex-col gap-4 rounded-xl border-2 border-ink p-6 shadow-[var(--shadow-hard)] transition-transform hover:-translate-y-1 ${cardColor}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold">{project.title}</h3>
          {project.hasLiveDemo && (
            <span className="shrink-0 rounded-md border-2 border-ink bg-accent-yellow px-2 py-0.5 font-mono text-xs uppercase text-on-accent">
              Live
            </span>
          )}
        </div>

        <p className="text-sm text-ink/80">{project.oneLiner}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border-2 border-ink bg-surface px-2 py-1 font-mono text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
