"use client";

import { motion } from "motion/react";

const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "REST APIs",
  "JWT Auth",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

export function TechStack() {
  return (
    <section id="stack" className="border-t-2 border-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-2">
          <p className="font-mono text-sm uppercase tracking-wide text-label">
            Tech stack
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Tools I reach for.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 22,
                delay: index * 0.03,
              }}
              className="rounded-lg border-2 border-ink bg-surface px-3 py-1.5 font-mono text-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
