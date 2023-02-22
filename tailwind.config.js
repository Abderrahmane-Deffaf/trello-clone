/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      blue: 'rgb(0, 101, 255)',
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Notosans: ["Noto Sans", "sans - serif"],
    },
    extend: {},
  },
  plugins: [],
};
