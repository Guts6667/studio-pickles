import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en", "nl"];
const defaultLocale = "fr";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1];

  if (locales.includes(locale)) {
    const requestHeaders = new Headers(request.headers);
    // Derive the document language from the URL, never from a visitor's header.
    requestHeaders.set("x-site-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (/\.[^/]+$/.test(pathname) || pathname.startsWith("/_next/") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
