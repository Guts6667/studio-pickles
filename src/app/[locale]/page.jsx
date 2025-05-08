// src/app/[locale]/page.jsx

import ContactUs from "../components/ContactUs";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import getMessages from "../lib/i18n";

export default async function LocaleHome({ params }) {
  const t = await getMessages(params.locale);

  return (
    <main className="flex flex-col gap-[96px]">
      <Hero hero={t.hero} />
      <OurWork />
      <OurServices services={t.ourServices} />
      <OurClients clients={t.ourClients} />
      <FollowUs />
      <ContactUs contact={t.contactUs} />
    </main>
  );
}