/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"light-blue": "#7badee",
				"royal-blue": "#002658",
				"warm-blue": "#0056AA",
				"world-blue": "#0170bc"
			}
		},
	},
	plugins: [require('@tailwindcss/forms'),],
}
