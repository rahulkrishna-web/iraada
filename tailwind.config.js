import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#aad7e6",
              foreground: "#000",
            },
            white: {
              DEFAULT: "#fff",
              foreground: "#000",
            },
            focus: "#aad7e6",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#fff",
              foreground: "#000000",
            },
            white: {
              DEFAULT: "#fff",
              foreground: "#000",
            },
            focus: "#fff",
          },
        },
      },
    }
  )],
}
