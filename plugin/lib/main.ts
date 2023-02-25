import plugin from 'tailwindcss/plugin'
import { PLUGIN_NAMESPACE } from './constants'
import { t } from './helpers'
import defaultOptions from './options'
import defaultTheme from './theme'
import globalMeasure from './base/measure'
import globalScrollbar from './base/scrollbar'
import stack from './utilities/layouts/stack'
import box from './utilities/layouts/box'
import center from './utilities/layouts/center'
import cluster from './utilities/layouts/cluster'
import switcher from './utilities/layouts/switcher'
import cover from './utilities/layouts/cover'
import sidebar from './utilities/layouts/sidebar'
import grid from './utilities/layouts/grid'
import frame from './utilities/layouts/frame'
import reel from './utilities/layouts/reel'
import imposter from './utilities/layouts/imposter'
import icon from './utilities/layouts/icon'
import scrollbar from './utilities/scrollbar'
import borderHC from './utilities/border-hc'
import type { PluginOptions, PluginTheme, Utility } from './types'

const tailwindLayouts = plugin.withOptions<PluginOptions>(
  // #region -PLUGIN CREATOR-
  (options = defaultOptions) =>
    ({ addBase, addUtilities, matchUtilities, theme }) => {
      if (options.useGlobalMeasure) {
        addBase(...globalMeasure({ options, theme }))
      }
      if (options.useGlobalScrollbarStyles) {
        addBase(...globalScrollbar({ options, theme }))
      }

      const registerUtility = (utility: Utility) => {
        if (utility.static) {
          for (const u of utility.static) {
            addUtilities(...u({ options, theme }))
          }
        }
        if (utility.dynamic) {
          for (const u of utility.dynamic) {
            matchUtilities(...u({ options, theme }))
          }
        }
      }

      registerUtility(stack)
      registerUtility(box)
      registerUtility(center)
      registerUtility(cluster)
      registerUtility(sidebar)
      registerUtility(switcher)
      registerUtility(cover)
      registerUtility(grid)
      registerUtility(frame)
      registerUtility(reel)
      registerUtility(imposter)
      registerUtility(icon)

      registerUtility(scrollbar)
      registerUtility(borderHC)
    },
  // #endregion

  // #region -CONFIG-
  (options = defaultOptions) => ({
    theme: {
      [PLUGIN_NAMESPACE]: defaultTheme,
      extend: {
        spacing: ({ theme }) => ({
          [options.baseSpacingKey]: `${t(theme, 'baseSpacing')}`,
          [options.measureKey]: `${t(theme, 'measure')}`,
        }),
        maxWidth: ({ theme }) => ({
          [options.measureKey]: `${t(theme, 'measure')}`,
        }),
        minWidth: ({ theme }) => ({
          [options.measureKey]: `${t(theme, 'measure')}`,
        }),
      },
    },
  }),
  // #endregion
)

export { tailwindLayouts, defaultOptions, defaultTheme }
export type Options = Partial<PluginOptions>
export type Theme = Partial<PluginTheme>
