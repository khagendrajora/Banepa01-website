/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: '#245fb9',
  
      },
       fontFamily: {
       title: ["Saira Condensed", "serif"],
       gov: ["Saira Condensed", "serif"],
       poppin: ["Poppins", "serif"],
       dev: ["Noto Sans Devanagari", "sans-serif"],
       
     }
    },
  },
  plugins: [],
}

