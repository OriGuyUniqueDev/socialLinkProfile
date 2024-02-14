/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			black: "#141414",
			"dark-gray": "#1f1f1f",
			gray: "#333333",
			white: "#FFFFFF",
			"neon-green": "#C4F82A",
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
