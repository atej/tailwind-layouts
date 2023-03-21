import type { Utility } from '../../types'
import {
  generateObjectOfNaturaLNumbersUpto,
  l,
  t,
  c,
} from '../../helpers'
import defaultOptions from '../../options'

const stack: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'stack')}`]: {
          '& > *': {
            [l(options, 'marginTop')]: '0',
            [l(options, 'marginBottom')]: '0',
          },
          '& > * + *': {
            [l(options, 'marginTop')]: t(theme, 'baseSpacing'),
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'stack')}_space`]: (value) => ({
          [`&.${c(options, 'stack')} > * + *`]: {
            [l(options, 'marginTop')]: `${value}`,
          },
        }),
      },
      {
        values: theme('spacing') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'stack')}_split-after`]: (value) => ({
          [`&.${c(options, 'stack')}`]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          },
          [`&.${c(options, 'stack')}>:nth-child(${value})`]: {
            [l(options, 'marginBottom')]: 'auto',
          },
        }),
      },
      {
        values: generateObjectOfNaturaLNumbersUpto(
          Number(options.maxStackSplitAfter),
          defaultOptions.maxStackSplitAfter,
        ),
      },
    ],
  ],
}

export default stack
