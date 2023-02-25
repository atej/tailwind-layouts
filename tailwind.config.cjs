const defaultColors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const {
  tailwindLayouts,
  defaultOptions: defaultLayoutOptions,
} = require('./plugin/dist/tailwind-layouts.umd.cjs')
const tailwindTypography = require('@tailwindcss/typography')
const defaultTypographyStyles = require('@tailwindcss/typography/src/styles')

const gray = 'neutral'
const primary = 'teal'
const secondary = 'amber'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Golos UI', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        gray: defaultColors[gray],
        primary: defaultColors[primary],
        secondary: defaultColors[secondary],
      },
      layouts: ({ theme }) => ({
        scrollbarThumbColor: theme('colors.gray[700]'),
      }),
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme('colors.primary.500'),
              scrollMarginTop: theme('spacing.8'),
            },
            h3: {
              scrollMarginTop: theme('spacing.8'),
            },
            blockquote: {
              borderWidth: `1px`,
              borderColor: 'var(--tw-prose-quote-borders)',
              padding: '1.2em 1.6em',
              fontWeight: '400',
              fontStyle: 'normal',
              backgroundColor: 'var(--tw-prose-quote-bg)',
              '& p:first-of-type': {
                marginTop: 0,
                '&::before': {
                  content: 'none',
                },
              },
              '& p:last-of-type': {
                marginBottom: 0,
                '&::after': {
                  content: 'none',
                },
              },
              '& code': {
                color: 'var(--tw-prose-code)',
              },
            },
            code: {
              fontWeight: '500',
            },
            pre: {
              maxWidth: `calc(100vw - ${theme('spacing.4')} * 2)`,
              '@supports (max-width: min(calc(100vw - 2rem), 70ch))':
                {
                  maxWidth: `min(calc(100vw - ${theme(
                    'spacing.4',
                  )} * 2), 70ch)`,
                },
              borderRadius: 0,
              borderWidth: `1px`,
              borderColor: 'var(--tw-prose-pre-borders)',
              '& .function': {
                color: 'var(--tw-prose-pre-code-function)',
              },
              '& .string': {
                color: 'var(--tw-prose-pre-code-string)',
              },
              '& .property': {
                color: 'var(--tw-prose-pre-code-property)',
              },
              '& .comment': {
                color: 'var(--tw-prose-pre-code-comment)',
              },
              '& .operator, & .punctuation': {
                color: 'var(--tw-prose-pre-code-dimmed)',
              },
              '& .boolean': {
                color: 'var(--tw-prose-pre-code-boolean)',
              },
            },
          },
        },
        invert: {
          css: {
            ...defaultTypographyStyles.invert.css,
            '--tw-prose-quote-bg': 'var(--tw-prose-invert-quote-bg)',
            '--tw-prose-pre-borders': 'var(--tw-prose-invert-pre-borders)', // prettier-ignore
            '--tw-prose-pre-code-function': 'var(--tw-prose-invert-pre-code-function)', // prettier-ignore
            '--tw-prose-pre-code-string': 'var(--tw-prose-invert-pre-code-string)', // prettier-ignore
            '--tw-prose-pre-code-comment': 'var(--tw-prose-invert-pre-code-comment)', // prettier-ignore
            '--tw-prose-pre-code-dimmed': 'var(--tw-prose-invert-pre-code-dimmed)', // prettier-ignore
            '--tw-prose-pre-code-property': 'var(--tw-prose-invert-pre-code-property)', // prettier-ignore
            '--tw-prose-pre-code-boolean': 'var(--tw-prose-invert-pre-code-boolean)', // prettier-ignore
          },
        },
        gray: {
          css: {
            ...defaultTypographyStyles[gray].css,
            ...{
              '--tw-prose-body': theme('colors.gray[800]'),
              '--tw-prose-headings': theme('colors.gray[900]'),
              '--tw-prose-lead': theme('colors.gray[600]'),
              '--tw-prose-links': theme('colors.gray[900]'),
              '--tw-prose-bold': theme('colors.gray[900]'),
              '--tw-prose-code': theme('colors.gray[900]'),
              '--tw-prose-quotes': theme('colors.gray[900]'),
              '--tw-prose-quote-bg': theme('colors.gray[200]'),
              '--tw-prose-pre-borders': theme('colors.gray[200]'),
              '--tw-prose-pre-code-function': theme('colors.secondary[500]'), // prettier-ignore
              '--tw-prose-pre-code-string': theme('colors.primary[500]'), // prettier-ignore
              '--tw-prose-pre-code-comment': theme('colors.gray[500]'), // prettier-ignore
              '--tw-prose-pre-code-dimmed': theme('colors.gray[400]'), // prettier-ignore
              '--tw-prose-pre-code-property': theme('colors.secondary[500]'), // prettier-ignore
              '--tw-prose-pre-code-boolean': theme('colors.sky[500]'), // prettier-ignore
              '--tw-prose-invert-body': theme('colors.gray[400]'),
              '--tw-prose-invert-headings': theme('colors.gray[300]'),
              '--tw-prose-invert-lead': theme('colors.gray[300]'),
              '--tw-prose-invert-links': theme('colors.gray[300]'),
              '--tw-prose-invert-bold': theme('colors.gray[300]'),
              '--tw-prose-invert-code': theme('colors.gray[300]'),
              '--tw-prose-invert-quotes': theme('colors.gray[400]'),
              '--tw-prose-invert-quote-bg': theme('colors.gray[800]'), // prettier-ignore
              '--tw-prose-invert-pre-borders': theme('colors.gray[800]'), // prettier-ignore
              '--tw-prose-invert-pre-code-function': theme('colors.secondary[500]'), // prettier-ignore
              '--tw-prose-invert-pre-code-string': theme('colors.primary[500]'), // prettier-ignore
              '--tw-prose-invert-pre-code-property': theme('colors.secondary[500]'), // prettier-ignore
              '--tw-prose-invert-pre-code-boolean': theme('colors.sky[500]'), // prettier-ignore
              '--tw-prose-invert-pre-code-comment': theme('colors.gray[400]'), // prettier-ignore
              '--tw-prose-invert-pre-code-dimmed': theme('colors.gray[500]'), // prettier-ignore
            },
          },
        },
      }),
    },
  },
  plugins: [
    tailwindLayouts({
      ...defaultLayoutOptions,
      useGlobalScrollbarStyles: true,
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        ':focus-visible': {
          outline: 'none',
        },
        body: {
          color: theme('colors.gray.400'),
        },
        '*': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        '@font-face': {
          fontFamily: 'Golos UI',
          src: 'url("/fonts/golos-ui_vf.woff2") format("woff2-variations")',
          fontWeight: '400 700',
          fontStyle: 'normal',
          fontDisplay: 'swap',
        },
        '@font-face': {
          fontFamily: 'Fira Code',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: '300 700',
          src: 'url("/fonts/fira-code_vf.woff2") format("woff2-variations")',
          unicodeRange:
            'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
        },
      })
    }),
    tailwindTypography,
  ],
}
