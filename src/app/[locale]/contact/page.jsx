import { getSiteContent, getSocialLinks } from "../../lib/site";
import { business, formatBusinessAddress } from "../../lib/business";
import { buildPageMetadata } from "../../lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  return buildPageMetadata(locale, {
    title: `${content.contactPage.eyebrow} — Montpellier`,
    description: content.contactPage.intro,
    path: "/contact",
  });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const socialLinks = getSocialLinks(locale);

  return (
    <main className="page-shell flex flex-col gap-10 pb-20 pt-8 lg:gap-14 lg:pt-12">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-5">
          <span className="eyebrow">{content.contactPage.eyebrow}</span>
          <h1 className="balance-text text-5xl leading-none lg:text-7xl">
            {content.contactPage.title}
          </h1>
          <p className="body-muted max-w-2xl text-base leading-relaxed lg:text-lg">
            {content.contactPage.intro}
          </p>
          <p className="text-sm uppercase tracking-[0.12em] text-white/45">
            {content.contactPage.availability}
          </p>
        </div>

        <div className="section-frame flex flex-col gap-6 p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <span className="eyebrow">{content.contactPage.emailLabel}</span>
            <a
              href={`mailto:${business.email}`}
              className="text-2xl leading-tight hover:text-[var(--accent)] lg:text-4xl"
            >
              {business.email}
            </a>
          </div>
          <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">{content.contactPage.phoneLabel}</span>
              <a href={business.whatsappUrl} className="text-white/85 hover:text-white">
                {business.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="eyebrow">{content.contactPage.socialLabel}</span>
              <div className="flex flex-col gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-white/10 pt-6">
            <span className="eyebrow">{content.contactPage.locationLabel}</span>
            <p className="text-white/85">{content.contactPage.location}</p>
            {business.address ? (
              <div className="mt-4 flex flex-col gap-2">
                <span className="eyebrow">{{ fr: "Adresse professionnelle", en: "Registered business address", nl: "Geregistreerd bedrijfsadres" }[locale]}</span>
                <address className="text-sm not-italic text-white/65">{formatBusinessAddress()}</address>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
