/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B3743',
        button: '#023B7E',
        gray: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
