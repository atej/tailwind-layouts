import { PLUGIN_NAMESPACE } from '../../constants'
import { l, t, c, filterObjectKeys } from '../../helpers'
import type { Utility } from '../../types'

const icon: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'icon')}`]: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: t(theme, 'iconGap'),
          [`& > svg, & > .${c(options, 'icon')}_${c(
            options,
            'iconTarget',
          )} > svg`]: {
            position: 'relative',
            fill: 'currentColor',
            stroke: 'currentColor',
            [l(options, 'width')]: t(theme, 'iconSize'),
            [l(options, 'height')]: t(theme, 'iconSize'),
          },

          [`&.${c(options, 'icon')}_vertical`]: {
            flexDirection: 'column',
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'icon')}_nudge`]: (value) => ({
          [`&.${c(options, 'icon')}:not(.${c(
            options,
            'icon',
          )}_vertical)`]: {
            [`& > svg, & > .${c(options, 'icon')}_${c(
              options,
              'iconTarget',
            )} > svg`]: {
              [l(options, 'top')]: `${value}`,
            },
          },
          [`&.${c(options, 'icon')}_vertical`]: {
            [`& > svg, & > .${c(options, 'icon')}_${c(
              options,
              'iconTarget',
            )} > svg`]: {
              [l(options, 'left')]: `${value}`,
            },
          },
        }),
      },
      {
        values: Object.entries(
          filterObjectKeys(theme(PLUGIN_NAMESPACE), (key) =>
            key.startsWith('iconNudge'),
          ),
        ).reduce((acc: Record<string, unknown>, [key, value]) => {
          acc[key.replace('iconNudge', '').toLowerCase()] = value
          return acc
        }, {}),
        supportsNegativeValues: true,
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'icon')}_size`]: (value) => ({
          [`&.${c(options, 'icon')}`]: {
            [`& > svg, & > .${c(options, 'icon')}_${c(
              options,
              'iconTarget',
            )} > svg`]: {
              [l(options, 'width')]: `${value}`,
              [l(options, 'height')]: `${value}`,
            },
          },
        }),
      },
      {
        values: { ...theme('width'), ...theme('height') },
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'icon')}_space`]: (value) => ({
          [`&.${c(options, 'icon')}`]: {
            gap: `${value}`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
  ],
}

export default icon
