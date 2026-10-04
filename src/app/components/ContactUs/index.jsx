import Link from "next/link";
import { getSiteContent, getSocialLinks } from "../../lib/site";
import { business } from "../../lib/business";

export default function ContactUs({ locale, title, navItems, sectionLabels }) {
  const socialItems = getSocialLinks(locale);
  const content = getSiteContent(locale);

  return (
    <section className="page-shell">
      <div className="section-frame grid gap-8 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
        <div className="hidden lg:block" />
        <div className="min-w-0 flex flex-col gap-8 border-l-0 lg:border-l lg:border-white/10 lg:pl-8">
          <h2 className="text-3xl lg:text-4xl">[{title}]</h2>
          <a
            href={`mailto:${business.email}`}
            className="max-w-full break-all text-[11vw] leading-none hover:text-[var(--accent)] sm:text-4xl lg:text-5xl"
          >
            {business.email.toUpperCase()}
          </a>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="min-w-0 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.12em] text-white/45">
                {sectionLabels.sitemap}
              </h3>
              <div className="flex flex-col gap-2 text-sm uppercase">
                {navItems.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-[var(--accent)]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="min-w-0 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.12em] text-white/45">
                {sectionLabels.contact}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <a className="break-all" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
                <a href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
                <p>{content.contactPage.location}</p>
              </div>
            </div>
            <div className="min-w-0 flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.12em] text-white/45">
                {sectionLabels.follow}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                {socialItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
