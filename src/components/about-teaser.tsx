"use client";

import { motion } from "motion/react";

export function AboutTeaser() {
  return (
    <section id="about" className="border-t-2 border-ink px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="mx-auto flex max-w-3xl flex-col gap-4"
      >
        <p className="font-mono text-sm uppercase tracking-wide text-accent-coral">
          About
        </p>
        <h2 className="font-heading text-3xl font-bold md:text-4xl">
          Full stack, end to end.
        </h2>
        <p className="text-lg text-ink/80">
          I&apos;m a full-stack developer who likes working across the whole
          stack — designing interfaces in React, then building the APIs and
          database schemas that back them. I care as much about a clean data
          model as a clean UI.
        </p>
      </motion.div>
    </section>
  );
}
