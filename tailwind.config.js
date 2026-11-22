const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// ---------------------------------------------------------------------------
// Brand palette
//
// The logo uses amber (#F59E0B) and sky blue (#0EA5E9). The UI uses deeper,
// more restrained versions of those two hues on a cool navy/ink neutral.
//
// The templates use stock Tailwind colour names (amber-600, sky-500, gray-900,
// stone-50, ...). Rather than rewrite ~12k lines of markup, those families are
// aliased to the brand scales below, so every page picks up the same
// palette:
//   amber / orange / yellow            -> gold   (primary accent, CTAs)
//   sky / cyan / blue / indigo / teal  -> brand  (secondary accent, links)
//   gray / slate / zinc / stone / neutral -> ink (text, surfaces, dark UI)
//   fuchsia / violet / purple / pink / rose -> brand (removes off-brand hues)
// green, emerald, red and lime keep their stock values for success/error.
// ---------------------------------------------------------------------------
const gold = {
  50: '#FCF8F0',
  100: '#F8EDD7',
  200: '#F0D9AC',
  300: '#E6BF77',
  400: '#DDA64C',
  500: '#D08E2E',
  600: '#B57421',
  700: '#925A1C',
  800: '#74471C',
  900: '#5C3A19',
  950: '#33200C',
}

const brand = {
  50: '#F1F7FC',
  100: '#E0EEF9',
  200: '#BCDBF1',
  300: '#88BFE5',
  400: '#4F9FD4',
  500: '#2A84C0',
  600: '#1D6AA3',
  700: '#1A5584',
  800: '#19476C',
  900: '#183C5A',
  950: '#10263C',
}

const ink = {
  50: '#F7F8FA',
  100: '#EFF1F5',
  200: '#DFE3EA',
  300: '#C5CCD7',
  400: '#98A2B3',
  500: '#6B7588',
  600: '#4F596B',
  700: '#3B4455',
  800: '#232C3C',
  900: '#141B29',
  950: '#0B111C',
}

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      // Poppins is the brand typeface (logo + headings); use it everywhere.
      'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
      'mono': defaultTheme.fontFamily.mono,
    },
    container: {
      padding: '2rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: colors.black,
      white: colors.white,
      gold, brand, ink,
      amber: gold, orange: gold, yellow: gold,
      sky: brand, cyan: brand, blue: brand, indigo: brand, teal: brand,
      fuchsia: brand, violet: brand, purple: brand, pink: brand, rose: brand,
      gray: ink, slate: ink, zinc: ink, stone: ink, neutral: ink,
      green: colors.green, emerald: colors.emerald, lime: colors.lime, red: colors.red,
    },
    extend: {
      colors: {
        primary: gold[500],
        secondary: brand[500],
        dark: ink[900],
        darksecondary: '#FFFFFF',
      },
      rotate: {
        '17': '17deg',
      }
      ,
      height: {
        '128': '32rem',
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
