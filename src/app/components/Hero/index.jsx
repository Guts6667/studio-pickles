import Link from "next/link";

export default function Hero({ hero, locale }) {
  return (
    <section className="page-shell">
      <div className="flex min-h-[76vh] flex-col items-center justify-center gap-6 px-2 py-16 text-center lg:min-h-[88vh] lg:px-10">
        <h1 className="text-[15vw] leading-[0.9] sm:text-[17vw] lg:text-[10vw]">
          <strong className="bg-[url('/img/bg-pickles.jpg')] bg-cover bg-center bg-clip-text font-semibold text-transparent">
            Pickles
          </strong>
          <em className="font-serif font-normal">Studio</em>
        </h1>
        <p className="body-muted balance-text max-w-2xl text-sm uppercase leading-6 tracking-[0.08em] lg:text-lg lg:leading-8">
          {hero.sub}
          <br />
          {hero.headline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
          >
            <span className="text-sm font-medium text-black">
              {hero.ctaPrimary}
            </span>
          </Link>
          <Link
            href={`/${locale}/portfolio`}
            className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/5"
          >
            <span className="text-sm font-medium text-white">
              {hero.ctaSecondary}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
