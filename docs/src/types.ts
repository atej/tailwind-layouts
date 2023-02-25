export type PathName =
  | 'usage'
  | 'layouts'
  | 'utilities'
  | 'motivation'
export type LayoutName =
  | 'stack'
  | 'box'
  | 'center'
  | 'cluster'
  | 'switcher'
  | 'cover'
  | 'sidebar'
  | 'grid'
  | 'frame'
  | 'reel'
  | 'imposter'
  | 'icon'
export type NavLink<T = string> = {
  slug: T
  text: string
}
export type NavLinks<T = string> = NavLink<T>[]

export type TOCLink<T = string> = NavLink<T> & {
  depth: 1 | 2 | 3 | 4 | 5 | 6
}
export type TOCLinks<T = string> = TOCLink<T>[]

export type PropsDocs = string[][][]
export type RequiredClassNames = Array<string>
export type ClassNamesState = Record<string, boolean>
export type ShowcaseActionName = 'narrow' | 'highContrast'

export type ShowcaseProps = {
  demoClassNames: ClassNamesState
  requiredClassNames: RequiredClassNames
  blockCount?: number
  customBlocks?: Array<string>
  hasCustomContent?: boolean
  actions?: Array<ShowcaseActionName>
}

export type SectionData = ShowcaseProps & {
  name: LayoutName
  subhead: string
  description: string
  propsDocs: PropsDocs
}
