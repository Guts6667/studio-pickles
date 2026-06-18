import OurWorkItem from "../OurWorkItem";

export default function OurWork({ locale, title, intro, projects }) {
  return (
    <section className="page-shell flex flex-col gap-8">
      {title || intro ? (
        <div className="flex flex-col gap-4 px-1">
          {title ? <span className="eyebrow">[{title}]</span> : null}
          {intro ? (
            <p className="body-muted max-w-3xl text-sm leading-7 lg:text-base">
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((item) => (
          <OurWorkItem key={item.slug} item={item} locale={locale} />
        ))}
      </div>
    </section>
  );
}
