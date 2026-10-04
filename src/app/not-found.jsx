import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="section-frame flex max-w-xl flex-col items-center gap-5 p-8 text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-4xl lg:text-5xl">Cette page est introuvable.</h1>
        <p className="body-muted text-sm leading-7">
          Retrouvez nos réalisations, nos services et les coordonnées du studio depuis l’accueil.
        </p>
        <Link
          href="/fr"
          className="rounded-full bg-white px-6 py-3 text-sm text-black transition-transform hover:scale-[1.02]"
        >
          Retour à l’accueil
        </Link>
      </div>
    </main>
  );
}
