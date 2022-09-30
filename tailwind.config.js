/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: 1,
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
