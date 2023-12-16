/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/*' , './src/app.js' , "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      width :{
        '20vw' : '20vw',
      },
      height:{
        '20vw' : '15vw'
      }
    },
  },
  plugins: [],
}

