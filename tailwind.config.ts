import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#fff9e0",
				primary: "#ffd500",
				secondary: "#FFEA76",
				text: "#3c0e01",
				text2: "#333300",
			},
		},
	},
	plugins: [],
}
export default config
