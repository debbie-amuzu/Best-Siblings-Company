/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
         gold: {
          400: '#d4af37',
          500: '#c9a227',
          600: '#be9717',
          700: '#b38c07',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
// colors: {
//         gold: {
//           400: '#d4af37',
//           500: '#c9a227',
//           600: '#be9717',
//           700: '#b38c07',
//         },