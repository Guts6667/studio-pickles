import Link from "next/link";
import { getNavItems, getSiteContent } from "../../lib/site";

export default function Footer({ locale }) {
  const content = getSiteContent(locale);
  const navItems = getNavItems(locale);

  return (
    <footer className="mt-12 bg-[var(--footer-background)] text-[var(--footer-foreground)]">
      <div className="page-shell flex flex-col gap-10 px-3 py-8 lg:py-10">
        <div className="grid gap-6 border-b border-black/10 pb-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl lg:text-4xl">
              <strong>Pickles</strong>
              <em className="font-serif">Studio</em>
            </h2>
            <p className="max-w-md text-sm leading-6 text-black/70">
              Premium product agency crafting launch websites, platforms and digital experiences from Paris & Rotterdam.
            </p>
          </div>

          <div className="grid gap-6 text-sm lg:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                Sitemap
              </span>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-black/60">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                Contact
              </span>
              <a href="mailto:contact@studiopickles.io">contact@studiopickles.io</a>
              <a href="https://wa.me/+33644167776">+33 6 44 16 77 76</a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                Legal
              </span>
              <Link href={`/${locale}/privacy-policy`}>Privacy Policy</Link>
              <Link href={`/${locale}/cookie-policy`}>Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs text-black/45 lg:flex-row lg:items-center lg:justify-between">
          <p>All rights reserved. Copyright 2026 ©</p>
          <p>{content.common.legalPlaceholder}</p>
        </div>
      </div>
    </footer>
  );
}
