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
        'spectral': ['Spectral', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'seasons': ['var(--font-seasons)'],
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
            transparent: "transparent",
            primary: {
              DEFAULT: "#216A5A",
              foreground: "#fff",
            },
            white: {
              DEFAULT: "#fff",
              foreground: "#000",
            },
            customGreen: {
              light: '#d7efd7',
            },
            customBlue: {
              light: '#3c8572',
            },
            brandBlue: "#bddde5",
            brandGreen: "#acce94",
            focus: "#a8ca8f",
          },
          backgroundImage: {
            'gradient-custom': 'linear-gradient(to bottom right, #d7efd7, #e4f4f5)',
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#fff",
              foreground: "#121212",
            },
            white: {
              DEFAULT: "#fff",
              foreground: "#000",
            },
            focus: "#fff",
          },
          backgroundImage: {
            'gradient-custom': 'linear-gradient(to bottom right, #d7efd7, #e4f4f5)',
          },
        },
      },
    }
  )],
}
