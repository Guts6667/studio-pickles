import { absoluteUrl, business, publicSiteConfigured } from "./business";
import { getServices, isValidLocale, locales } from "./site";

const openGraphLocales = { en: "en_GB", fr: "fr_FR", nl: "nl_NL" };

export function getLocalizedAlternates(path = "") {
  if (!publicSiteConfigured) return undefined;

  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, absoluteUrl(`/${locale}${path}`)])
    ),
    "x-default": absoluteUrl(`/fr${path}`),
  };
}

export function buildPageMetadata(
  locale,
  { title, description, path = "", image = "/img/bg-pickles.jpg" }
) {
  const language = isValidLocale(locale) ? locale : "fr";
  const url = absoluteUrl(`/${language}${path}`);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    ...(publicSiteConfigured
      ? {
          alternates: {
            canonical: url,
            languages: getLocalizedAlternates(path),
          },
        }
      : {}),
    robots: {
      index: publicSiteConfigured,
      follow: publicSiteConfigured,
    },
    openGraph: {
      type: "website",
      title: `${title} | ${business.name}`,
      description,
      siteName: business.name,
      locale: openGraphLocales[language],
      alternateLocale: locales
        .filter((item) => item !== language)
        .map((item) => openGraphLocales[item]),
      ...(url ? { url } : {}),
      ...(imageUrl ? { images: [{ url: imageUrl, alt: business.name }] } : {}),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: `${title} | ${business.name}`,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}

export function buildBusinessStructuredData(locale) {
  const url = absoluteUrl("/");
  const organizationId = absoluteUrl("/#organization");
  const areaServed = business.serviceAreas.map((name) => ({
    "@type": name === "France" ? "Country" : "City",
    name,
  }));
  const organization = {
    "@type": "Organization",
    ...(organizationId ? { "@id": organizationId } : {}),
    name: business.name,
    ...(business.legalName ? { legalName: business.legalName } : {}),
    ...(url ? { url, logo: absoluteUrl("/img/logo-pickles.svg") } : {}),
    ...(business.email ? { email: business.email } : {}),
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(business.address
      ? { address: { "@type": "PostalAddress", ...business.address } }
      : {}),
    areaServed,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      ...(url
        ? [
            {
              "@type": "WebSite",
              "@id": absoluteUrl("/#website"),
              url,
              name: business.name,
              inLanguage: locales,
              publisher: { "@id": organizationId },
            },
          ]
        : []),
      ...getServices(locale).map((service) => ({
        "@type": "Service",
        ...(url
          ? { "@id": absoluteUrl(`/${locale}/services#${service.key}`) }
          : {}),
        name: service.title,
        description: service.intro,
        provider: organizationId
          ? { "@id": organizationId }
          : { "@type": "Organization", name: business.name },
        areaServed,
        ...(url ? { url: absoluteUrl(`/${locale}/services`) } : {}),
      })),
    ],
  };
}
