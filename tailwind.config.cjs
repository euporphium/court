/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}", 'index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', ...require('tailwindcss/defaultTheme').fontFamily.sans]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
