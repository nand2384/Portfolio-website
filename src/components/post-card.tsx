"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Post } from "@/content/writing";

export function PostCard({ post, index = 0 }: { post: Post; index?: number }) {
  const cardColor = index % 2 === 0 ? "bg-card-mint" : "bg-card-pink";
  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
        href={`/writing/${post.slug}`}
        className={`group flex h-full flex-col gap-3 rounded-xl border-2 border-ink p-6 shadow-[var(--shadow-hard)] transition-transform hover:-translate-y-1 ${cardColor}`}
      >
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink/70">
          <span>{date}</span>
          <span aria-hidden>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        <h3 className="font-heading text-xl font-bold">{post.title}</h3>
        <p className="text-sm text-ink/80">{post.excerpt}</p>

        {post.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border-2 border-ink bg-surface px-2 py-1 font-mono text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
