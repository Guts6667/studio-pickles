import { getSiteContent, getSocialLinks } from "../../lib/site";

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
              href="mailto:contact@studiopickles.io"
              className="text-2xl leading-tight hover:text-[var(--accent)] lg:text-4xl"
            >
              {content.contactPage.cta}
            </a>
          </div>
          <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="eyebrow">{content.contactPage.phoneLabel}</span>
              <a href="https://wa.me/+33644167776" className="text-white/85 hover:text-white">
                +33 6 44 16 77 76
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
        </div>
      </section>
    </main>
  );
}
