import React from "react";
import InfiniteTextSlider from "../InfiniteTextSlider";

export default function OurClients({
  clients,
}: {
  clients: { title: string };
}) {
  return (
    <section className="py-[48px] flex flex-col gap-[48px]">
      <h2 className="px-[36px] text-[24px] 3xl:text-[32px]">
        [{clients.title}]
      </h2>
      <div className="relative">
        <InfiniteTextSlider />
        <div className="absolute z-10 h-full w-full top-0 left-0 inset-0 pointer-events-none bg-gradient-to-r from-black via-black/10 via-white/0 via-black/10  to-black" />
      </div>
    </section>
  );
}
