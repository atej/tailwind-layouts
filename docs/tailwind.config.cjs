const tailwindTypography = require('@tailwindcss/typography')
const {
  tailwindLayouts,
  defaultOptions: defaultLayoutOptions,
} = require('tailwind-layouts')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: require('./tailwind/fontFamily.cjs'),
      colors: require('./tailwind/colors.cjs'),
      layouts: require('./tailwind/layouts.cjs'),
      typography: require('./tailwind/typography.cjs'),
    },
  },
  plugins: [
    require('./tailwind/base.cjs'),
    tailwindTypography,
    tailwindLayouts({
      ...defaultLayoutOptions,
      useGlobalScrollbarStyles: true,
      measureExceptions: [
        defaultLayoutOptions.measureExceptions,
        '.prose *:not(img):not(video)',
      ].join(','),
    }),
  ],
  darkMode: 'class',
}
