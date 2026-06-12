import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const normalizeBasePath = (path: string): string => {
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") {
    return "";
  }

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

const inferredBasePath = isGithubActions && repositoryName ? `/${repositoryName}` : "";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.NEXT_BASE_PATH ?? inferredBasePath;
const basePath = normalizeBasePath(configuredBasePath);

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
