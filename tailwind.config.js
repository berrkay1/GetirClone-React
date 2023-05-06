/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#4C3398",
      },
      boxShadow: {
        categoriCartShadow: "-2px 5px 15px 0px rgba(0,0,0,0.53)",
      },
      backgroundImage: {
        kampanyaBG: "url('../public/images/doodle.png')",
      },
    },
  },
  plugins: [],
};
