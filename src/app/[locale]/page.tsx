// src/app/[locale]/page.tsx
import Hero from "../components/Hero";
import getMessages from "../lib/i18n";

type PageProps = { params: { locale: string } };

export default async function LocaleHome({ params }: PageProps) {
  const t = await getMessages(params.locale);     

  return (
    <main>
      <Hero hero={t.hero} />
    </main>
  );
}