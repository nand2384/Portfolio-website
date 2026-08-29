"use client";

import { motion } from "motion/react";

const placeholderRoles = [
  { role: "[TODO: content]", company: "[TODO: content]", dates: "[TODO: content]" },
  { role: "[TODO: content]", company: "[TODO: content]", dates: "[TODO: content]" },
];

export function WorkHistory() {
  return (
    <section className="border-t-2 border-ink px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex flex-col gap-2">
          <p className="font-mono text-sm uppercase tracking-wide text-label">
            Experience
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Where I&apos;ve worked.
          </h2>
        </div>

        <ol className="flex flex-col gap-6 border-l-2 border-ink pl-6">
          {placeholderRoles.map((entry, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                delay: index * 0.08,
              }}
              className="relative"
            >
              <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-accent-yellow" />
              <p className="font-heading text-lg font-bold text-ink/70">
                {entry.role}
              </p>
              <p className="font-mono text-sm text-ink/70">
                {entry.company} · {entry.dates}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
