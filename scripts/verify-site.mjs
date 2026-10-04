import assert from "node:assert/strict";

// Run against a production build, or pass the deployed origin as the first arg.
const origin = process.argv[2] || "http://localhost:3000";
const canonicalOrigin = process.env.NEXT_PUBLIC_SITE_URL || "https://www.studiopickles.io";
const namespaces = { sitemap: "http://www.sitemaps.org/schemas/sitemap/0.9" };
const pages = ["", "/services", "/about", "/portfolio", "/contact", "/legal-notice", "/privacy-policy", "/cookie-policy"];
const forbidden = /placeholder|lorem ipsum|to be confirmed|restent à confirmer|version juridique finale/i;
const notFoundMessages = {
  fr: { title: "Cette page est introuvable.", home: "Retour à l’accueil" },
  en: { title: "This page could not be found.", home: "Back to home" },
  nl: { title: "Deze pagina is niet gevonden.", home: "Terug naar de startpagina" },
};

function decodeText(value) {
  const entities = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (match, entity) => {
    if (entity.startsWith("#")) {
      const hexadecimal = entity[1].toLowerCase() === "x";
      return String.fromCodePoint(parseInt(entity.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10));
    }
    return entities[entity.toLowerCase()] || match;
  });
}

// Inspect actual HTML nodes. RSC payloads and hidden ancestors cannot satisfy a visible heading or link.
function visibleElements(html) {
  const markup = html
    .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
  const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
  const elements = [];
  const stack = [];
  const tokens = markup.match(/<\/?[a-z][\w:-]*\b(?:[^"'<>]|"[^"]*"|'[^']*')*>|[^<]+/gi) || [];

  for (const token of tokens) {
    const tag = token.match(/^<(\/?)([\w:-]+)/);
    if (!tag) {
      if (!stack.at(-1)?.hidden) {
        for (const element of stack) element.text += decodeText(token);
      }
      continue;
    }

    const name = tag[2].toLowerCase();
    if (tag[1]) {
      const index = stack.findLastIndex((element) => element.tag === name);
      if (index !== -1) stack.splice(index);
      continue;
    }

    const attributes = {};
    const attributeText = token.slice(tag[0].length, -1);
    for (const attribute of attributeText.matchAll(/([^\s=\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)) {
      attributes[attribute[1].toLowerCase()] = decodeText(attribute[2] ?? attribute[3] ?? attribute[4] ?? "");
    }
    const hidden = Boolean(stack.at(-1)?.hidden) || "hidden" in attributes ||
      attributes["aria-hidden"] === "true" ||
      /(?:^|\s)(?:hidden|invisible|sr-only)(?:\s|$)/.test(attributes.class || "") ||
      /(?:display\s*:\s*none|visibility\s*:\s*hidden)/i.test(attributes.style || "");
    const element = { tag: name, attributes, hidden, text: "" };
    elements.push(element);
    if (!voidTags.has(name) && !/\/\s*>$/.test(token)) stack.push(element);
  }

  return elements.filter((element) => !element.hidden).map((element) => ({
    ...element,
    text: element.text.replace(/\s+/g, " ").trim(),
  }));
}

async function read(path, expectedStatus = 200) {
  const response = await fetch(new URL(path, origin), { redirect: "manual" });
  assert.equal(response.status, expectedStatus, `${path}: HTTP ${response.status}`);
  return { response, html: await response.text() };
}

const root = await read("/", 308);
assert.equal(new URL(root.response.headers.get("location"), origin).pathname, "/fr");
const { html: robots } = await read("/robots.txt");
assert.match(robots, /Allow: \/(?:\r?\n|$)/);
assert.ok(robots.includes(`${canonicalOrigin}/sitemap.xml`));
const { html: verification } = await read("/google7e22f4b13867d8b5.html");
assert.equal(verification.trim(), "google-site-verification: google7e22f4b13867d8b5.html");
const { html: sitemap } = await read("/sitemap.xml");
assert.ok(sitemap.includes(namespaces.sitemap));
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(locations.length, 42);
assert.equal(new Set(locations).size, 42);
assert.ok(locations.every((url) => new URL(url).origin === new URL(canonicalOrigin).origin));
assert.ok(sitemap.includes('hreflang="x-default"'));

for (const locale of ["fr", "en", "nl"]) {
  const titles = new Set();
  for (const page of pages) {
    const path = `/${locale}${page}`;
    const { html } = await read(path);
    assert.ok(html.includes(`<html lang="${locale}"`), `${path}: document language`);
    assert.ok(!forbidden.test(html), `${path}: provisional content`);
    assert.ok(!html.includes("wa.me/+"), `${path}: invalid WhatsApp URL`);
    assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin}${path}"`), `${path}: canonical`);
    for (const language of ["fr", "en", "nl", "x-default"]) {
      assert.ok(html.includes(`hrefLang="${language}"`), `${path}: ${language} alternate`);
    }
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), `${path}: must be indexable`);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${path}: primary heading`);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title && !titles.has(title), `${path}: unique title`);
    titles.add(title);
    if (["", "/services", "/contact"].includes(page)) {
      for (const city of ["Montpellier", locale === "nl" ? "Parijs" : "Paris", "Rotterdam"]) {
        assert.ok(html.includes(city), `${path}: service area ${city}`);
      }
    }
    if (!page) {
      const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
      assert.ok(json, `${path}: business structured data`);
      const graph = JSON.parse(json)["@graph"];
      for (const city of ["Montpellier", "Paris", "Rotterdam"]) {
        assert.ok(graph.some((entity) => entity.areaServed?.some((area) => area.name === city)), `${path}: structured service area ${city}`);
      }
      assert.ok(graph.some((entity) => entity.address?.addressLocality === "Paris"));
    }
    if (page === "/legal-notice") {
      assert.ok(html.includes("Rayan Chambet EI") && html.includes("820 401 990 00024"));
      assert.ok(html.includes("59 rue de Ponthieu") && html.includes("Vercel Inc."));
    }
  }
}

for (const url of locations.filter((url) => /\/portfolio\/.+/.test(url))) {
  const path = new URL(url).pathname;
  const { html } = await read(path);
  assert.ok(!forbidden.test(html), `${path}: provisional project content`);
  assert.ok(html.includes(`rel="canonical" href="${canonicalOrigin}${path}"`), `${path}: project canonical`);
  assert.ok(!html.includes('href="https://edmc.io') && !html.includes('href="https://mbuzzesports.com'));
}
const notFoundFailures = [];
for (const [locale, expected] of Object.entries(notFoundMessages)) {
  for (const suffix of ["/unknown-page", "/portfolio/unknown-project"]) {
    const path = `/${locale}${suffix}`;
    try {
      const { html } = await read(path, 404);
      const elements = visibleElements(html);
      const headings = elements.filter((element) => element.tag === "h1");
      const homeLinks = elements.filter((element) => element.tag === "a" && element.attributes.href === `/${locale}` && element.text === expected.home);
      if (headings.length !== 1 || headings[0]?.text !== expected.title) {
        notFoundFailures.push(`${path}: expected one visible localized h1 (${expected.title}), found ${JSON.stringify(headings.map((element) => element.text))}`);
      }
      if (homeLinks.length !== 1) {
        notFoundFailures.push(`${path}: expected a visible home link labelled ${JSON.stringify(expected.home)} with href=/${locale}, found ${homeLinks.length}`);
      }
      if (!elements.some((element) => element.tag === "html" && element.attributes.lang === locale)) {
        notFoundFailures.push(`${path}: document language must be ${locale}`);
      }
    } catch (error) {
      notFoundFailures.push(error.message);
    }
  }
}
assert.equal(notFoundFailures.length, 0, `404 rendering failures:\n${notFoundFailures.join("\n")}`);
await read("/data/portfolio.json", 404);
console.log("OK: 42 pages, langues, métadonnées, liens, mentions légales, sitemap, robots et 6 erreurs 404 localisées avec titre et lien visibles.");
