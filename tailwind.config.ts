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
				background: "hsl(var(--background))",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				text: "hsl(var(--text))",
			},
		},
	},
	plugins: [],
}
export default config
