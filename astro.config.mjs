import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import astroI18next from 'astro-i18next'

export default defineConfig({
	site: 'https://tsxoxo.com',
	integrations: [
		tailwind(),
		mdx(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp'
		}),
		astroI18next()
	]
})
