/* eslint-disable no-undef */
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
        'dashBg': '#ffffff',
        'activeDashBg': '#F8F9F9',
        'hoverLinkDash': '#F4F6F6',
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}