/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: '#1B5E75',
        sunset: '#D97D4A',
        sand: '#E8DCC8',
        'dark-slate': '#2C3E50',
        'light-cream': '#F5F1E8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
