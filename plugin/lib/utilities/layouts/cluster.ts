import { t, c } from '../../helpers'
import type { Utility } from '../../types'

const cluster: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'cluster')}`]: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: t(theme, 'baseSpacing'),
        },

        [`.${c(options, 'cluster')}_center`]: {
          [`&.${c(options, 'cluster')}`]: {
            justifyContent: 'center',
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'cluster')}_space`]: (value) => ({
          [`&.${c(options, 'cluster')}`]: {
            gap: `${value}`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'cluster')}_item-min-w`]: (value) => ({
          [`&.${c(options, 'cluster')} > *`]: {
            minWidth: `${value}`,
          },
        }),
      },
      {
        values: {
          ...theme('minWidth'),
          ...theme('maxWidth'),
          ...theme('width'),
        },
      },
    ],
  ],
}

export default cluster
