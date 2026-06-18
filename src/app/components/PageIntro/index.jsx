export default function PageIntro({ eyebrow, title, intro, stats = [] }) {
  return (
    <section className="section-frame flex flex-col gap-8 p-6 lg:p-8">
      <div className="flex flex-col gap-5">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="balance-text max-w-5xl text-5xl leading-none lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="body-muted max-w-3xl text-base leading-relaxed lg:text-lg">
            {intro}
          </p>
        ) : null}
      </div>

      {stats.length ? (
        <div className="grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-3xl lg:text-4xl">{stat.value}</span>
              <span className="eyebrow">{stat.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
