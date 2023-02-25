import { t, c } from '../../helpers'
import type { Utility } from '../../types'

const grid: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'grid')}`]: {
          display: 'grid',
          gap: t(theme, 'baseSpacing'),
          [`@supports (width:min(${t(
            theme,
            'gridItemMinWidth',
          )},100%))`]: {
            '&': {
              gridTemplateColumns: `repeat(auto-fit,minmax(min(${t(
                theme,
                'gridItemMinWidth',
              )},100%),1fr))`,
            },
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'grid')}_space`]: (value) => ({
          [`&.${c(options, 'grid')}`]: {
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
        [`${c(options, 'grid')}_item-min-w`]: (value) => ({
          [`&.${c(options, 'grid')}`]: {
            [`@supports (width:min(${value},100%))`]: {
              '&': {
                gridTemplateColumns: `repeat(auto-fit,minmax(min(${value},100%),1fr))`,
              },
            },
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

export default grid
