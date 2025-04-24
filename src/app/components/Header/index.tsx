"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const localeMatch = pathname.match(/^\/(\w{2})(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : "en";

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);
  useEffect(() => close(), [pathname]); // auto‑close on navigation

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between p-[48px] backdrop-blur w-full">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center" aria-label="PicklesStudio – home">
          <Image src="/img/logo-pickles.svg" alt="PicklesStudio logo"   className="h-[12px] w-auto lg:h-[20px]"width={140} height={32}  priority />
        </Link>

        {/* MENU button */}
        <button
          onClick={toggle}
          aria-label="Toggle navigation menu"
          className="flex items-center gap-[12px] focus-visible:outline-none cursor-pointer"
        >
          <span className="tracking-widest text-[12px] lg:text-[20px]">MENU</span>
          {/* two‑line burger */}
          <div className="  flex flex-col justify-center gap-[8px] lg:gap-[8px]  h-full w-[35px] lg:w-[45px]">
            <span
              className={clsx(
                " relative h-[0.5px] w-full bg-white transition-transform duration-300", // line 1
                open && "absolute right-0 top-0 translate-y-[8px] rotate-45"
              )}
            />
            <span
              className={clsx(
                " relative h-[0.5px] w-full bg-white transition-transform duration-300", // line 2
                open && "absolute right-0 top-0  -rotate-45"
              )}
            />
          </div>
        </button>
      </header>

      {/* Slide‑in panel */}
      <div
        className={clsx(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black/95 text-3xl tracking-wide transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={`/${locale}${href === "/" ? "" : href}`}
            className="hover:text-lime-400"
            onClick={close}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}