import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fumu.co";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const homepageUrl = `${normalizedSiteUrl}${publicBasePath}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: homepageUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
