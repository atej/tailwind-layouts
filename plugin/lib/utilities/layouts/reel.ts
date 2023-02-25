import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'

const reel: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'reel')}`]: {
          display: 'flex',
          [l(options, 'height')]: 'auto',
          [l(options, 'overflowX')]: 'auto',
          [l(options, 'overflowY')]: 'hidden',

          '& > *': {
            flexShrink: '0',
            flexGrow: '0',
            flexBasis: 'auto',
          },

          '& > img': {
            [l(options, 'height')]: '100%',
            flexBasis: 'auto',
            width: 'auto',
          },

          '& > * + *': {
            [l(options, 'marginLeft')]: t(theme, 'baseSpacing'),
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'reel')}_space`]: (value) => ({
          [`&.${c(options, 'reel')}`]: {
            '& > * + *': {
              [l(options, 'marginLeft')]: `${value}`,
            },
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'reel')}_item-w`]: (value) => ({
          [`&.${c(options, 'reel')} > *`]: {
            flexBasis: `${value}`,
          },
        }),
      },
      {
        values: {
          ...theme('width'),
          ...theme('maxWidth'),
          ...theme('minWidth'),
        },
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'reel')}_h`]: (value) => ({
          [`&.${c(options, 'reel')}`]: {
            [l(options, 'height')]: `${value}`,
          },
        }),
      },
      {
        values: {
          ...theme('height'),
          ...theme('maxHeight'),
          ...theme('minHeight'),
        },
      },
    ],
  ],
}

export default reel
