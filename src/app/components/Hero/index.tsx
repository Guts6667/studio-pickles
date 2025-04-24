// src/components/Hero.tsx
import Image from "next/image";

export default function Hero({hero}: {hero: {sub: string; headline: string}}) {
  return (
    <section className=" flex flex-col gap-[12px] min-h-[90vh] items-center justify-center bg-black text-center px-[12px] ">
      <h1 className="text-[14vw] lg:text-[10vw] ">
        <strong className="bg-[url('/img/bg-pickles.jpg')] bg-cover  bg-left bg-clip-text text-transparent text-bold">
          Pickles
        </strong>
        <em className="font-serif text-italic">Studio</em>
      </h1>
      <p className="text-[12px] lg:text-[20px] text-white/90 uppercase whitespace-pre-line">
        {hero.sub}
        <br />
        {hero.headline}
      </p>
    </section>
  );
}
