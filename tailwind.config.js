/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: ['"Unknown Display"', 'serif'],
			presicav: ['"Presicav"', 'serif'],
			sans: ['"Unknown Mono"', 'sans-serif']
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					lg: '2rem'
				}
			},
			colors: {
				gray: {
					50: '#EBEBEB',
					100: '#D5D5D5',
					200: '#BEBFBF',
					300: '#A8A9A9',
					400: '#919393',
					500: '#7B7C7D',
					600: '#646567',
					700: '#4E4F51',
					800: '#37383B',
					900: '#212125'
				},
				ivory: {
					50: '#E5E3DB',
					100: '#D8D7CF',
					200: '#CCCCC3',
					300: '#BEBFB6',
					400: '#B1B2AA',
					500: '#A4A69E',
					600: '#969992',
					700: '#898C86',
					800: '#7C8079',
					900: '#6F736D'
				}
			}
		}
	},
	plugins: []
};
