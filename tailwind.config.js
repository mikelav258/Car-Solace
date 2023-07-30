/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        lightblue: "#7DD0E9",
        darkblue: "#252E3A",
        darkgrey: "#676464",
        altblue: "#4A788D",
        lightgrey: "#f0f0f0",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
