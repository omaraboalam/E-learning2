/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9500",
        secondary: "#F2F2F2",
        tertiary: "#E5E5E5",
        quaternary: "#FFFFFF",
        quinary: "#000000",
        senary: "#4F4F4F",
        septenary: "#828282",
        octonary: "#BDBDBD",
        nonary: "#333333",

        white99: "#FCFCFD",
        white97: "#F7F7F8",
        white95: "#F1F1F3",

        orange95: "#FFF4E5",

        gray10: "#1A1A1A",
        gray15: "#262626",
        gray20: "#333333",
        gray30: "#4C4C4D",
        gray35: "#59595A",
      },
      fontFamily: {
        BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
