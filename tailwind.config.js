/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          escuro: '#00202D',
          claro: '#3CA6A6',
        },
        dourado: '#efb810'
      },
      fontFamily: {
        'logo': ['Playfair Display', 'serif'],
        'padrao': ['inter', 'sans-serif'],
        'cursiva': ['Allura', 'cursive'],
        'titulo': ['Merriweather', 'serif']
      },
      spacing: {
        '73': '19rem',
        '100': '25rem'
      },
      width: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}

