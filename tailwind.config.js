20

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-main': '#41729F',
        'blue-dark': '#274472',
        'blue-light': '#C3E0E5',
      },
      gridTemplateColumns: {
        '60/20/15': '60% 20% 15%',
        '50/30/20': '50% 30% 20%',
      },
    },
  },
  plugins: [],
}
