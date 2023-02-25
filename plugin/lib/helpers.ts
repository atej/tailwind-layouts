import { PLUGIN_NAMESPACE } from './constants'
import type {
  PluginTheme,
  PluginOptions,
  PluginThemeFunction,
  LookupThemeFunction,
  ValueOf,
} from './types'

export function t(
  theme: PluginThemeFunction | LookupThemeFunction,
  key: keyof PluginTheme,
): string {
  return theme(`${PLUGIN_NAMESPACE}.${key}`) as ValueOf<PluginTheme>
}

export const logicalProperties = {
  // Size
  width: 'inlineSize',
  maxWidth: 'maxInlineSize',
  minWidth: 'minInlineSize',
  height: 'blockSize',
  maxHeight: 'maxBlockSize',
  minHeight: 'minBlockSize',

  // Margin
  marginTop: 'marginBlockStart',
  marginBottom: 'marginBlockEnd',
  marginLeft: 'marginInlineStart',
  marginRight: 'marginInlineEnd',

  // Padding
  paddingTop: 'paddingBlockStart',
  paddingBottom: 'paddingBlockEnd',
  paddingLeft: 'paddingInlineStart',
  paddingRight: 'paddingInlineEnd',

  // Inset
  top: 'insetBlockStart',
  bottom: 'insetBlockEnd',
  left: 'insetInlineStart',
  right: 'insetInlineEnd',

  // Border Shorthand
  borderTop: 'borderBlockStart',
  borderBottom: 'borderBlockEnd',
  borderLeft: 'borderInlineStart',
  borderRight: 'borderInlineEnd',

  // Border Width
  borderTopWidth: 'borderBlockStartWidth',
  borderBottomWidth: 'borderBlockEndWidth',
  borderLeftWidth: 'borderInlineStartWidth',
  borderRightWidth: 'borderInlineEndWidth',

  // Border Color
  borderTopColor: 'borderBlockStartColor',
  borderBottomColor: 'borderBlockEndColor',
  borderLeftColor: 'borderInlineStartColor',
  borderRightColor: 'borderInlineEndColor',

  // Border Style
  borderTopStyle: 'borderBlockStartStyle',
  borderBottomStyle: 'borderBlockEndStyle',
  borderLeftStyle: 'borderInlineStartStyle',
  borderRightStyle: 'borderInlineEndStyle',

  // Border Radius
  borderTopLeftRadius: 'borderStartStartRadius',
  borderTopRightRadius: 'borderStartEndRadius',
  borderBottomRightRadius: 'borderEndEndRadius',
  borderBottomLeftRadius: 'borderEndStartRadius',

  // Overflow
  overflowX: 'overflowInline',
  overflowY: 'overflowBlock',
}

export const l = (
  options: PluginOptions,
  prop: keyof typeof logicalProperties,
) => {
  if (options.useLogicalProperties) {
    return logicalProperties[prop]
  }

  return prop
}

export const generateObjectOfNaturaLNumbersUpto = (
  n: unknown,
  defaultN: number,
) =>
  Array.from(
    { length: isNaN(Number(n)) ? defaultN : Number(n) },
    (_, i) => i + 1,
  ).reduce((obj: Record<string, number>, num) => {
    obj[`${num}`] = num
    return obj
  }, {})

export const c = (
  options: PluginOptions,
  key: keyof PluginOptions['classNames'],
) => options.classNames[key]

export const filterObjectKeys = (
  obj: Record<string, unknown>,
  condition: (key: string) => boolean,
) =>
  Object.keys(obj).reduce((acc: Record<string, unknown>, key) => {
    if (condition(key)) {
      acc[key] = obj[key]
    }
    return acc
  }, {})

export const flattenColors = (
  colors: Record<string, string | Record<string, string>>,
) => {
  return Object.entries(colors).reduce((acc, [key, value]) => {
    if (typeof value === 'string') {
      acc[key] = value
    } else {
      Object.entries(value).forEach(([subKey, subValue]) => {
        acc[`${key}-${subKey}`] = subValue
      })
    }
    return acc
  }, {} as Record<string, string>)
}
