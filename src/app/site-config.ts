const inferredSiteOrigin = "https://fumu.world";

const normalizeBasePath = (path: string): string => {
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") {
    return "";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
const siteOrigin =
  (process.env.NEXT_PUBLIC_SITE_URL ?? inferredSiteOrigin).replace(/\/$/, "");
const canonicalPath = basePath ? `${basePath}/` : "/";
const homeUrl = `${siteOrigin}${canonicalPath}`;

export const siteConfig = {
  basePath,
  canonicalPath,
  homeUrl,
  siteOrigin,
};
