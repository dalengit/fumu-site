const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const [repositoryOwner = "", repositoryName = ""] =
  process.env.GITHUB_REPOSITORY?.split("/") ?? [];

const inferredBasePath =
  isGithubActions && repositoryName ? `/${repositoryName}` : "";

const inferredSiteOrigin =
  isGithubActions && repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : "https://fumu.co";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;
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
