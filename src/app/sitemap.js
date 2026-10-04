import { absoluteUrl, publicSiteConfigured } from "./lib/business";
import { getLocalizedAlternates } from "./lib/seo";
import { getProjects, locales } from "./lib/site";

export default function sitemap() {
  if (!publicSiteConfigured) return [];

  const paths = [
    "",
    "/services",
    "/about",
    "/portfolio",
    "/contact",
    "/legal-notice",
    "/privacy-policy",
    "/cookie-policy",
    ...getProjects("fr").map((project) => `/portfolio/${project.slug}`),
  ];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: absoluteUrl(`/${locale}${path}`),
      alternates: { languages: getLocalizedAlternates(path) },
    }))
  );
}
