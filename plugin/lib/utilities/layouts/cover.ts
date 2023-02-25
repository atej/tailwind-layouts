import { l, t, c } from '../../helpers'
import type { Utility } from '../../types'

const cover: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.${c(options, 'cover')}`]: {
          display: 'flex',
          flexDirection: 'column',
          padding: t(theme, 'baseSpacing'),
          [l(options, 'minHeight')]: '100vh',
          '& > *': {
            [l(options, 'marginTop')]: t(theme, 'baseSpacing'),
            [l(options, 'marginBottom')]: t(theme, 'baseSpacing'),
          },
          [`& > :first-child:not(.${c(options, 'cover')}_${c(
            options,
            'coverTarget',
          )})`]: {
            [l(options, 'marginTop')]: '0',
          },
          [`& > :last-child:not(.${c(options, 'cover')}_${c(
            options,
            'coverTarget',
          )})`]: {
            [l(options, 'marginBottom')]: '0',
          },
          [`& > .${c(options, 'cover')}_${c(
            options,
            'coverTarget',
          )}`]: {
            [l(options, 'marginTop')]: 'auto',
            [l(options, 'marginBottom')]: 'auto',
          },
          // HACK: overspecify to override `padding` from `space` prop
          [`&.${c(options, 'cover')}.${c(options, 'cover')}_no-pad`]:
            {
              padding: '0',
            },
        },
      },
    ],
  ],
  dynamic: [
    ({ options, theme }) => [
      {
        [`${c(options, 'cover')}_space`]: (value) => ({
          [`&.${c(options, 'cover')}`]: {
            padding: `${value}`,

            '& > *': {
              [l(options, 'marginTop')]: `${value}`,
              [l(options, 'marginBottom')]: `${value}`,
            },
            [`& > :first-child:not(.${c(options, 'cover')}_${c(
              options,
              'coverTarget',
            )})`]: {
              [l(options, 'marginTop')]: '0',
            },
            [`& > :last-child:not(.${c(options, 'cover')}_${c(
              options,
              'coverTarget',
            )})`]: {
              [l(options, 'marginBottom')]: '0',
            },
            [`& > .${c(options, 'cover')}_${c(
              options,
              'coverTarget',
            )}`]: {
              [l(options, 'marginTop')]: 'auto',
              [l(options, 'marginBottom')]: 'auto',
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
        [`${c(options, 'cover')}_min-h`]: (value) => ({
          [`&.${c(options, 'cover')}`]: {
            [l(options, 'minHeight')]: `${value}`,
          },
        }),
      },
      {
        values: {
          ...theme('height'),
          ...theme('minHeight'),
          ...theme('maxHeight'),
        },
      },
    ],
  ],
}

export default cover
