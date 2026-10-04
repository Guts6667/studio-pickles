import OurWork from "../../components/OurWork";
import PageIntro from "../../components/PageIntro";
import { getFeaturedProjects, getSiteContent } from "../../lib/site";
import { buildPageMetadata } from "../../lib/seo";

const pageMetadata = {
  fr: {
    title: "Réalisations web, applications et design",
    description:
      "Parcourez les réalisations de Pickles Studio : sites web, applications et interfaces conçus avec une approche associant stratégie, design et développement.",
  },
  en: {
    title: "Portfolio: websites, applications & UX/UI design",
    description:
      "Discover Pickles Studio’s selected websites, applications and interfaces, created through product strategy, design and development.",
  },
  nl: {
    title: "Portfolio: websites, applicaties en UX/UI-design",
    description:
      "Bekijk de websites, applicaties en interfaces van Pickles Studio, ontwikkeld vanuit productstrategie, design en technische uitvoering.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata(locale, {
    ...(pageMetadata[locale] || pageMetadata.fr),
    path: "/portfolio",
  });
}

export default async function PortfolioPage({ params }) {
  const { locale } = await params;
  const content = getSiteContent(locale);

  return (
    <main className="page-shell flex flex-col gap-16 pb-20 pt-8 lg:pt-12">
      <PageIntro
        eyebrow={content.portfolioPage.eyebrow}
        title={content.portfolioPage.title}
        intro={content.portfolioPage.intro}
        stats={content.portfolioPage.stats}
      />
      <OurWork locale={locale} projects={getFeaturedProjects(locale, 12)} />
    </main>
  );
}
