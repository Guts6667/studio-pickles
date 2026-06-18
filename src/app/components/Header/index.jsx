"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { getNavItems, locales, getSiteContent } from "../../lib/site";

export default function Header({ locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;
  const content = getSiteContent(locale);
  const links = getNavItems(locale);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const pathWithoutLocale = pathname.replace(/^\/(en|fr|nl)/, "") || "";

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="page-shell flex items-center justify-between py-5 lg:py-8">
          <Link href={`/${locale}`} className="flex items-center" aria-label="Pickles Studio home">
            <Image
              src="/img/logo-pickles.svg"
              alt="Pickles Studio logo"
              className="h-[13px] w-auto lg:h-[18px]"
              width={140}
              height={32}
              priority
            />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white lg:text-sm"
            aria-expanded={open}
            aria-label={open ? content.navigation.close : content.navigation.menu}
          >
            <span>{open ? content.navigation.close : content.navigation.menu}</span>
            <div className="relative flex h-4 w-10 flex-col justify-center gap-2">
              <span
                className={clsx(
                  "h-px w-full bg-white transition-transform duration-300",
                  open && "translate-y-[4.5px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "h-px w-full bg-white transition-transform duration-300",
                  open && "-translate-y-[4.5px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      <nav
        className={clsx(
          "fixed inset-0 z-40 flex min-h-screen flex-col justify-between bg-black/96 px-6 pb-8 pt-28 text-white transition-transform duration-300 lg:px-10 lg:pb-10 lg:pt-36",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="page-shell flex h-full flex-col justify-between gap-10 px-0">
          <div className="grid gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-4xl leading-none text-white/88 transition-colors hover:text-[var(--accent)] lg:text-7xl"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5 text-sm uppercase tracking-[0.15em] text-white/50">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}${pathWithoutLocale}`}
                className={clsx(
                  "transition-colors hover:text-white",
                  item === locale && "text-[var(--accent)]"
                )}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
