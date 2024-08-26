const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#EEEEEE',
      'primary': '#222831',
      'secondary': '#393E46',
			'accent': '#00ADB5',
    },
		extend: {
			fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
		},
	},
  plugins: [],
}
