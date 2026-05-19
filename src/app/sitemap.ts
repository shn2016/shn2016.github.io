import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = getPublishedPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    ...postEntries
  ];
}
