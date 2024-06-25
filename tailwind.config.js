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
          '0%': { transform: 'translateY(0) translateX(5px)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(20px) translateX(-5px)' },
          '75%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0) translateX(5px)' },
        }
      }
    },
  },
  plugins: [],
}
