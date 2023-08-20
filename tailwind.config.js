/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'caa-dark-blue': '#003087',
        'caa-pink': '#F5F7FA',
        'white-100': '#FFFFFF',
        'neutral-black': '#020C27',
        'body-text': '#4D5056',
        'caa-yellow-web-100': '#936F1F',
        'sample-red': '#DC143C',
        'sample-gray': '#E5E4E2',
        'insurance-primary': '#124366',
        'nav-background': '#fffbf5'
      },
    },
  },
  plugins: [],
};
