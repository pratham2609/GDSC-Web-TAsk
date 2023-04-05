/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 10px 20px -10px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        gen: ["General Sans", "sans-serif"],
      },
      colors: {
        blueC: "#3461ff",
        bl: "#fff0",
        wh: "#f4f8ff",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(to bottom, ${theme(
          "colors.wh"
        )}, ${theme("colors.bl")})`,
        "gradient-primary2": `linear-gradient(to top, ${theme(
          "colors.wh"
        )}, ${theme("colors.bl")})`,
        'fullP': "url('/src/assets/fullP.svg')",
      }),
    },
  },
  plugins: [],
};
