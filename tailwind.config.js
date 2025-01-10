/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'base-blue': '#3294F8',
        'base-post': '#112131',
        'base-profile': '#0B1B2b',
        'base-background': '#071422',
      },
      colors: {
        'base-title': '#e7edf4',
        'base-subtitle': '#c4d4e3',
        'base-text': '#afc2d4',
        'base-span': '#7b96b2',
        'base-label': '#3a536b',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
