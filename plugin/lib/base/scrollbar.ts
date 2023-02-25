import type { PluginTheme, AddBaseParamsGenerator } from '../types'
import { t } from '../helpers'

type ScrollbarSize = PluginTheme['scrollbarSize']
const borderWidth: Record<ScrollbarSize, `${string}px`> = {
  thin: '6px',
  medium: '4px',
  thick: '2px',
}

const scrollbar: AddBaseParamsGenerator = ({ options, theme }) => [
  {
    '*': {
      scrollbarColor: `${t(theme, 'scrollbarThumbColor')} ${t(
        theme,
        'scrollbarTrackColor',
      )}`,
    },
    '::-webkit-scrollbar,::-webkit-scrollbar-track,::-webkit-scrollbar-corner':
      {
        backgroundColor: t(theme, 'scrollbarTrackColor'),
      },
    '::-webkit-scrollbar-thumb': {
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundClip: `content-box`,
      backgroundColor: t(theme, 'scrollbarThumbColor'),
      borderWidth: `${
        borderWidth[t(theme, 'scrollbarSize') as ScrollbarSize]
      }`,
      borderRadius: t(theme, 'scrollbarBorderRadius'),
    },
  },
]

export default scrollbar
