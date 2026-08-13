import { defineCollection, defineConfig, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "writing/**/*.mdx",
  schema: s
    .object({
      slug: s.slug("posts"),
      title: s.string().max(99),
      excerpt: s.string().max(280),
      publishedDate: s.isodate(),
      tags: s.array(s.string()).default([]),
      draft: s.boolean().default(false),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      readingTime: Math.max(1, Math.round(data.metadata.readingTime)),
    })),
});

export default defineConfig({
  root: "content",
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
