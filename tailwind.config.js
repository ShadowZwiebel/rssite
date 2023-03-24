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
          11: '#242424',
          12: '#2A2A2A',
        },
        red: {
          11: '#A8353A',
          12: '#D5454B'
        }
      }
    },
  },
  plugins: [],
}
