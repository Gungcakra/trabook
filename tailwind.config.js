/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FA7436',
          dark: '#222222',
        },
        secondary: {
          light: '#4086F4',
          dark: '#FFB60A',
        },
      },
    },
  },
  plugins: [],
}
