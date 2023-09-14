/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'rp-dark-gray': '#202020',
        'rp-light-gray': '#8c8c8c',
        'rp-ultralight-gray': '#f2f2f2',
      },
    },
  },
  plugins: [],
}

