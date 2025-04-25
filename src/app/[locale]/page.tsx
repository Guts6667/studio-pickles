// src/app/[locale]/page.tsx
import Hero from "../components/Hero";
import OurClients from "../components/OurClients";
import OurServices from "../components/OurServices";
import OurWork from "../components/OurWork";
import getMessages from "../lib/i18n";

type PageProps = { params: { locale: string } };

export default async function LocaleHome({ params }: PageProps) {
  const t = await getMessages(params.locale);

  return (
    <main className="flex flex-col gap-[48px]">
      <Hero hero={t.hero} />
      <OurWork />
      <OurServices />
      <OurClients />
    </main>
  );
}
