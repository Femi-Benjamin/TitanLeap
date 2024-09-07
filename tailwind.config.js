/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Gluten", "Inter", "sans-serif","Roboto"],
      },
      colors: {
        primary: "#411697",
        brandPrimary:"#6F1DF4",
        tertiary:"#3C3C4380",
        secondary: "#FED65E",
        navBar: "#1d1e25",
        textBase: "#8f9091",
      },
    },
  },
  plugins: [],
};
