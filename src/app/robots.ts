import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fumu.co";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const homepageUrl = `${normalizedSiteUrl}${publicBasePath}/`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${homepageUrl}sitemap.xml`,
    host: normalizedSiteUrl,
  };
}
