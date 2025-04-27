// src/components/Header.jsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const LABELS = {
  en: {
    home: "Home",
    portfolio: "Portfolio",
    services: "Services",
    about: "About",
    contact: "Contact",
  },
  fr: {
    home: "Accueil",
    portfolio: "Portfolio",
    services: "Services",
    about: "À propos",
    contact: "Contact",
  },
  nl: {
    home: "Thuis",
    portfolio: "Portfolio",
    services: "Diensten",
    about: "Over ons",
    contact: "Contact",
  },
};

const LINKS = [
  { key: "home", href: "/" },
  { key: "portfolio", href: "/portfolio" },
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  /* ───────── state & helpers ───────── */
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const localeMatch = pathname.match(/^\/(\w{2})(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : "en";
  const pathWithoutLoc = pathname.replace(/^\/\w{2}/, "");

  const l = LABELS[locale] || LABELS.en;

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  useEffect(() => close(), [pathname]);

  /* ───────── render ───────── */
  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-[24px] lg:p-[48px] w-full">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center"
          aria-label="PicklesStudio – home"
        >
          <Image
            src="/img/logo-pickles.svg"
            alt="PicklesStudio logo"
            className="h-[12px] w-auto lg:h-[20px]"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* MENU button */}
        <button
          onClick={toggle}
          aria-label="Toggle navigation menu"
          className="flex items-center gap-[12px] focus-visible:outline-none cursor-pointer"
        >
          <span className="tracking-widest text-[12px] lg:text-[20px]">
            MENU
          </span>
          {/* two-line burger */}
          <div className="flex flex-col justify-center gap-[8px] lg:gap-[8px] h-full w-[35px] lg:w-[45px]">
            <span
              className={clsx(
                "relative h-[0.5px] w-full bg-white transition-transform duration-300",
                open && "absolute right-0 top-0 translate-y-[8px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "relative h-[0.5px] w-full bg-white transition-transform duration-300",
                open && "absolute right-0 top-0 -rotate-45"
              )}
            />
          </div>
        </button>
      </header>

      {/* Slide-in panel */}
      <nav
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-[24px] bg-black/90 text-[40px] tracking-wide transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {LINKS.map(({ key, href }) => (
          <Link
            key={key}
            href={`/${locale}${href === "/" ? "" : href}`}
            onClick={close}
            className="hover:text-lime-400"
          >
            {l[key]}
          </Link>
        ))}

        {/* switcher EN / FR / NL */}
        <div className="absolute bottom-8 flex gap-6 text-[20px]">
          {Object.keys(LABELS).map((loc) => (
            <Link
              key={loc}
              href={`/${loc}${pathWithoutLoc}`}
              onClick={close}
              className={clsx(
                "uppercase",
                loc === locale
                  ? "text-lime-400 underline"
                  : "hover:text-lime-400"
              )}
            >
              {loc}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}