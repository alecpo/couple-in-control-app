import colors from "./src/styles/colors";
import theme from "./src/styles/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    function({ addBase }) {
      addBase(theme);
    },
  ],
}