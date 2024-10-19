/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundColor: {
        dark: '#2f3349',
        light: '#fff',
      },
      colors: {
        main: {
          DEFAULT: '#1867C0',
          dark: '#0e0e0e',
          light: '#fff',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
}
