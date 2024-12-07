/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b", // Orange
        secondary: "#8b4513", // Brown
        'custom-bg': '#edeecb',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

