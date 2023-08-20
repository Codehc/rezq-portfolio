/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'midnight': '#0B0C10',
        'night-sky': '#1F2833',
        'smooth-gray': '#C5C6C7',
        'striking-aqua': '#66FcF1',
        'darker-aqua': '#45A29E',
      },
    },
  },
  plugins: [],
}

