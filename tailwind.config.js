/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background_landing": "url('/public/images/background_landing.jpg')",
      },
      colors: {
        blue: "#0d68ae",
        slate_white: "#94a3b8",
        magic_red: "#dc2626",
        amber: "#f59e0b",
        yellow: "#fde047",
        navy_blue: "#0e0282",
        green:'#008000',
      },
    },
  },
  plugins: [],
};