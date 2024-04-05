/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lecaru: {
          blue: {
            dark: '#00202D',
            light: '#3CA6A6'
          },
          gold: '#eFB810',
          wine: '#A00F2D'
        }
      },
      fontFamily: {
        default: ['Inter', 'sans-serif'],
        title: ['Playfair Display', 'serif'],
        cursive: ['Allura', 'cursive']
      }
    },
  },
  plugins: [],
}

