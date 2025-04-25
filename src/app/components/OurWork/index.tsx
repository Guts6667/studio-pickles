import React from "react";
import items from "../../../../public/data/portfolio.json";
import OurWorkItem from "../OurWorkItem";
export default function OurWork() {
  console.log(items);
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-[12px] px-[12px]">
      {items.map((item, index) => (
        <OurWorkItem key={index} item={item} />
      ))}
    </section>
  );
}
