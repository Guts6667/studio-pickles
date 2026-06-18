"use client";

import Marquee from "react-fast-marquee";

export default function InfiniteTextSlider({ clients = [] }) {
  return (
    <Marquee pauseOnHover speed={38} gradient={false} className="py-7">
      {clients.map((name) => (
        <span
          key={name}
          className="mx-8 whitespace-nowrap text-lg uppercase tracking-[0.18em] text-white/72 lg:text-3xl"
        >
          {name}
        </span>
      ))}
    </Marquee>
  );
}
