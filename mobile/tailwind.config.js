/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#fff',
				darkBackground: '#202020',
				textColor: '#000',
				darkTextColor: '#fff',
			},
		},
	},
	plugins: [],
};
