import Link from "next/link";
import React from "react";

export default function ContactUs() {
  return (
    <section className="py-[48px] grid @max-lg:grid-rows-3 lg:grid-cols-2 ">
      <div className="hidden lg:flex"></div>
      <div className="flex flex-col gap-[48px] px-[36px] border-l-[.5px] border-white/30 ">
        <h2 className="text-[24px]  3xl:text-[32px]">[Contact Us]</h2>
        <div className="lg:grid lg:grid-cols-3 ">
          <div className="text-left flex flex-col gap-[24px]  ">
            <h3 className="text-[16px]">SITEMAP</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              <Link href="/">HOME</Link>
              <Link href="/portfolio">PORTFOLIO</Link>
              <Link href="/services">SERVICES</Link>
              <Link href="/about">ABOUT</Link>
            </div>
          </div>
          <div className="text-center lg:text-left flex flex-col gap-[24px]">
            <h3 className="text-[16px]">CONTACT</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              <Link href="mailto:">CONTACT@PICKLES.COM</Link>
              <Link href="+33644167776">+33 6 44 16 77 76</Link>
            </div>
          </div>
          <div className="text-right lg:text-left flex flex-col gap-[24px]">
            <h3 className="text-[16px]">FOLLOW US</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              <Link href="mailto:">INSTAGRAM</Link>
              <Link href="+33644167776">LINKEDIN</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
