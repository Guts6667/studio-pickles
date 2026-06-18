import Image from "next/image";
import Link from "next/link";
import { getSiteContent } from "../../lib/site";

export default function OurWorkItem({ item, locale }) {
  const content = getSiteContent(locale);

  return (
    <Link
      href={`/${locale}/portfolio/${item.slug}`}
      className="group relative aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
    >
      <Image
        src={item.heroImage}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        width={1200}
        height={900}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/90" />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-3 p-5 lg:p-6">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.12em] text-white/65">
          <span>{item.client}</span>
          <span>{item.year}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl leading-tight text-white lg:text-3xl">
            {item.title}
          </h3>
          <p className="line-clamp-3 max-w-[34ch] text-sm leading-6 text-white/78">
            {item.summary}
          </p>
        </div>
        <span className="pt-1 text-xs uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-[var(--accent)]">
          {content.common.discover}
        </span>
      </div>
    </Link>
  );
}
