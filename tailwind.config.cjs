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
				'fluid--1': 'clamp(0.80rem, calc(0.75rem + 0.22vw), 0.93rem)',
				'fluid-0': 'clamp(1.00rem, calc(0.79rem + 0.88vw), 1.50rem)',
				'fluid-1': 'clamp(1.25rem, calc(0.76rem + 2.08vw), 2.43rem)',
				'fluid-2': 'clamp(1.56rem, calc(0.58rem + 4.18vw), 3.93rem)',
				'fluid-3': 'clamp(1.95rem, calc(0.66rem + 5.50vw), 5.06rem)'
			},
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
			md: '4px 4px 0px 0px hsla(0, 0%, 15%, 0.84)'
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
