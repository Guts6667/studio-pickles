import ContactUs from "../components/ContactUs";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import StructuredData from "../components/StructuredData";
import getMessages from "../lib/i18n";
import { buildBusinessStructuredData, buildPageMetadata } from "../lib/seo";
import {
  getClientNames,
  getFeaturedProjects,
  getNavItems,
  getSocialLinks,
  getServices,
} from "../lib/site";

const pageMetadata = {
  fr: {
    title: "Agence web et design à Montpellier",
    description:
      "Pickles Studio accompagne les entreprises à Montpellier : création de sites web, design UX/UI, stratégie produit et développement d’applications.",
  },
  en: {
    title: "Web design & development in Montpellier",
    description:
      "Pickles Studio helps businesses in Montpellier with website creation, UX/UI design, product strategy and web application development.",
  },
  nl: {
    title: "Webdesign en ontwikkeling in Montpellier",
    description:
      "Pickles Studio helpt bedrijven in Montpellier met websites, UX/UI-design, productstrategie en de ontwikkeling van webapplicaties.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata(locale, pageMetadata[locale] || pageMetadata.fr);
}

export default async function LocaleHome({ params }) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <main className="flex flex-col gap-20 pb-20">
      <StructuredData data={buildBusinessStructuredData(locale)} />
      <Hero hero={t.hero} locale={locale} />
      <OurWork
        locale={locale}
        title={t.home.workTitle}
        intro={t.home.workIntro}
        projects={getFeaturedProjects(locale)}
      />
      <OurServices
        title={t.home.servicesTitle}
        services={getServices(locale)}
      />
      <OurClients
        title={t.home.clientsTitle}
        intro={t.home.clientsIntro}
        clients={getClientNames()}
      />
      <FollowUs
        title={t.home.followTitle}
        marquee={t.home.followMarquee}
        socialItems={getSocialLinks(locale)}
      />
      <ContactUs
        locale={locale}
        title={t.contactBlock.title}
        navItems={getNavItems(locale)}
        sectionLabels={t.contactBlock}
      />
    </main>
  );
}
