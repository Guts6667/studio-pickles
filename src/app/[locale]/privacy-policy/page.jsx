import { getLegalPage, getSiteContent } from "../../lib/site";

export default async function PrivacyPolicyPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const page = getLegalPage(locale, "privacy-policy");

  return (
    <main className="page-shell flex flex-col gap-10 pb-20 pt-8 lg:pt-12">
      <section className="section-frame flex flex-col gap-6 p-6 lg:p-8">
        <span className="eyebrow">{page.title}</span>
        <h1 className="text-4xl lg:text-6xl">{page.title}</h1>
        <p className="body-muted max-w-3xl text-sm leading-7">{page.intro}</p>
        <div className="rounded-[20px] border border-amber-300/20 bg-amber-300/8 px-4 py-4 text-sm leading-7 text-amber-100">
          {content.common.legalPlaceholder}
        </div>
      </section>

      <section className="grid gap-4">
        {page.sections.map((section) => (
          <article key={section.title} className="section-frame flex flex-col gap-3 p-6">
            <span className="eyebrow">{section.title}</span>
            <p className="body-muted text-sm leading-7">{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
