import Link from "next/link";
import { getNavItems, getSiteContent } from "../../lib/site";
import { business } from "../../lib/business";

export default function Footer({ locale }) {
  const content = getSiteContent(locale);
  const navItems = getNavItems(locale);

  return (
    <footer className="mt-12 bg-[var(--footer-background)] text-[var(--footer-foreground)]">
      <div className="page-shell flex flex-col gap-10 px-3 py-8 lg:py-10">
        <div className="grid gap-6 border-b border-black/10 pb-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="min-w-0 flex flex-col gap-3">
            <h2 className="text-3xl lg:text-4xl">
              <strong>Pickles</strong>
              <em className="font-serif">Studio</em>
            </h2>
            <p className="max-w-md text-sm leading-6 text-black/70">
              {content.footer.description}
            </p>
          </div>

          <div className="grid gap-6 text-sm lg:grid-cols-3">
            <div className="min-w-0 flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                {content.footer.sitemap}
              </span>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-black/60">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="min-w-0 flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                {content.footer.contact}
              </span>
              <a className="break-all" href={`mailto:${business.email}`}>
                {business.email}
              </a>
              <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
              <span>{content.contactPage.location}</span>
            </div>

            <div className="min-w-0 flex flex-col gap-3">
              <span className="uppercase tracking-[0.12em] text-black/45">
                {content.footer.legal}
              </span>
              <Link href={`/${locale}/legal-notice`}>{content.footer.legalNotice}</Link>
              <Link href={`/${locale}/privacy-policy`}>{content.footer.privacy}</Link>
              <Link href={`/${locale}/cookie-policy`}>{content.footer.cookies}</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs text-black/45 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} {business.name}. {content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
