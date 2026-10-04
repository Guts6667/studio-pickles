import Link from "next/link";
import { business, formatBusinessAddress } from "../../lib/business";
import { getSiteContent } from "../../lib/site";
import { buildPageMetadata } from "../../lib/seo";

const labels = {
  fr: {
    title: "Mentions légales",
    intro: "Informations sur l’éditeur du site Pickles Studio et les moyens de le contacter.",
    editor: "Éditeur du site", name: "Nom / raison sociale", status: "Statut juridique",
    registration: "Immatriculation", address: "Adresse", director: "Directeur de la publication",
    capital: "Capital social", vat: "Numéro de TVA", host: "Hébergement", phone: "Téléphone",
    privacy: "Données personnelles", privacyIntro: "Consultez notre politique de confidentialité et les informations sur les cookies pour connaître le fonctionnement du site et exercer vos droits.",
    rights: "Propriété intellectuelle", rightsIntro: "Les contenus, textes et éléments graphiques du studio sont protégés. Les noms, marques et visuels de projets clients restent la propriété de leurs titulaires respectifs. Toute réutilisation doit respecter leurs droits et les autorisations applicables.",
  },
  en: {
    title: "Legal notice",
    intro: "Information about the publisher of the Pickles Studio website and how to contact the studio.",
    editor: "Website publisher", name: "Name / registered business name", status: "Legal status",
    registration: "Registration", address: "Address", director: "Publication director",
    capital: "Share capital", vat: "VAT number", host: "Hosting", phone: "Phone",
    privacy: "Personal data", privacyIntro: "Read our privacy policy and cookie information to understand how the website works and how to exercise your rights.",
    rights: "Intellectual property", rightsIntro: "The studio’s content, text and graphic elements are protected. Client names, trademarks and project visuals remain the property of their respective owners. Reuse must respect their rights and the applicable permissions.",
  },
  nl: {
    title: "Juridische informatie",
    intro: "Informatie over de uitgever van de Pickles Studio-website en hoe je contact opneemt met de studio.",
    editor: "Website-uitgever", name: "Naam / geregistreerde bedrijfsnaam", status: "Rechtsvorm",
    registration: "Registratie", address: "Adres", director: "Publicatieverantwoordelijke",
    capital: "Maatschappelijk kapitaal", vat: "Btw-nummer", host: "Hosting", phone: "Telefoon",
    privacy: "Persoonsgegevens", privacyIntro: "Lees ons privacybeleid en onze cookie-informatie om te begrijpen hoe de website werkt en hoe je je rechten kunt uitoefenen.",
    rights: "Intellectueel eigendom", rightsIntro: "De inhoud, teksten en grafische elementen van de studio zijn beschermd. Klantnamen, merken en projectbeelden blijven eigendom van hun respectieve rechthebbenden. Hergebruik moet hun rechten en de toepasselijke toestemmingen respecteren.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const text = labels[locale] || labels.fr;
  return buildPageMetadata(locale, { title: text.title, description: text.intro, path: "/legal-notice" });
}

export default async function LegalNoticePage({ params }) {
  const { locale } = await params;
  const text = labels[locale] || labels.fr;
  const content = getSiteContent(locale);
  const rows = [
    [text.name, business.legalName], [text.status, business.legalStatus],
    [text.registration, business.registration], [text.address, formatBusinessAddress()],
    [text.director, business.publicationDirector], [text.capital, business.capital],
    [text.vat, business.vatNumber],
  ].filter(([, value]) => value);

  return (
    <main className="page-shell flex flex-col gap-10 pb-20 pt-8 lg:pt-12">
      <section className="section-frame flex flex-col gap-6 p-6 lg:p-8">
        <h1 className="text-4xl lg:text-6xl">{text.title}</h1>
        <p className="body-muted max-w-3xl text-sm leading-7">{text.intro}</p>
        <time dateTime="2026-10-04" className="text-sm text-white/45">{content.legal.updated}</time>
      </section>
      <section className="section-frame flex flex-col gap-5 p-6">
        <h2 className="eyebrow">{text.editor}</h2>
        <p className="text-xl">{business.name}</p>
        <dl className="grid gap-4">
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 sm:grid-cols-[220px_1fr]">
              <dt className="body-muted text-sm">{label}</dt>
              <dd className="text-sm leading-7">{value}</dd>
            </div>
          ))}
        </dl>
        <a className="break-all hover:text-[var(--accent)]" href={`mailto:${business.email}`}>{business.email}</a>
        <a className="hover:text-[var(--accent)]" href={`tel:${business.phone}`}>{business.phoneDisplay}</a>
      </section>
      {business.hosting ? (
        <section className="section-frame flex flex-col gap-3 p-6">
          <h2 className="eyebrow">{text.host}</h2>
          <p>{business.hosting.name}</p>
          <address className="body-muted text-sm not-italic leading-7">{business.hosting.address}</address>
          <p className="body-muted text-sm">{text.phone} : {business.hosting.phone}</p>
        </section>
      ) : null}
      <section className="section-frame flex flex-col gap-3 p-6">
        <h2 className="eyebrow">{text.privacy}</h2>
        <p className="body-muted text-sm leading-7">{text.privacyIntro}</p>
        <Link className="hover:text-[var(--accent)]" href={`/${locale}/privacy-policy`}>{content.footer.privacy}</Link>
        <Link className="hover:text-[var(--accent)]" href={`/${locale}/cookie-policy`}>{content.footer.cookies}</Link>
      </section>
      <section className="section-frame flex flex-col gap-3 p-6">
        <h2 className="eyebrow">{text.rights}</h2>
        <p className="body-muted text-sm leading-7">{text.rightsIntro}</p>
      </section>
    </main>
  );
}
