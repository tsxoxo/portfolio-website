const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontSize: {
				'fl-sm': 'var(--step--1)',
				'fl-base': 'var(--step-0)',
				'fl-lg': 'var(--step-1)',
				'fl-xl': 'var(--step-2)',
				'fl-2xl': 'var(--step-3)'
			},
			fontFamily: {
				sans: ['Karla', ...defaultTheme.fontFamily.sans]
			}
		},
		screens: {
			'utopia-min': '320px',
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
			md: '4px 4px 0px 0px hsla(0, 0%, 15%, 0.84)'
		},
		fontFamily: {
			monospace: ['Inconsolata', 'monospace']
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
