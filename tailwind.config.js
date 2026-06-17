/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#8B1E3F",
          gold: "#D4AF37",
          cream: "#FFF7F0",
        },
      },
    },
  },
  plugins: [],
};
