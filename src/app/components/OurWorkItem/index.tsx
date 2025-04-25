import Image from "next/image";
import React from "react";

export default function OurWorkItem({ item }: { item: any }) {
  const hash = [...item.title].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const variant = ["hover-up", "hover-down", "hover-left", "hover-right"][
    hash % 4
  ];
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]  group ">

      <Image
        src={`/img/${item.image}`}
        alt={item.title}
        className="relative h-[100%] w-full  object-cover group-hover:translate-x-2 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        width={400}
        height={400}
      />
      {/* Overlay */}
      <div className="absolute z-10 top-0 left-0  inset-0  bg-gradient-to-b from-white/0 via-white/0  via-black/10 via-black/90 to-black  "></div>
   
    </div>
  );
}
