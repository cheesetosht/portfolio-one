/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['"Presicav"', 'serif'],
			sans: ['"JetBrains Mono"', 'sans-serif']
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					lg: '2rem'
				}
			}
		}
	},
	plugins: []
};
