"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { getNavItems, getSiteContent } from "../../lib/site";
import LocaleSwitcher from "../LocalSwitcher";

export default function Header({ locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;
  const menuId = useId();
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const content = getSiteContent(locale);
  const links = getNavItems(locale);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const scrollRoot = document.documentElement;
    const previousOverflow = scrollRoot.style.overflow;
    scrollRoot.style.overflow = "hidden";
    menuRef.current?.querySelector("a[href]")?.focus({ preventScroll: true });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [
        buttonRef.current,
        ...Array.from(menuRef.current?.querySelectorAll("a[href]") || []),
      ].filter(Boolean);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !focusable.includes(active))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && (active === last || !focusable.includes(active))) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      scrollRoot.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (buttonRef.current?.isConnected) buttonRef.current.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/95">
        <div className="page-shell flex items-center justify-between py-5 lg:py-8">
          <Link
            href={`/${locale}`}
            className="flex items-center"
            aria-label={`Pickles Studio — ${content.navigation.home}`}
            onClick={closeMenu}
          >
            <Image
              src="/img/logo-pickles.svg"
              alt="Pickles Studio"
              className="h-[13px] w-auto lg:h-[18px]"
              width={140}
              height={32}
              priority
            />
          </Link>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white lg:text-sm"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? content.navigation.close : content.navigation.menu}
          >
            <span>{open ? content.navigation.close : content.navigation.menu}</span>
            <span aria-hidden="true" className="relative flex h-4 w-10 flex-col justify-center gap-2">
              <span
                className={clsx(
                  "h-px w-full bg-white transition-transform duration-300 motion-reduce:transition-none",
                  open && "translate-y-[4.5px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "h-px w-full bg-white transition-transform duration-300 motion-reduce:transition-none",
                  open && "-translate-y-[4.5px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <nav
        ref={menuRef}
        id={menuId}
        aria-label={content.navigation.menu}
        aria-hidden={!open}
        inert={!open}
        className={clsx(
          "fixed inset-0 z-40 flex h-dvh flex-col overflow-y-auto bg-black/96 px-6 pb-8 pt-28 text-white transition-transform duration-300 motion-reduce:transition-none lg:px-10 lg:pb-10 lg:pt-36",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="page-shell flex min-h-full flex-col justify-between gap-10 px-0">
          <div className="grid gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="text-4xl leading-none text-white/88 transition-colors hover:text-[var(--accent)] lg:text-7xl"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <LocaleSwitcher
            locale={locale}
            onNavigate={closeMenu}
            className="flex items-center gap-5 text-sm uppercase tracking-[0.15em] text-white/50"
            linkClassName="transition-colors hover:text-white"
          />
        </div>
      </nav>
    </>
  );
}
