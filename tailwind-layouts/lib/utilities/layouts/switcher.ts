import defaultOptions from '../../options'
import {
  t,
  c,
  generateObjectOfNaturaLNumbersUpto,
} from '../../helpers'
import type { Utility } from '../../types'

const getLimit = (value: unknown) => {
  return isNaN(Number(value)) ? null : Number(value)
}

const switcher: Utility = {
  static: [
    ({ options, theme }) => {
      const limit =
        getLimit(options.switcherLimit) ||
        defaultOptions.switcherLimit
      return [
        {
          [`.${c(options, 'switcher')}`]: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: t(theme, 'baseSpacing'),

            '& > *': {
              flexGrow: '1',
              flexBasis: `calc((${t(
                theme,
                'measure',
              )} - 100%) * 999)`,
            },

            // HACK: overspecify to override `flexBasis` from `threshold` prop
            [`&.${c(options, 'switcher')} > :nth-last-child(n+${
              limit + 1
            }), &.${c(options, 'switcher')} > :nth-last-child(n+${
              limit + 1
            }) ~ *`]: {
              flexBasis: '100%',
            },
          },
        },
      ]
    },
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'switcher')}_space`]: (value) => ({
          [`&.${c(options, 'switcher')}`]: {
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
        [`${c(options, 'switcher')}_threshold`]: (value) => ({
          [`&.${c(options, 'switcher')} > *`]: {
            flexBasis: `calc((${value} - 100%) * 999)`,
          },
        }),
      },
      {
        values: {
          ...theme('width'),
          ...theme('minWidth'),
          ...theme('maxWidth'),
        },
      },
    ],
    ({ options, theme }) => {
      return [
        {
          [`${c(options, 'switcher')}_limit`]: (value) => {
            const limit =
              getLimit(`${value}`) ||
              getLimit(options.switcherLimit) ||
              defaultOptions.switcherLimit
            return {
              [`&.${c(options, 'switcher')}`]: {
                [`& > :nth-last-child(n+${
                  limit + 1
                }), & > :nth-last-child(n+${limit + 1}) ~ *`]: {
                  flexBasis: '100%',
                },
              },
            }
          },
        },
        {
          values: generateObjectOfNaturaLNumbersUpto(
            Number(options.maxSwitcherLimit),
            defaultOptions.maxSwitcherLimit,
          ),
        },
      ]
    },
  ],
}

export default switcher
