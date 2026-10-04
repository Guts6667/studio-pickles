export const locales = ["en", "fr", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";
export const localeCookieName = "pickles_locale";
export const localeCookieMaxAge = 180 * 24 * 60 * 60;

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

function browserLocale(acceptLanguage: string | null): Locale | undefined {
  const preferences = (acceptLanguage || "").split(",").map((range, index) => {
    const [tag, ...parameters] = range.trim().split(";");
    const locale = tag.trim().toLowerCase().split("-")[0];
    const qualityParameter = parameters.find((parameter) => /^\s*q\s*=/i.test(parameter));
    const rawQuality = qualityParameter?.split("=")[1]?.trim();
    const quality = rawQuality === undefined
      ? 1
      : /^(?:0(?:\.\d+)?|1(?:\.0+)?|\.\d+)$/.test(rawQuality) ? Number(rawQuality) : 0;
    return { locale, quality, index };
  });

  preferences.sort((first, second) => second.quality - first.quality || first.index - second.index);
  for (const { locale, quality } of preferences) {
    if (quality > 0 && isSupportedLocale(locale)) return locale;
  }
}

export function resolveVisitorLocale({
  preference,
  country,
  acceptLanguage,
}: {
  preference?: string;
  country: string | null;
  acceptLanguage: string | null;
}): Locale {
  if (isSupportedLocale(preference)) return preference;

  const countryCode = country?.trim().toUpperCase();
  if (countryCode === "FR") return "fr";
  if (countryCode === "NL") return "nl";

  return browserLocale(acceptLanguage) || defaultLocale;
}
