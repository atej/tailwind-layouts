import type { NavLinks, PathName } from './types'

export const SITE_TITLE = 'Tailwind Layouts'
export const SITE_DESCRIPTION = 'Layout primitives for TailwindCSS.'
export const GITHUB_URL = 'https://github.com/atej/tailwind-layouts'
export const DEFAULT_THEME_URL = `${GITHUB_URL}/blob/main/tailwind-layouts/lib/theme.ts`
export const DEFAULT_OPTIONS_URL = `${GITHUB_URL}//blob/main/tailwind-layouts/lib/options.ts`
export const AUTHOR_TWITTER_URL = 'https://twitter.com/aseemtaneja'

export const PRIMARY_LINKS: NavLinks<PathName> = [
  { slug: 'usage', text: 'Usage' },
  { slug: 'layouts', text: 'Layouts' },
  { slug: 'utilities', text: 'Utilities' },
  { slug: 'motivation', text: 'Motivation' },
]
