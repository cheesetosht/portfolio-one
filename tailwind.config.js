/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Karla"', 'sans-serif'],
				serif: ['Georgia', 'serif'],
				barlow: ['"Barlow"', 'sans-serif']
			},
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
				},
				carmine: {
					50: '#fdf3f3',
					100: '#fbe5e5',
					200: '#f9cfcf',
					300: '#f3aeae',
					400: '#ea7f7f',
					500: '#de5555',
					600: '#ba3232',
					700: '#a92c2c',
					800: '#8c2828',
					900: '#752727',
					950: '#3f1010'
				},
				oasis: {
					50: '#fff9ed',
					100: '#fff2d3',
					200: '#fee2aa',
					300: '#fdcc74',
					400: '#fbab3c',
					500: '#f99116',
					600: '#ea760c',
					700: '#c2590c',
					800: '#9a4612',
					900: '#7c3b12',
					950: '#431c07'
				}
			}
		}
	},
	plugins: []
};
