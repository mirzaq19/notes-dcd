/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--tw-clr-dark) / <alpha-value>)',
        light: 'rgb(var(--tw-clr-light) / <alpha-value>)',
        secondary: 'rgb(var(--tw-clr-secondary) / <alpha-value>)',
        accent: {
          peach: 'rgb(var(--tw-clr-accent-peach) / <alpha-value>)',
          grape: 'rgb(var(--tw-clr-accent-grape) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
