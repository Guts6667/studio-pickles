import Hero from "../components/Hero";
import OurWork from "../components/OurWork";
import OurServices from "../components/OurServices";
import OurClients from "../components/OurClients";
import FollowUs from "../components/FollowUs";
import ContactUs from "../components/ContactUs";
import getMessages from "../lib/i18n";

export default async function LocaleHome({ params }: any) {
  const t = await getMessages(params.slug);

  return (
    <main className="flex flex-col gap-[96px]">
      <Hero hero={t.hero} />
      <OurWork />
      <OurServices services={t.ourServices} />
      <OurClients clients={t.ourClients} />
      <FollowUs />
      <ContactUs />
    </main>
  );
}
