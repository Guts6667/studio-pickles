import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, isValidLocale } from "./lib/site";

const messages = {
  fr: {
    title: "Cette page est introuvable.",
    description: "Retrouvez nos réalisations, nos services et les coordonnées du studio depuis l’accueil.",
    home: "Retour à l’accueil",
  },
  en: {
    title: "This page could not be found.",
    description: "Find our work, services and contact details from the home page.",
    home: "Back to home",
  },
  nl: {
    title: "Deze pagina is niet gevonden.",
    description: "Bekijk onze projecten, diensten en contactgegevens op de startpagina.",
    home: "Terug naar de startpagina",
  },
};

export default async function NotFound() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-site-locale");
  const locale = isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const text = messages[locale];

  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="section-frame flex max-w-xl flex-col items-center gap-5 p-8 text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-4xl lg:text-5xl">{text.title}</h1>
        <p className="body-muted text-sm leading-7">
          {text.description}
        </p>
        <Link
          href={`/${locale}`}
          className="rounded-full bg-white px-6 py-3 text-sm text-black transition-transform hover:scale-[1.02]"
        >
          {text.home}
        </Link>
      </div>
    </main>
  );
}
