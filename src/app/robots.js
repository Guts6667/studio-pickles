import { absoluteUrl, publicSiteConfigured, siteUrl } from "./lib/business";

export default function robots() {
  if (!publicSiteConfigured) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl.origin,
  };
}
