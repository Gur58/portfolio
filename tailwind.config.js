/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat Regular', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        'montserrat-regular': ['Montserrat Regular', 'sans-serif'],
        'montserrat-black': ['Montserrat Black', 'sans-serif']
      },
      screens: {
        'xsm': '440px'
      }
    },
  },
  plugins: [],
}

