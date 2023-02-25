import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'

const frame: Utility = {
  static: [
    ({ options, theme }) => {
      const selectors = options.frameSelectors
        .split(',')
        .map((str) => str.trim())
      const targetClassName = `.${c(options, 'frame')}_${c(
        options,
        'frameTarget',
      )}`

      const selectorString = [...selectors, targetClassName]
        .map((el) => `& > ${el}`)
        .join(', ')

      return [
        {
          [`.${c(options, 'frame')}`]: {
            aspectRatio: t(theme, 'frameAspectRatio'),
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            [selectorString]: {
              [l(options, 'width')]: '100%',
              [l(options, 'height')]: '100%',
              objectFit: 'cover',
            },
          },
        },
      ]
    },
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'frame')}_aspect`]: (value) => ({
          [`&.${c(options, 'frame')}`]: {
            aspectRatio: `${value}`,
          },
        }),
      },
      {
        values: theme('aspectRatio') || {},
      },
    ],
  ],
}

export default frame
