/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['poppins', 'sans-serif']
    },
    extend: {
      colors:{
        primary: "#00953B",
        secondary: "#95C11F",
        accent: "#EA0029"
      }
    },
  },
  plugins: [],
}