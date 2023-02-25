const defaultColors = require('tailwindcss/colors')

module.exports = {
  gray: defaultColors[require('./vars/_colors.cjs').gray],
  primary: defaultColors[require('./vars/_colors.cjs').primary],
  secondary: defaultColors[require('./vars/_colors.cjs').secondary],
}
