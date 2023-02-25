import type { PluginTheme } from './types'

const defaultTheme: PluginTheme = {
  measure: '65ch',
  baseSpacing: '1rem',
  sidebarMainMinWidth: '66.666667%',
  gridItemMinWidth: '250px',
  frameAspectRatio: '16/9',
  iconSize: '0.9em', // a value that seems to work well for most icon families
  iconGap: '0.3em', // a little more than a typical space character which is usually a fourth of an em
  iconNudgeSm: '0.0625em',
  iconNudgeMd: '0.125em',
  iconNudgeLg: '0.1875em',
  iconNudgeXl: '0.25em',
  scrollbarThumbColor: 'rgba(0, 0, 0, 0.5)',
  scrollbarTrackColor: 'transparent',
  scrollbarSize: 'medium',
  scrollbarBorderRadius: '9999px',
}

export default defaultTheme
