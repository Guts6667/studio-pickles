import Link from "next/link";
import React from "react";

export default async function Footer() {
  return (
    <footer className="px-[12px] pt-[92px] pb-[12px] grid grid-cols-1  lg:grid-cols-3 text-black bg-white">

      <div className="flex flex-col @max-lg:items-center">
        <h2 className="text-[32px] text-center lg:text-left">
          <strong className="text-bold">Pickles</strong>
          <em className="font-serif text-italic">Studio</em>
        </h2>
        <p className="block lg:hidden  text-center text-[10px] ">All Right Reserved. Copyrights 2025 ©</p>
      </div>


      <div className="flex justify-between lg:grid lg:col-span-2 lg:items-end lg:grid-cols-3 text-[10px] ">
      <p className="hidden lg:block">All Right Reserved. Copyrights 2025 ©</p>
        <Link href={"/"}>Privacy Policy</Link>
        <Link href={"/"}>Cookie Policy</Link>
      </div>
    </footer>
  );
}
