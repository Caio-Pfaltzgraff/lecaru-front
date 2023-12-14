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
        dourado: '#efb810',
        vinho: '#a00f2d'
      },
      fontFamily: {
        'logo': ['Playfair Display', 'serif'],
        'padrao': ['inter', 'sans-serif'],
        'cursiva': ['Allura', 'cursive'],
        'titulo': ['Merriweather', 'serif']
      },
      spacing: {
        '73': '19rem',
        '100': '25rem',
        '128': '32rem',
        '153': '38.25rem'
      },
      width: {
        '18': '4.5rem'
      },
      backgroundImage: {
        'home': "url('/src/assets/banners/banner-home.png')",
        'sobre': "url('/src/assets/banners/banner-sobre.jpg')",
        'unidades': "url('/src/assets/banners/banner-unidades.jpg')",
        'cardapio': "url('/src/assets/banners/banner-cardapio.jpg')"
      }
    },
  },
  plugins: [],
}

