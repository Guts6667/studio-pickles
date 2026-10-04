import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getProjectBySlug } from "./app/lib/site";
import { isSupportedLocale, localeCookieName, resolveVisitorLocale } from "./app/lib/locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1];

  if (isSupportedLocale(locale)) {
    const requestHeaders = new Headers(request.headers);
    // Derive the document language from the URL, never from a visitor's header.
    requestHeaders.set("x-site-locale", locale);
    const projectRoute = pathname.match(/^\/(?:fr|en|nl)\/portfolio\/([^/]+)\/?$/);
    if (projectRoute && !getProjectBySlug(locale, projectRoute[1])) {
      // Unmatched routes render the localized 404 as HTML, including without JavaScript.
      const notFoundUrl = request.nextUrl.clone();
      notFoundUrl.pathname = `/${locale}/404`;
      return NextResponse.rewrite(notFoundUrl, { request: { headers: requestHeaders } });
    }
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  if (/\.[^/]+$/.test(pathname) || pathname.startsWith("/_next/") || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  const visitorLocale = resolveVisitorLocale({
    preference: request.cookies.get(localeCookieName)?.value,
    country: request.headers.get("x-vercel-ip-country"),
    acceptLanguage: request.headers.get("accept-language"),
  });
  url.pathname = `/${visitorLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url, 307);
  // The destination depends on this visitor and must never become a cached permanent redirect.
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "Cookie, Accept-Language, X-Vercel-IP-Country");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
