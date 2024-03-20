/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        principal: "rgb(0, 59, 54)",
        second: "rgb(210, 187, 160)",
        third: "rgb(1, 38, 34)",
        obscure: "rbg(46, 46, 46)",
      },
    },
  },
  plugins: [],
};
