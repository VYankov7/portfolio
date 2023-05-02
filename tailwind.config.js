/** @type {import('tailwindcss').Config} */

// export const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      blue: '#0077b5',
      git: '#171515',
      gmail: '#c71610',
      resume: '#00FF00',
      rblue: '#61DBFB',
      cssblue: '#264de4',
      tblue: '#44A8B3',
      iblue: '#764abc',
      axioscolor: '#5a24e5',
      tscript: '#007acc'
    }},
    fontFamily: {
      signature: ['Great Vibes'],
    }
  },
  plugins: [],
}

