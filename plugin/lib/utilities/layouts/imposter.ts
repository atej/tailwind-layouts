import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'

const imposter: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'imposter')}`]: {
          position: 'absolute',
          [l(options, 'top')]: '50%',
          [l(options, 'left')]: '50%',
          transform: 'translate(-50%, -50%)',

          overflow: 'auto',

          [l(options, 'maxWidth')]: `calc(100% - ${t(
            theme,
            'baseSpacing',
          )} * 2)`,
          [l(options, 'maxHeight')]: `calc(100% - ${t(
            theme,
            'baseSpacing',
          )} * 2)`,

          'dialog&': {
            padding: '0',
            margin: '0',
          },

          [`&.${c(options, 'imposter')}_fixed`]: {
            position: 'fixed',
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'imposter')}_m`]: (value) => ({
          [`&.${c(options, 'imposter')}`]: {
            [l(options, 'maxWidth')]: `calc(100% - ${value} * 2)`,
            [l(options, 'maxHeight')]: `calc(100% - ${value} * 2)`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
  ],
}

export default imposter
