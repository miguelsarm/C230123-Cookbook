/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        principal: "rgb(0, 59, 54)",
        second: "rgb(250,231,148)",
        third: "rgb(1, 38, 34)",
        obscure: "rbg(46, 46, 46)",
      },
    },
  },
  plugins: [],
};
