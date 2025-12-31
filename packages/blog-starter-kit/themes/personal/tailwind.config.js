/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./components/**/*.tsx', './pages/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				heading: ['Fraunces', 'Georgia', 'serif'],
				sans: ['Karla', 'system-ui', 'sans-serif'],
			},
			colors: {
				'accent-1': '#FAFAFA',
				'accent-2': '#EAEAEA',
				'accent-7': '#333',
				success: '#0070f3',
				cyan: '#79FFE1',
				primary: {
					50: '#fdf4f3',
					100: '#fce8e6',
					200: '#f9d5d2',
					300: '#f4b5af',
					400: '#ec8b82',
					500: '#df6459',
					600: '#ca4a3e',
					700: '#a93c31',
					800: '#8c352c',
					900: '#75322b',
					950: '#3f1612',
				},
				warm: {
					50: '#fefaf6',
					100: '#fdf3e7',
					200: '#fae4c9',
					300: '#f5cea0',
					400: '#efb06e',
					500: '#e99447',
					600: '#db7a33',
					700: '#b6602a',
					800: '#924d29',
					900: '#764124',
					950: '#3f1f10',
				},
				pink: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
					950: '#500724',
				},
			},
			typography: () => ({
				DEFAULT: {
				  css: {
					'div[data-node-type="callout"]': {
					  display: 'flex',
					  'justify-content': 'flex-start',
					  'align-items': 'flex-start',
					  'background-color': '#F8FAFC',
					  border: '1px solid #E2E8F0',
					  padding: ' 1rem 1.5rem',
					  gap: '0.5rem',
					  'border-radius': '0.5rem',
					  margin: '1rem 0',
					  'word-break': 'break-word',
					},
					'div[data-node-type="callout-emoji"]': {
					  background: '#E2E8F0',
					  'border-radius': '0.5rem',
					  minWidth: '1.75rem',
					  width: '1.75rem',
					  height: '1.5rem',
					  display: 'flex',
					  'margin-top': '0.3rem',
					  'justify-content': 'center',
					  'align-items': 'center',
					  'font-size': '1rem',
					}
				  },
				}
			}),
			spacing: {
				28: '7rem',
			},
			letterSpacing: {
				tighter: '-.04em',
			},
			lineHeight: {
				tight: 1.2,
			},
			fontSize: {
				'5xl': '2.5rem',
				'6xl': '2.75rem',
				'7xl': '4.5rem',
				'8xl': '6.25rem',
			},
			boxShadow: {
				sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
				md: '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
