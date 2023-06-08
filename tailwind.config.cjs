const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Karla', ...defaultTheme.fontFamily.sans]
			}
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		colors: {
			black: '#000',
			light: '#FDFDFD',
			accent: '#E06330',
			zinc: colors.zinc
		},
		boxShadow: {
			sm: '0px 1px 1px 0px hsla(0, 0%, 15%, 1)',
			md: '0px 2px 0px 0px hsla(0, 0%, 15%, 0.84)'
		},
		fontFamily: {
			monospace: ['Inconsolata', 'monospace']
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem'
		},
		letterSpacing: {
			wide: '.025em'
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold'
				},
				li: {
					letterSpacing: theme('letterSpacing.wide')
				}
			})
		})
	]
}
