"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { defaultLocale, locales, localeCookieName, localeCookieMaxAge } from "../../lib/locale";

const languageNames = { en: "English", fr: "Français", nl: "Nederlands" };
const labels = { en: "Choose language", fr: "Choisir la langue", nl: "Kies een taal" };

export default function LocaleSwitcher({
  locale,
  onNavigate,
  className = "flex gap-2",
  linkClassName = "underline",
} = {}) {
  const pathname = usePathname() || "/";
  const query = useSearchParams()?.toString();
  const pathLocale = pathname.split("/")[1];
  const currentLocale = locales.includes(pathLocale)
    ? pathLocale
    : locales.includes(locale) ? locale : defaultLocale;
  const route = pathname.replace(/^\/(en|fr|nl)(?=\/|$)/, "");
  const routeSuffix = route === "/" ? "" : route;

  return (
    <nav aria-label={labels[currentLocale]} className={className}>
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${routeSuffix}${query ? `?${query}` : ""}`}
          hrefLang={item}
          lang={item}
          aria-label={languageNames[item]}
          aria-current={item === currentLocale ? "page" : undefined}
          onClick={() => {
            try {
              document.cookie = `${localeCookieName}=${item}; Path=/; Max-Age=${localeCookieMaxAge}; SameSite=Lax${window.location.protocol === "https:" ? "; Secure" : ""}`;
            } catch {
              // The language link still works when browser storage is unavailable.
            }
            onNavigate?.();
          }}
          className={clsx(linkClassName, item === currentLocale && "text-[var(--accent)]")}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
