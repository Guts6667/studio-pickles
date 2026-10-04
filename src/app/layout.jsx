import "./globals.css";
import { headers } from "next/headers";
import { publicSiteConfigured, siteUrl } from "./lib/business";
import { defaultLocale, isValidLocale } from "./lib/site";

export const metadata = {
  metadataBase: siteUrl || undefined,
  title: { default: "Pickles Studio — Design et création de sites à Montpellier", template: "%s | Pickles Studio" },
  description:
    "Pickles Studio accompagne les entreprises de Montpellier en stratégie produit, design UX/UI, création de sites internet et applications web.",
  applicationName: "Pickles Studio",
  robots: { index: publicSiteConfigured, follow: publicSiteConfigured },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-site-locale");
  const locale = isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
