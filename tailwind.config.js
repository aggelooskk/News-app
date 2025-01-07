/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      serif: [`ui-serif`, `Georgia`],
    },
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
