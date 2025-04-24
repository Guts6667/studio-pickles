// import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", ...fontFamily.sans],
        serif: ["var(--font-instrument-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],              
};