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
        'themeColor': 'rgb(var(--theme-color) / <alpha-value>)',
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