/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Include all relevant files
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#631d35',
        tan: '#874545',
        black: '#1e211e',
        taupe: '#cf9465',
        sienna: '#f4bb75',
        brown: '#573921',
        cream: '#f7f2e7',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'], // For headings
        sans: ['DM Sans', 'sans-serif'], // For body text
      },
    },
  },
  plugins: [],
};