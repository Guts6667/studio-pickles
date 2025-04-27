// src/app/[locale]/layout.jsx

import Footer from "../components/Footer";
import Header from "../components/Header";
import "../globals.css";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
});

export default async function LocaleLayout({ children, params }) {
  return (
    <html
      lang={params.locale}
      className={`${instrumentSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-sans antialiased text-zinc-900 bg-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}