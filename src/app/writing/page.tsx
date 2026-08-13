import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { posts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Writing — Nand Patel",
  description: "Notes on building web applications.",
};

export default function WritingPage() {
  return (
    <>
      <SiteNav />
      <main className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-2">
            <p className="font-mono text-sm uppercase tracking-wide text-accent-coral">
              Writing
            </p>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Notes &amp; write-ups.
            </h1>
          </div>

          {posts.length === 0 ? (
            <div className="flex flex-col items-start gap-2 rounded-xl border-2 border-dashed border-ink/40 p-8">
              <p className="font-mono text-sm uppercase tracking-wide text-ink/50">
                Coming soon
              </p>
              <p className="text-ink/70">
                No posts yet — check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {posts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
