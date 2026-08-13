import { posts as allPosts } from "#velite";

export type { Post } from "#velite";

export const posts = allPosts
  .filter((post) => !post.draft)
  .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
