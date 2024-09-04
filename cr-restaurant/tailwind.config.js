/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom': '#ad954f',
      },
      animation: {
        'click-effect': 'click-effect 0.3s ease-in-out',
      },
      fontFamily:{
        'nav-font': '"Montserrat", sans-serif;',
        'lora-font':'"Lora", serif',
        'footer-font':'"Work Sans", sans-serif'
      }
    },
  },
  plugins: [],
}