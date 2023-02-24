/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      blue: "rgb(0, 101, 255)",
      darkblue: "rgb(0, 101, 255)",
      blueskay: "rgb(0, 199, 229)",
      lightblue: "rgb(222, 235, 255)",
      white: "rgb(255,255,255)",
      black: "#000000",
      transparent: "rgba(1,3,4,0)",
      gray: "rgb(223, 225, 230)",
      darkgray: "rgba(9, 30, 66, 0.5)",
      darkblue: "rgb(7, 71, 166)",
      lightpurple: "rgb(247, 245, 255)",
      purple: "rgb(234, 230, 255)",
      verydarkpurple: "rgb(101, 84, 192)",
      hoverpurple: "rgb(234, 230, 255)",
      lightyelow: "rgb(255, 253, 245)",
      verydarkyelow: "rgb(255, 171, 0)",
      hoveryelow: "rgb(255, 250, 229)",
      footerbg: "rgb(23, 43, 77)",
      footerbghover: "rgb(52, 69, 99)",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Notosans: ["Noto Sans", "sans - serif"],
    },
    extend: {},
  },
  plugins: [],
};
