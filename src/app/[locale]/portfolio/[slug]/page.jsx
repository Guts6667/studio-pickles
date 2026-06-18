import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getSiteContent,
  locales,
} from "../../../lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    [
      "sciences-co",
      "dropper-portal",
      "dropper-app",
      "edge-dynamics",
      "mbuzz",
      "saudi-excellence",
    ].map((slug) => ({ locale, slug }))
  );
}

export default async function ProjectDetailPage({ params }) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale, slug);
  const content = getSiteContent(locale);

  if (!project) {
    notFound();
  }

  const metaItems = [
    { label: content.projectPage.client, value: project.client },
    { label: content.projectPage.year, value: project.year },
    { label: content.projectPage.type, value: project.type },
  ];

  return (
    <main className="page-shell flex flex-col gap-10 pb-20 pt-8 lg:gap-14 lg:pt-12">
      <Link
        href={`/${locale}/portfolio`}
        className="eyebrow inline-flex w-fit items-center gap-2 hover:text-[var(--accent)]"
      >
        <span>&larr;</span>
        {content.common.backToPortfolio}
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <span className="eyebrow">{project.client}</span>
          <h1 className="balance-text text-5xl leading-none lg:text-7xl">
            {project.title}
          </h1>
          <p className="body-muted max-w-2xl text-base leading-relaxed lg:text-lg">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.12em] text-white/80"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="section-frame grid gap-4 p-6">
          {metaItems.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
            >
              <span className="eyebrow">{item.label}</span>
              <span className="text-base text-white">{item.value}</span>
            </div>
          ))}
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm text-black transition-transform hover:scale-[1.02]"
            >
              {content.common.liveSite}
            </a>
          ) : null}
        </div>
      </section>

      <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 80vw"
          priority
        />
      </div>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="section-frame flex flex-col gap-4 p-6 lg:col-span-1">
          <span className="eyebrow">{content.projectPage.challenge}</span>
          <p className="body-muted text-sm leading-7">{project.challenge}</p>
        </article>
        <article className="section-frame flex flex-col gap-4 p-6 lg:col-span-2">
          <span className="eyebrow">{content.projectPage.solution}</span>
          <p className="body-muted text-sm leading-7">{project.solution}</p>
        </article>
      </section>

      <section className="section-frame flex flex-col gap-5 p-6">
        <span className="eyebrow">{content.projectPage.impact}</span>
        <div className="grid gap-3 md:grid-cols-3">
          {project.impactPoints?.length
            ? project.impactPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/85"
                >
                  {item}
                </div>
              ))
            : [
                <div
                  key="placeholder"
                  className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-white/85"
                >
                  {content.projectPage.placeholderImpact}
                </div>,
              ]}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <span className="eyebrow">{content.projectPage.gallery}</span>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/10 bg-white/5"
            >
              <Image
                src={image}
                alt={`${project.title} visual ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
