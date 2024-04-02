/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				yos: {
					primary: '#9C48B8',
					secondary: '#D43628',
					accent: '#B10CE8',
					neutral: '#9C48B8'
				}
			}
		]
	}
};
