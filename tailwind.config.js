/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(240, 38%, 20%)",
        "greyish-blue": "hsl(240, 18%, 77%)",
      },
      screens: {
        portrait: { raw: "(max-aspect-ratio: 3/2)" },
        landscape: { raw: "(min-aspect-ratio: 3/2)" },
      },
      fontSize: {
        "custom-font": "clamp(0.8rem, min(2dvw, 2dvh), 8rem)",
      },
    },
  },
  plugins: [],
};
