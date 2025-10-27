/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banana: {
          light: '#FFF9C4',
          DEFAULT: '#FFD54F',
          dark: '#F9A825',
        },
        monkey: {
          brown: '#8D6E63',
          dark: '#5D4037',
        }
      },
    },
  },
  plugins: [],
}
