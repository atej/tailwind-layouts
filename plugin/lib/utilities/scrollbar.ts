import { c, t } from '../helpers'
import type { PluginTheme, Utility } from '../types'

type ScrollbarSize = PluginTheme['scrollbarSize']
const borderWidth: Record<ScrollbarSize, `${string}px`> = {
  thin: '6px',
  medium: '4px',
  thick: '2px',
}

const scrollbar: Utility = {
  static: [
    ({ options, theme }) => [
      {
        [`.no-${c(options, 'scrollbar')}`]: {
          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    ],
  ],

  dynamic: [
    ({ options, theme }) => [
      {
        [c(options, 'scrollbar')]: (value) => {
          const [thumbColor, trackColor, size, borderRadius] =
            `${value}`.split(',')

          const thC = thumbColor ?? t(theme, 'scrollbarThumbColor')
          const trC = trackColor ?? t(theme, 'scrollbarTrackColor')
          const sz = size ?? t(theme, 'scrollbarSize')
          const bR = borderRadius ?? t(theme, 'scrollbarBorderRadius')

          return {
            scrollbarColor: `${thC} ${trC}`,
            '&::-webkit-scrollbar,&::-webkit-scrollbar-track,&::-webkit-scrollbar-corner':
              {
                backgroundColor: trC,
              },
            '&::-webkit-scrollbar-thumb': {
              borderStyle: 'solid',
              borderColor: 'transparent',
              backgroundClip: 'content-box',
              backgroundColor: thC,
              borderWidth:
                sz === 'thin' || sz === 'medium' || sz === 'thick'
                  ? borderWidth[sz]
                  : sz,
              borderRadius: bR,
            },
          }
        },
      },
      {
        values: {},
      },
    ],
  ],
}

export default scrollbar
