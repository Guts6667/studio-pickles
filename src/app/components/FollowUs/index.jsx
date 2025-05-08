import React from "react";
import SocialItem from "../SocialItem";

export default function FollowUs() {
  const socialItems = [
    // {
    //   name: "Instagram",
    //   link: "https://www.instagram.com/yourprofile",
    // },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yourprofile",
    },
    {
      name: "Whatsapp",
      link: "https://wa.me/+33644167776",
    },
    {
      name: "Mail",
      link: "mailto:contact@studiopickles.io",
    },
  ];

  const title = "FOLLOW US-";
  const repeatedTitle = title.repeat(40);
  return (
    <section className="overflow-hidden py-[48px] flex flex-col gap-[48px]">
      <div className="relative">
        <h2 className="text-[32px] whitespace-nowrap tracking-widest">
          {repeatedTitle}
        </h2>
        <div className="absolute z-10 h-full w-full top-0 left-0 inset-0 pointer-events-none bg-gradient-to-r from-black via-black/10 via-white/0 via-black/10  to-black" />
      </div>
      <div>
        {socialItems.map((item, index) => (
          <SocialItem key={index} name={item.name} link={item.link} />
        ))}
      </div>
    </section>
  );
}
