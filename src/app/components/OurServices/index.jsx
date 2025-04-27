import Image from "next/image";
import React from "react";

export default function OurServices({services}) 

{
  return (
    <section className="h-fit gap-[12px] grid grid-cols-1 lg:grid-cols-2  bg-[url('/img/bg-pickles.jpg')] bg-linear-to-b from-black/0 to-black bg-black/50 bg-cover bg-center bg-no-repeat lg:bg-none">
      {/* Dark Layer */}
      <div className=" h-fit px-[12px]  py-[48px] bg-linear-to-b from-black/0 to-black bg-black/50 bg-cover bg-center bg-no-repeat lg:bg-none">
        {/* Text */}
        <div className=" flex flex-col gap-[48px] px-[24px]  border-l-[.5px] border-white/30">
          <h2 className="text-[24px] 3xl:text-[32px]">[{services.title}]</h2>
          <div className="flex flex-col gap-[12px] text-[20px] md:text-[32px] 3xl:text-[48px] h-fit ">
            {services.services.map((service, index) => (
              <p key={index}>{service}</p>
            ))}
          </div>
        </div>
        {/* Right Image */}
      </div>
      {/* Image */}
      <div className=" max-lg:hidden  h-[100%] overflow-hidden   py-[48px] px-[36px] bg-[url('/img/komarov-egor-oYpRcZt2xGk-unsplash.jpg')] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
}
