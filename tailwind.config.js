/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          11: '#353535',
          12: '#1b1b1b',
        },
        red: {
          11: '#A8353A',
        }
      }
    },
  },
  plugins: [],
}
