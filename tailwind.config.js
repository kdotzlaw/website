/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#84A59D',
        'secondary': '#F28482',
        'accent': '#F5CAC3',
      },
    },
  },
  plugins: [],
}
