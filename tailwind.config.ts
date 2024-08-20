import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		colors: ({ colors }) => ({
			red: {
				"1": "hsl(var(--red-1))",
				"2": "hsl(var(--red-2))",
				"3": "hsl(var(--red-3))",
				"4": "hsl(var(--red-4))",
				"5": "hsl(var(--red-5))",
				"6": "hsl(var(--red-6))",
				"7": "hsl(var(--red-7))",
				"8": "hsl(var(--red-8))",
				"9": "hsl(var(--red-9))",
				"10": "hsl(var(--red-10))",
				"11": "hsl(var(--red-11))",
			},
			black: {
				"1": "hsl(var(--black-1))",
				"2": "hsl(var(--black-2))",
				"3": "hsl(var(--black-3))",
				"4": "hsl(var(--black-4))",
				"5": "hsl(var(--black-5))",
				"6": "hsl(var(--black-6))",
			},
			white: {
				"1": "hsl(var(--white-1))",
				"2": "hsl(var(--white-2))",
				"3": "hsl(var(--white-3))",
			},
			green: {
				"1": "hsl(var(--green-1))",
				"2": "hsl(var(--green-2))",
				"3": "hsl(var(--green-3))",
			},
			blue: {
				"1": "hsl(var(--blue-1))",
			},
			purple: {
				"1": "hsl(var(--purple-1))",
			},
			violet: {
				"1": "hsl(var(--violet-1))",
			},
			transparent: colors.transparent,
		}),
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
