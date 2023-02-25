import type { PluginAPI, PluginUtils } from 'tailwindcss/types/config'

// #region CONFIG
export type PluginOptions = {
  useLogicalProperties: boolean
  useGlobalMeasure: boolean
  measureExceptions: string
  baseSpacingKey: string
  measureKey: string
  useGlobalScrollbarStyles: boolean
  maxStackSplitAfter: number
  switcherLimit: number
  maxSwitcherLimit: number
  frameSelectors: string
  classNames: {
    stack: string
    box: string
    center: string
    cluster: string
    sidebar: string
    switcher: string
    cover: string
    coverTarget: string
    grid: string
    frame: string
    frameTarget: string
    reel: string
    imposter: string
    icon: string
    iconTarget: string
    scrollbar: string
    'border-hc': string
  }
}

export type PluginTheme = {
  measure: `${string}ch`
  baseSpacing: `${string}rem`
  sidebarMainMinWidth: `${number}%`
  gridItemMinWidth: string
  frameAspectRatio: string
  iconGap: `${string}em`
  iconSize: `${string}em`
  iconNudgeSm: `${string}em`
  iconNudgeMd: `${string}em`
  iconNudgeLg: `${string}em`
  iconNudgeXl: `${string}em`
  scrollbarThumbColor: string
  scrollbarTrackColor: string
  scrollbarSize: 'thin' | 'medium' | 'thick'
  scrollbarBorderRadius: '9999px' | '0px'
}
// #endregion

// #region THEME FUNCTIONS
export type PluginThemeFunction = PluginAPI['theme']
export type LookupThemeFunction = PluginUtils['theme']
// #endregion

// #region GENERATORS
export type AddBaseParams = Parameters<PluginAPI['addBase']>
// type AddComponentsParams = Parameters<PluginAPI['addComponents']>
// type MatchComponentsParams = Parameters<PluginAPI['matchComponents']>
export type AddUtilitiesParams = Parameters<PluginAPI['addUtilities']>
export type MatchUtilitiesParams = Parameters<
  PluginAPI['matchUtilities']
>

type ParamsGenerator<
  T extends
    | AddBaseParams
    // | AddComponentsParams
    // | MatchComponentsParams
    | AddUtilitiesParams
    | MatchUtilitiesParams,
> = (config: {
  options: PluginOptions
  theme: PluginThemeFunction
}) => T

export type AddBaseParamsGenerator = ParamsGenerator<AddBaseParams>

// export type AddComponentsParamsGenerator =
//   ParamsGenerator<AddComponentsParams>

// export type MatchComponentsParamsGenerator =
//   ParamsGenerator<MatchComponentsParams>

export type AddUtilitiesParamsGenerator =
  ParamsGenerator<AddUtilitiesParams>

export type MatchUtilitiesParamsGenerator =
  ParamsGenerator<MatchUtilitiesParams>

export type Utility = {
  static?: AddUtilitiesParamsGenerator[]
  dynamic?: MatchUtilitiesParamsGenerator[]
}
// #endregion

// #region UTILITIES
export type ValueOf<T> = T[keyof T]
// #endregion
