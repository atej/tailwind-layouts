import { l, t, c, filterObjectKeys } from '../../helpers'
import type { Utility } from '../../types'

const sidebar: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'sidebar')}`]: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: t(theme, 'baseSpacing'),

          // side
          '& > :first-child': {
            flexGrow: '1',
          },

          // content
          '& > :last-child': {
            flexBasis: '0',
            flexGrow: '999',
            [l(options, 'minWidth')]: t(theme, 'sidebarMainMinWidth'),
          },
        },
        // sidebar on the right
        [`.${c(options, 'sidebar')}-end`]: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: t(theme, 'baseSpacing'),

          // side
          '& > :last-child': {
            flexGrow: '1',
          },

          // content
          '& > :first-child': {
            flexBasis: '0',
            flexGrow: '999',
            [l(options, 'minWidth')]: '66.666667%',
          },
        },
        // adjacent elements adopt their natural height
        [`.${c(options, 'sidebar')}_no-stretch`]: {
          [`&.${c(options, 'sidebar')}, &.${c(
            options,
            'sidebar',
          )}-end`]: {
            alignItems: 'flex-start',
          },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_space`]: (value) => ({
          [`&.${c(options, 'sidebar')}, &.${c(
            options,
            'sidebar',
          )}-end`]: {
            gap: `${value}`,
          },
        }),
      },
      {
        values: theme('space') || {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_side-w`]: (value) => ({
          [`&.${c(options, 'sidebar')}`]: {
            '& > :first-child': {
              flexBasis: `${value}`,
            },
          },
          [`&.${c(options, 'sidebar')}-end`]: {
            '& > :last-child': {
              flexBasis: `${value}`,
            },
          },
        }),
      },
      {
        values: theme('width')
          ? filterObjectKeys(
              theme('width'),
              (key) => !key.includes('/'),
            )
          : {},
      },
    ],
    ({ options, theme }) => [
      {
        [`${c(options, 'sidebar')}_main-min-w`]: (value) => ({
          [`&.${c(options, 'sidebar')}`]: {
            '& > :last-child': {
              [l(options, 'minWidth')]: `${value}`,
            },
          },
          [`&.${c(options, 'sidebar')}-end`]: {
            '& > :first-child': {
              [l(options, 'minWidth')]: `${value}`,
            },
          },
        }),
      },
      {
        values: theme('width')
          ? filterObjectKeys(theme('width'), (key) =>
              key.includes('/'),
            )
          : {},
      },
    ],
  ],
}

export default sidebar
