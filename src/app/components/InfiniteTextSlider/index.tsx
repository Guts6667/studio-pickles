"use client";

import Marquee from "react-fast-marquee";

const CLIENTS = [
  "SCIENCES CO",
  "SAUDIEXCELLENCE CO",
  "DROPPER BY EDMC",
  "EDGE DYNAMICS",
  "MBUZZ",
  "AG DESIGNS",
  "GÛT",
  "MARGUERITE",
  "LA MER",
  "A.C. VENTURE",
  "ZNOJMO FC",
  "KARMA INK",
] as const;

export default function InfiniteTextSlider() {
  return (
    <Marquee
      pauseOnHover
      speed={40}          // ajustable : px/s
      gradient={false}    // tu ajouteras ton overlay custom au-dessus
      className="py-6"
    >
      {CLIENTS.map((name) => (
        <span
          key={name}
          className="mx-8 whitespace-nowrap text-[32px] text-xl font-medium md:text-2xl lg:text-3xl tracking-wider uppercase"
        >
          {name}
        </span>
      ))}
    </Marquee>
  );
}