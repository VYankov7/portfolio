/** @type {import('tailwindcss').Config} */

// export const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      lblue: '#0077b5',
      git: '#171515',
      gmail: '#ff0000',
      resume: '#00e500',
      rblue: '#61DBFB',
      cssblue: '#264de4',
      tblue: '#44A8B3',
      iblue: '#764abc',
      axioscolor: '#5a24e5',
      tscript: '#007acc',
      hred: '#ff3c00'
    }},
    fontFamily: {
      signature: ['Bubblegum Sans'],
    }
  },
  plugins: [],
}

