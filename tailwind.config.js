/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 5px 15px rgba(0, 0, 0, 0.1), 0 -2px 10px rgba(0, 0, 0, 0.05)', // Soft shadows all around
        'custom-hover': '0 10px 25px rgba(0, 0, 0, 0.2), 0 -5px 15px rgba(0, 0, 0, 0.1)', // On hover, deeper shadows
      },
      screens: {
        'max-1300px': { max: '1560px' }, // Matches screens smaller than or equal to 122px
      },
    },
  },
  plugins: [nextui()]
}