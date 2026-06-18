import PageIntro from "../../components/PageIntro";
import { getSiteContent } from "../../lib/site";

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return (
    <main className="page-shell flex flex-col gap-12 pb-20 pt-8 lg:gap-16 lg:pt-12">
      <PageIntro
        eyebrow={content.aboutPage.eyebrow}
        title={content.aboutPage.title}
        intro={content.aboutPage.intro}
      />

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="section-frame flex flex-col gap-5 p-6 lg:p-8">
          <span className="eyebrow">{content.common.cities}</span>
          <p className="text-xl leading-relaxed text-white/92 lg:text-2xl">
            {content.aboutPage.story}
          </p>
        </article>
        <aside className="section-frame flex flex-col gap-4 p-6 lg:p-8">
          {content.aboutPage.principles.map((item) => (
            <div
              key={item}
              className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-5 text-sm leading-7 text-white/85"
            >
              {item}
            </div>
          ))}
        </aside>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {content.aboutPage.blocks.map((block) => (
          <article key={block.title} className="section-frame flex flex-col gap-4 p-6">
            <span className="eyebrow">{block.title}</span>
            <p className="body-muted text-sm leading-7">{block.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
