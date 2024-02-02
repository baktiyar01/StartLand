/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      md: "1024px",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "rgba(2, 78, 223, 1)",
      },
      spacing: {
        20: "5rem",
        28: "7rem",
      },
    },
  },
  plugins: [],
};
