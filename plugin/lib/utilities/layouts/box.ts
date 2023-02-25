import { t, c, flattenColors } from '../../helpers'
import type { Utility } from '../../types'

const box: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'box')}`]: {
          padding: t(theme, 'baseSpacing'),
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'box')}_p`]: (value) => {
          return {
            [`&.${c(options, 'box')}`]: {
              padding: `${value}`,
            },
          }
        },
      },
      {
        values: theme('spacing') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'box')}_text`]: (value) => {
          return {
            [`&.${c(options, 'box')}`]: {
              color: `${value}`,
            },
          }
        },
        [`${c(options, 'box')}_bg`]: (value) => {
          return {
            [`&.${c(options, 'box')}`]: {
              backgroundColor: `${value}`,
            },
          }
        },
        [`${c(options, 'box')}_border`]: (value) => {
          return {
            [`&.${c(options, 'box')}`]: {
              borderColor: `${value}`,
            },
          }
        },
      },
      {
        values: theme('colors') ? flattenColors(theme('colors')) : {},
      },
    ],
  ],
}

export default box
