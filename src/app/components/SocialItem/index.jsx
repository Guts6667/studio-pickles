import React from "react";

export default function SocialItem({ name, link }) {
  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className="group hover:bg-white hover:text-black text-[32px] lg:text-[48px] px-[48px] py-[24px]  flex items-center justify-between transition-all duration-300 ease-in-out"
    >
      <span>{name}</span>
      <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
      >
        <path
          d="M11.2317 0.842777C11.4504 0.623286 11.747 0.5 12.0561 0.5C12.3653 0.5 12.6619 0.623286 12.8806 0.842777L20.6588 8.6566C20.8773 8.87637 21 9.17427 21 9.48487C21 9.79547 20.8773 10.0934 20.6588 10.3131L12.8806 18.127C12.7738 18.2421 12.645 18.3345 12.5019 18.3985C12.3588 18.4626 12.2043 18.497 12.0476 18.4998C11.891 18.5026 11.7354 18.4736 11.5901 18.4147C11.4448 18.3557 11.3128 18.268 11.202 18.1567C11.0913 18.0454 11.0039 17.9128 10.9452 17.7669C10.8866 17.6209 10.8577 17.4646 10.8605 17.3073C10.8633 17.1499 10.8976 16.9947 10.9613 16.8509C11.0251 16.7071 11.117 16.5777 11.2317 16.4704L17.0186 10.6569H1.16672C0.857289 10.6569 0.560528 10.5335 0.341725 10.3136C0.122922 10.0938 0 9.79572 0 9.48487C0 9.17401 0.122922 8.87589 0.341725 8.65609C0.560528 8.43628 0.857289 8.31279 1.16672 8.31279H17.0186L11.2317 2.49931C11.0132 2.27954 10.8904 1.98164 10.8904 1.67104C10.8904 1.36044 11.0132 1.06254 11.2317 0.842777Z"
          // fill="white"
          className="fill-white group-hover:fill-black "
        />
      </svg>
    </a>
  );
}
