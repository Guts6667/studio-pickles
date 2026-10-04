import { getLegalPage, getSiteContent } from "../../lib/site";
import { buildPageMetadata } from "../../lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const page = getLegalPage(locale, "cookie-policy");
  return buildPageMetadata(locale, { title: page.title, description: page.intro, path: "/cookie-policy" });
}

export default async function CookiePolicyPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const page = getLegalPage(locale, "cookie-policy");

  return (
    <main className="page-shell flex flex-col gap-10 pb-20 pt-8 lg:pt-12">
      <section className="section-frame flex flex-col gap-6 p-6 lg:p-8">
        <span className="eyebrow">{page.title}</span>
        <h1 className="text-4xl lg:text-6xl">{page.title}</h1>
        <p className="body-muted max-w-3xl text-sm leading-7">{page.intro}</p>
        <time dateTime="2026-10-04" className="text-sm text-white/45">{content.legal.updated}</time>
      </section>

      <section className="grid gap-4">
        {page.sections.map((section) => (
          <article key={section.title} className="section-frame flex flex-col gap-3 p-6">
            <h2 className="eyebrow">{section.title}</h2>
            <p className="body-muted text-sm leading-7">{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
