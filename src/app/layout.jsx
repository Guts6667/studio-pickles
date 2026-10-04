import "./globals.css";
import { headers } from "next/headers";
import { publicSiteConfigured, siteUrl } from "./lib/business";
import { defaultLocale, isValidLocale } from "./lib/site";

export const metadata = {
  metadataBase: siteUrl || undefined,
  title: { default: "Pickles Studio — Agence web à Montpellier, Paris et Rotterdam", template: "%s | Pickles Studio" },
  description:
    "Sites web, design UX/UI et applications : Pickles Studio accompagne les entreprises à Montpellier, Paris et Rotterdam, en France et aux Pays-Bas.",
  applicationName: "Pickles Studio",
  robots: { index: publicSiteConfigured, follow: publicSiteConfigured },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-site-locale");
  const locale = isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
