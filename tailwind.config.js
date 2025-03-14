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
			fontSize: {
				'2xs': '0.667rem'
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
				brick: {
					50: '#FAE9E9',
					100: '#F1C9C9',
					200: '#E7A9A9',
					300: '#DD8B8B',
					400: '#D26C6C',
					500: '#C64F4F',
					600: '#BA3232',
					700: '#AD1C1C',
					800: '#9A0B0B',
					900: '#820000',
					950: '#660000'
				},
				tan: {
					50: '#FFF8E2',
					100: '#FFF2D3',
					200: '#EDE2C2',
					300: '#DCD2B2',
					400: '#CAC2A2',
					500: '#B9B292',
					600: '#A7A282',
					700: '#969273',
					800: '#848164',
					900: '#737056',
					950: '#615F48'
				}
			}
		}
	},
	plugins: []
};
