/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bestBlack: '#121212',
        bestDark: '#303030',
        bestWhite: '#A6A6A6',
        bestGrey: '#202020',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-border': {
          textShadow: '0 0 2px #6C6C6C, 0 0 2px #6C6C6C, 0 0 2px #6C6C6C, 0 0 2px #6C6C6C',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
