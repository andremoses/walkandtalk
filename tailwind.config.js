/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#00A19C',
          light: '#4BC0BD',
          dark: '#007874',
        },
        orange: {
          DEFAULT: '#FF6B35',
          light: '#FF8B5E',
          dark: '#CC5429',
        },
        yellow: {
          DEFAULT: '#FFB700',
          light: '#FFCC33',
          dark: '#CC9200',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

