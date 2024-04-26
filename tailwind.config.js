/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B50EE",
        secondary: "#242F3A",
        textColor:"#7E8299",
        mainBackground: "#f3f6f9"
      },
    },
  },
  plugins: [],
}

