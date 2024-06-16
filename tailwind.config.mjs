/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cranberry: {
					50: '#fcf3f7',
					100: '#fae9f1',
					200: '#f6d4e2',
					300: '#f0b1ca',
					400: '#e581a7',
					500: '#d95986',
					600: '#c73b65',
					700: '#ab2b4e',
					800: '#8e2641',
					900: '#772439',
					950: '#480f1e',
				},
			},
			screens: {
				phone: '480px',
				tablet: '768px',
				desktop: '1024px',
			},
			blur: {
				xs: '2px',
			  }
		},
	},
	plugins: [],
}
