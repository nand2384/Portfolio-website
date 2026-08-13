"use client";

import { ArrowRight, FileText } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-start justify-center gap-6 px-6 pt-16"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="flex items-center gap-2 rounded-full border-2 border-ink bg-accent-yellow px-4 py-1.5 font-mono text-xs uppercase tracking-wide"
        >
          <span className="h-2 w-2 rounded-full bg-ink" />
          Available for work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.05 }}
          className="font-heading text-5xl font-bold leading-[1.05] md:text-6xl"
        >
          Hi, I&apos;m Nand Patel — full-stack web developer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.1 }}
          className="max-w-xl text-lg text-ink/80"
        >
          I build fast, scalable web applications end to end — React
          interfaces backed by Node.js/Express APIs and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97, x: 2, y: 2 }}
            className="group flex items-center gap-2 rounded-lg border-2 border-ink bg-card-pink px-6 py-3 font-medium shadow-[var(--shadow-hard)] transition-shadow active:shadow-none"
          >
            View projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

          <motion.a
            href="/Nand_Patel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97, x: 2, y: 2 }}
            className="flex items-center gap-2 rounded-lg border-2 border-ink bg-surface px-6 py-3 font-medium shadow-[var(--shadow-hard)] transition-shadow active:shadow-none"
          >
            <FileText size={18} />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
