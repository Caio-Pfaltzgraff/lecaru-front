// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        title: ['Merriweather', 'serif'],
        cursive: ['Allura', 'cursive'],
        logo: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'home': "url('/banners/banner-home.png')",
        'about': "url('/banners/banner-about.jpg')",
        'units': "url('/banners/banner-units.jpg')",
        'menu': "url('/banners/banner-menu.jpg')"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

