import Link from "next/link";
import { getSocialLinks } from "../../lib/site";

export default function ContactUs({ locale, title, navItems, sectionLabels }) {
  const socialItems = getSocialLinks(locale).filter((item) =>
    ["Instagram", "LinkedIn", "Mail", "WhatsApp"].includes(item.name)
  );

  return (
    <section className="page-shell">
      <div className="section-frame grid gap-8 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-8">
        <div className="hidden lg:block" />
        <div className="flex flex-col gap-8 border-l-0 lg:border-l lg:border-white/10 lg:pl-8">
          <h2 className="text-3xl lg:text-4xl">[{title}]</h2>
          <a
            href="mailto:contact@studiopickles.io"
            className="text-3xl leading-tight hover:text-[var(--accent)] lg:text-5xl"
          >
            CONTACT@STUDIOPICKLES.IO
          </a>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
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
            <div className="flex flex-col gap-4">
              <h3 className="text-sm uppercase tracking-[0.12em] text-white/45">
                {sectionLabels.contact}
              </h3>
              <div className="flex flex-col gap-2 text-sm">
                <a href="mailto:contact@studiopickles.io">contact@studiopickles.io</a>
                <a href="https://wa.me/+33644167776">+33 6 44 16 77 76</a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
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
