/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#00202D',
        'azul-claro': '#3CA6A6',
        'bege': '#F2E3D5'
      },
      fontFamily: {
        'icones': ['Cormorant', 'serife'],
        'padrao': ['inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

