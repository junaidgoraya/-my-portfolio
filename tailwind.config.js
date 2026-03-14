/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "primary": "#0077b8",
          "background-light": "#f5f7f8",
          "background-dark": "#0f1c23",
      },
      fontFamily: {
          "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
          "DEFAULT": "0.5rem",
          "lg": "1rem",
          "xl": "1.5rem",
          "full": "9999px"
      },
    },
  },
  plugins: [],
}
