const tailwindTypography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: require('./_fontFamily.cjs'),
      colors: require('./_colors.cjs'),
      layouts: require('./_layouts.cjs'),
      typography: require('./_typography.cjs'),
    },
  },
  plugins: [require('./_base.cjs'), tailwindTypography],
  darkMode: 'class',
}
