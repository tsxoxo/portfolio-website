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
			},
			spacing: {
				'space-fl-2xs': 'var(--space-2xs)',
				'space-fl-xs': 'var(--space-xs)',
				'space-fl-s': 'var(--space-s)',
				'space-fl-m': 'var(--space-m)',
				'space-fl-l': 'var(--space-l)',
				'space-fl-xl': 'var(--space-xl)',
				'space-fl-2xl': 'var(--space-2xl)',
				'space-fl-3xl': 'var(--space-3xl)',
				'space-fl-s-m': 'var(--space-s-m)',
				'space-fl-s-l': 'var(--space-s-l)',
				'space-fl-xl-m': 'var(--space-xl-m)',
				'space-fl-xl-2xl': 'var(--space-xl-2xl)',
				'space-fl-2xs-xs': 'var(--space-2xs-xs)',
				'space-fl-2xl-3xl': 'var(--space-2xl-3xl)'
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
			grey: 'hsla(180, 2%, 26%, 1)',
			light: 'hsla(176, 36%, 99%, 1)',
			accent: '#E06330',
			zinc: colors.zinc
		},
		boxShadow: {
			sm: '0px 1px 1px 0px hsla(0, 0%, 15%, 1)',
			md: '4px 4px 0px 0px hsla(0, 0%, 15%, 0.84)'
		},
		fontFamily: {
			monospace: ['Courier', 'monospace']
		},
		letterSpacing: {
			wide: '.025em'
		}
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { lineHeight: '1.2', fontWeight: '700' },
				h2: {
					lineHeight: '1.2',
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: '800'
				},
				li: {
					letterSpacing: theme('letterSpacing.wide')
				}
			})
		})
	]
}
