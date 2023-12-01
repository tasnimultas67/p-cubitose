/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeColor': '#1954ed',
        'grayColor': '#767676',
      }
    },
  },
  plugins: [require("daisyui")],
}