"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { defaultLocale, locales } from "../../lib/site";

const languageNames = { en: "English", fr: "Français", nl: "Nederlands" };
const labels = { en: "Choose language", fr: "Choisir la langue", nl: "Kies een taal" };

export default function LocaleSwitcher({
  locale,
  onNavigate,
  className = "flex gap-2",
  linkClassName = "underline",
} = {}) {
  const pathname = usePathname() || "/";
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
          href={`/${item}${routeSuffix}`}
          hrefLang={item}
          lang={item}
          aria-label={languageNames[item]}
          aria-current={item === currentLocale ? "page" : undefined}
          onClick={onNavigate}
          className={clsx(linkClassName, item === currentLocale && "text-[var(--accent)]")}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
