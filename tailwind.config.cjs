/** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
	darkMode: "class",
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	theme: {
		colors: {
			current: "currentColor",
			transparent: "transparent",
			white: "#ffffff",
			primary: {
				50: "#ffebeb",
				100: "#ffe4e4",
				200: "#fecdd0",
				300: "#fda4a9",
				400: "#fb717b",
				500: "#f43f51",
				600: "#e11d3a",
				700: "#be1230",
				800: "#9f122f",
				900: "#88132f",
				950: "#4c0514",
			},

			// primary: {
			// 	50: "#fff1f4",
			// 	100: "#ffe3e9",
			// 	200: "#ffccd8",
			// 	300: "#ffb3c6",
			// 	400: "#fe6e95",
			// 	500: "#f83b73",
			// 	600: "#e51960",
			// 	700: "#c20e51",
			// 	800: "#a20f4b",
			// 	900: "#8b1046",
			// 	950: "#4e0321",
			// },
		},
		fontFamily: {
			sans: ["Dancing Script Variable", "cursive"],
		},
		fontSize: {
			xs: ["1.125rem", "1.5rem"],
			sm: ["1.3125rem", "1.875rem"],
			base: ["1.5rem", "2.625rem"],
			lg: ["1.6875rem", "2.25rem"],
			xl: ["1.875rem", "3.1875rem"],
			"2xl": ["2.25rem", "3rem"],
			"3xl": ["2.8125rem", "3.5625rem"],
			"4xl": ["3.375rem", "4.125rem"],
			"5xl": ["4.5rem", "5.25rem"],
			"6xl": ["5.625rem", "6.375rem"],
		},

		// before
		// fontSize: {
		// 	xs: ["0.75rem", "1rem"],
		// 	sm: ["0.875rem", "1.25rem"],
		// 	base: ["1rem", "1.75rem"],
		// 	lg: ["1.125rem", "2rem"],
		// 	xl: ["1.25rem", "2.125rem"],
		// 	"2xl": ["1.5rem", "2rem"],
		// 	"3xl": ["1.875rem", "2.375rem"],
		// 	"4xl": ["2.25rem", "2.75rem"],
		// 	"5xl": ["3rem", "3.5rem"],
		// 	"6xl": ["3.75rem", "4.25rem"],
		// },
	},
};
