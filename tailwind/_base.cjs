const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addBase, theme }) => {
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
})
