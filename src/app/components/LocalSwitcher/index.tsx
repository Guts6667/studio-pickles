// components/LocaleSwitcher.tsx
"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathname = usePathname() || "/";
  return (
    <nav className="flex gap-2">
      {["en", "fr"].map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${pathname.slice(3)}`}    // enlève /en ou /fr du chemin
          className="underline"
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}