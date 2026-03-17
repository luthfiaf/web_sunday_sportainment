/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DD0303',
        secondary: '#0C2C55',
        accent: {
          light: '#F5F5F5',
          DEFAULT: '#9CA3AF',
          dark: '#4B5563',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        britney: ['Britney', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
