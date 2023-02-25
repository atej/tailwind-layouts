const sharedConfig = require('./tailwind/shared.config.cjs')
const {
  tailwindLayouts,
  defaultOptions: defaultLayoutOptions,
} = require('tailwind-layouts')

module.exports = {
  ...sharedConfig,
  plugins: [
    ...sharedConfig.plugins,
    tailwindLayouts({
      ...defaultLayoutOptions,
      useGlobalScrollbarStyles: true,
    }),
  ],
}
