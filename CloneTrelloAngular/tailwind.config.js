/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // add this line
  ],
  theme: {
    extend: {
      colors: colors.green,
      primary:colors.blue,
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

