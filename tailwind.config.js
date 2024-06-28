/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'flight': 'flight 5s ease-in-out infinite',
      },
      keyframes: {
        flight: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(15px)' },
          '75%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
