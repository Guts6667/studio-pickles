import InfiniteTextSlider from "../InfiniteTextSlider";

export default function OurClients({ title, intro, clients }) {
  return (
    <section className="page-shell flex flex-col gap-8">
      <div className="flex flex-col gap-4 px-1">
        <span className="eyebrow">[{title}]</span>
        {intro ? (
          <p className="body-muted max-w-3xl text-sm leading-7 lg:text-base">
            {intro}
          </p>
        ) : null}
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]">
        <InfiniteTextSlider clients={clients} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </section>
  );
}
