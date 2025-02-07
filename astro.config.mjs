import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import a11yEmoji from '@fec/remark-a11y-emoji'
import rehypeSlug from 'rehype-slug'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import astroI18next from 'astro-i18next'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	site: 'https://tsxoxo.com',

	integrations: [mdx(), astroI18next()],

	markdown: {
		// Applied to .md and .mdx files
		remarkPlugins: [[remarkToc, { maxDepth: 2 }], a11yEmoji],
		rehypePlugins: [
			rehypeSlug,
			[rehypeAutolinkHeadings, { behavior: 'wrap' }]
		]
	},

	vite: {
		plugins: [tailwindcss()]
	}
})
