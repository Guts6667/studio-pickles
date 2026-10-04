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
    title: "Agence web à Montpellier, Paris et Rotterdam",
    description:
      "Sites web, design UX/UI et applications : Pickles Studio accompagne les entreprises à Montpellier, Paris et Rotterdam, en France et aux Pays-Bas.",
  },
  en: {
    title: "Web design in Montpellier, Paris & Rotterdam",
    description:
      "Websites, UX/UI design and applications: Pickles Studio supports businesses in Montpellier, Paris and Rotterdam, across France and the Netherlands.",
  },
  nl: {
    title: "Webdesign in Montpellier, Parijs en Rotterdam",
    description:
      "Websites, UX/UI-design en applicaties: Pickles Studio begeleidt bedrijven in Montpellier, Parijs en Rotterdam, in Frankrijk en Nederland.",
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
        locale={locale}
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
