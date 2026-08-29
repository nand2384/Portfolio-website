import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXContent } from "@/components/mdx-content";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { getPostBySlug, posts } from "@/content/writing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Nand Patel`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <SiteNav />
      <main id="main-content" className="px-6 pb-24 pt-32">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/writing"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-ink/70 hover:text-ink"
          >
            <ArrowLeft size={16} />
            Back to writing
          </Link>

          <div className="mb-8 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink/70">
              <span>{date}</span>
              <span aria-hidden>·</span>
              <span>{post.readingTime} min read</span>
            </div>
            <h1 className="font-heading text-3xl font-bold md:text-4xl">
              {post.title}
            </h1>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border-2 border-ink bg-accent-yellow px-2 py-1 font-mono text-xs uppercase text-on-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <MDXContent code={post.content} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
