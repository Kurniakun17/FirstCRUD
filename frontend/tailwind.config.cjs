/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '9': 9
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
