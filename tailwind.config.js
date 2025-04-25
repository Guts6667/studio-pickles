// import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],

  /* 1️⃣  la section `theme` */
  theme: {
    extend: {
      /* polices */
      fontFamily: {
        sans: ["var(--font-instrument-sans)", ...fontFamily.sans],
        serif: ["var(--font-instrument-serif)", ...fontFamily.serif],
      },

      /* gradient bas */
      backgroundImage: {
        "fade-b":
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 94%)",
      },

      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "slide-infinite": "slide 20s linear infinite",
      },
    },
  },

  plugins: [],
};
