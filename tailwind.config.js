/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#f4faf3",
        primary: "#6fb95c",
        secondary: "#95d1bc",
        accent: "#7dc7c2",
      },
    },
  },
  plugins: [require("daisyui")],
};
