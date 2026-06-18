import OurWork from "../../components/OurWork";
import PageIntro from "../../components/PageIntro";
import { getFeaturedProjects, getSiteContent } from "../../lib/site";

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
