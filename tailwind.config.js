/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#0085FF',
        'blue-light': '#A3C9ED',
        'gradient-blue': '#B9FBFF',
        'gradient-purple': '#E3DCFF',
        purple: '#5241BF',
        green: '#41BFB0',
        'gray-56': '#565555',
        'gray-99': '#999999',
        'gray-b': '#BBBBBB',
        'gray-disabled': '#CCD4DB',
      },
    },
  },
  plugins: [],
}
