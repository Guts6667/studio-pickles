// middleware.ts  (à la racine du repo)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;            // ignore /favicon.ico, etc.
const locales = ["en", "fr"];             // + "nl" plus tard
const defaultLocale = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore fichiers statiques et API
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith("/api")) {
    return;
  }

  // Si le path commence déjà par /en ou /fr → OK
  if (locales.some((loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`)) {
    return;
  }

  // Sinon, on redirige vers la locale par défaut
  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Activer le middleware sur toutes les routes
export const config = {
  matcher: "/((?!_next).*)",
};