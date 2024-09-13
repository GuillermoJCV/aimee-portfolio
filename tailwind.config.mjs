/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				lightblue : {
					50	: "#f0faff",
					100 : "#e1f4fd",
					200 : "#bce9fb",
					300 : "#81d9f8",
					400 : "#3ec5f2",
					500 : "#15afe2",
					600 : "#088dc1",
					700 : "#08719c",
					800 : "#0b5f81",
					900 : "#0f4e6b",
					950 : "#0a3347"
				},
				lightpink : {
					50	: "#fff1f3",
					100 : "#ffe4e8",
					200 : "#fecdd6",
					300 : "#fda4b5",
					400 : "#fb718f",
					500 : "#f43f6b",
					600 : "#e11d56",
					700 : "#be1248",
					800 : "#9f1243",
					900 : "#88133f",
					950 : "#4c051e"
				},
				strawberry : {
					50	: "#fff1f2",
					100 : "#ffe4e6",
					200 : "#fecdd1",
					300 : "#fda4aa",
					400 : "#fb717b",
					500 : "#f43f4c",
					600 : "#e11d2b",
					700 : "#be121e",
					800 : "#9f121c",
					900 : "#88131b",
					950 : "#4c050a"
				}
			}
		},
	},
	plugins: [],
}
