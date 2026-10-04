// Public business information, shared by contact pages, legal notices and SEO.
// Defaults match the existing public domain and the business details provided.
export function parsePublicSiteUrl(value) {
  if (!value?.trim()) return null;
  const url = new URL(value.trim());
  const host = url.hostname.toLowerCase();
  if (
    url.protocol !== "https:" ||
    url.username || url.password || url.port ||
    url.pathname !== "/" || url.search || url.hash ||
    !host.includes(".") ||
    /^(localhost|127\.|0\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host) ||
    /(^|\.)(localhost|local|test|invalid|example)$/.test(host) ||
    /(^|\.)(example\.(com|org|net))$/.test(host)
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL doit être l’origine HTTPS du domaine public, sans chemin ni paramètres.");
  }
  return url;
}

export const siteUrl = parsePublicSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://www.studiopickles.io");
export const publicSiteConfigured = Boolean(siteUrl) &&
  process.env.SITE_INDEXING_ENABLED !== "false" &&
  process.env.VERCEL_ENV !== "preview";

const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@studiopickles.io";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+33644167776";
const streetAddress = process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS || "59 rue de Ponthieu";
const addressLocality = process.env.NEXT_PUBLIC_BUSINESS_CITY || "Paris";
const postalCode = process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE || "75008";
// Hosting identity: https://vercel.com/legal/privacy-notice and /legal/dmca-policy.
const hostingName = process.env.NEXT_PUBLIC_HOSTING_NAME || "Vercel Inc.";
const hostingAddress = process.env.NEXT_PUBLIC_HOSTING_ADDRESS || "440 N Barranca Avenue #4133, Covina, CA 91723, United States";
const hostingPhone = process.env.NEXT_PUBLIC_HOSTING_PHONE || "+1 559 288 7060";

export const business = {
  name: "Pickles Studio",
  email,
  phone,
  phoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || "+33 6 44 16 77 76",
  whatsappUrl: `https://wa.me/${phone.replace(/\D/g, "")}`,
  location: "Montpellier",
  serviceAreas: ["Montpellier", "France"],
  legalName: process.env.NEXT_PUBLIC_BUSINESS_LEGAL_NAME || "Rayan Chambet EI",
  legalStatus: process.env.NEXT_PUBLIC_BUSINESS_LEGAL_STATUS || "Entrepreneur individuel — micro-entreprise, profession libérale non réglementée",
  registration: process.env.NEXT_PUBLIC_BUSINESS_REGISTRATION || "SIREN 820 401 990 — SIRET 820 401 990 00024",
  publicationDirector: process.env.NEXT_PUBLIC_PUBLICATION_DIRECTOR || "Rayan Chambet",
  vatNumber: process.env.NEXT_PUBLIC_BUSINESS_VAT_NUMBER,
  capital: process.env.NEXT_PUBLIC_BUSINESS_CAPITAL,
  address: streetAddress && addressLocality && postalCode ? {
    streetAddress,
    addressLocality,
    postalCode,
    addressCountry: process.env.NEXT_PUBLIC_BUSINESS_COUNTRY || "FR",
  } : undefined,
  hosting: hostingName && hostingAddress && hostingPhone ? {
    name: hostingName,
    address: hostingAddress,
    phone: hostingPhone,
  } : undefined,
};

export function absoluteUrl(path = "/") {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

export function formatBusinessAddress() {
  if (!business.address) return undefined;
  const { streetAddress, postalCode, addressLocality, addressCountry } = business.address;
  return `${streetAddress}, ${postalCode} ${addressLocality}, ${addressCountry}`;
}
