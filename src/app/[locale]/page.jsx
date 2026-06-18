import ContactUs from "../components/ContactUs";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import getMessages from "../lib/i18n";
import {
  getClientNames,
  getFeaturedProjects,
  getNavItems,
  getSocialLinks,
  getServices,
} from "../lib/site";

export default async function LocaleHome({ params }) {
  const { locale } = await params;
  const t = getMessages(locale);

  return (
    <main className="flex flex-col gap-20 pb-20">
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
