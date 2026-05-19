import type { Metadata } from "next";

export const siteConfig = {
  name: "Kai Gao",
  title: "Kai Gao | Writing-first Personal Site",
  url: "https://kaig.dev",
  description:
    "Kai Gao is a Melbourne-based software engineer writing about frontend systems, BFF architecture, payments, AI-native products, and solo software businesses.",
  email: "mailto:hello@kaig.dev",
  github: "https://github.com/shn2016",
  linkedin: "https://www.linkedin.com/in/kaig-dev/"
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createMetadata({
  title,
  description,
  path = "/"
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const resolvedDescription = description ?? siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      type: "website",
      url,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription
    }
  };
}
