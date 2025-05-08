import Link from "next/link";
import React from "react";

export default function ContactUs({contact}) {
  return (
    <section className="py-[48px] grid @max-lg:grid-rows-3 lg:grid-cols-2 ">
      <div className="hidden lg:flex"></div>
      <div className="flex flex-col gap-[48px] px-[36px] border-l-[.5px] border-white/30 ">
        <h2 className="text-[24px]  3xl:text-[32px]">[{contact.title}]</h2>
        <div className="lg:grid lg:grid-cols-3 ">
          <div className="text-left flex flex-col gap-[24px]  ">
            <h3 className="text-[16px]">SITEMAP</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              {contact.links.map((link, index) => (
                <Link className="uppercase" key={index} href={link.url}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center lg:text-left flex flex-col gap-[24px]">
            <h3 className="text-[16px]">CONTACT</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              <Link href="mailto:contact@studiopickles.io">CONTACT@STUDIOPICKLES.IO</Link>
              <Link href="https://wa.me/+33644167776">WHATSAPP</Link>
            </div>
          </div>
          <div className="text-right lg:text-left flex flex-col gap-[24px]">
            <h3 className="text-[16px]">FOLLOW US</h3>
            <div className="flex flex-col gap-[6px] text-[12px]">
              <Link href="https://www.linkedin.com/company/studio-pickles/" target="_blank">LINKEDIN</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
