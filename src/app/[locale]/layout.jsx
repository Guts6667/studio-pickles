import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { isValidLocale, locales } from "../lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </div>
  );
}
