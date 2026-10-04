import Link from "next/link";
import Image from "next/image";
import PageIntro from "../../components/PageIntro";
import { getServices, getSiteContent } from "../../lib/site";
import { buildPageMetadata } from "../../lib/seo";

const pageMetadata = {
  fr: {
    title: "Sites web et UX/UI à Montpellier, Paris et Rotterdam",
    description:
      "Sites vitrines, applications web, design UX/UI et stratégie : découvrez les services de Pickles Studio à Montpellier, Paris et Rotterdam.",
  },
  en: {
    title: "Websites & UX/UI in Montpellier, Paris & Rotterdam",
    description:
      "Business websites, web applications, UX/UI design and product strategy: explore Pickles Studio’s services in Montpellier, Paris and Rotterdam.",
  },
  nl: {
    title: "Websites en UX/UI in Montpellier, Parijs en Rotterdam",
    description:
      "Bedrijfswebsites, webapplicaties, UX/UI-design en productstrategie: ontdek de diensten van Pickles Studio in Montpellier, Parijs en Rotterdam.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata(locale, {
    ...(pageMetadata[locale] || pageMetadata.fr),
    path: "/services",
  });
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);
  const services = getServices(locale);

  return (
    <main className="page-shell flex flex-col gap-12 pb-20 pt-8 lg:gap-16 lg:pt-12">
      <PageIntro
        eyebrow={content.servicesPage.eyebrow}
        title={content.servicesPage.title}
        intro={content.servicesPage.intro}
      />

      <section className="grid gap-4">
        {services.map((service) => (
          <article
            key={service.key}
            id={service.key}
            className="section-frame grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="flex flex-col gap-5 p-6 lg:p-8">
              <span className="eyebrow">[{service.title}]</span>
              <h2 className="text-3xl leading-tight lg:text-5xl">
                {service.title}
              </h2>
              <p className="body-muted max-w-xl text-sm leading-7">
                {service.intro}
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-4 text-xs uppercase tracking-[0.12em] text-white/80"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/45" />
            </div>
          </article>
        ))}
      </section>

      <div className="section-frame flex flex-col items-start gap-5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <p className="max-w-2xl text-xl leading-relaxed text-white/90">
          {content.servicesPage.cta}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="rounded-full bg-white px-6 py-3 text-sm text-black transition-transform hover:scale-[1.02]"
        >
          {content.navigation.contact}
        </Link>
      </div>
    </main>
  );
}
