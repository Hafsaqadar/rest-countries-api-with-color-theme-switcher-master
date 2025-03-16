/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'], 
      },
      
      width: {
        '450': '650px', 
      },

      colors: {
        'dark-element': 'hsl(209, 23%, 22%)',      // Dark Mode Elements
        'dark-bg': 'hsl(207, 26%, 17%)',           // Dark Mode Background
        'light-text': 'hsl(200, 15%, 8%)',         // Light Mode Text
        'light-input': 'hsl(0, 0%, 52%)',          // Light Mode Input
        'light-bg': 'hsl(0, 0%, 98%)',             // Light Mode Background
        'white': 'hsl(0, 0%, 100%)',               // Dark Mode Text & Light Mode Elements
      },
    },
  },
  plugins: [],
}