/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#EEEEEE",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: "dark",
    prefix: "",
    themeRoot: ":root",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
