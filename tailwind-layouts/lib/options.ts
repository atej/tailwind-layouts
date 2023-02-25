import type { PluginOptions } from './types'

const defaultOptions: PluginOptions = {
  useGlobalMeasure: true,
  measureExceptions: 'html,body,div,header,nav,main,footer',
  useGlobalScrollbarStyles: false,
  useLogicalProperties: false,
  maxStackSplitAfter: 9,
  switcherLimit: 4,
  maxSwitcherLimit: 9,
  frameSelectors: 'img,iframe,video,embed,svg,canvas',
  classNames: {
    stack: 'stack-l',
    box: 'box-l',
    center: 'center-l',
    cluster: 'cluster-l',
    sidebar: 'sidebar-l',
    switcher: 'switcher-l',
    cover: 'cover-l',
    coverTarget: 'center',
    grid: 'grid-l',
    frame: 'frame-l',
    frameTarget: 'frame',
    reel: 'reel-l',
    imposter: 'imposter-l',
    icon: 'icon-l',
    iconTarget: 'icon',
    scrollbar: 'scrollbar',
    'border-hc': 'border-hc',
  },
  measureKey: 'measure',
  baseSpacingKey: 'base',
}

export default defaultOptions
