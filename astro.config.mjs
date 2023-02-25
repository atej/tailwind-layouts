import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import prefetch from '@astrojs/prefetch'
import mdx from '@astrojs/mdx'

export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
  },
  integrations: [tailwind(), react(), prefetch(), mdx()],
})
