/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{cjs,mjs,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "playright":['Playwrite IS','cursive']
      },
    },
  },
  plugins: [],
}