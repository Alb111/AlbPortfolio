import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				"fira": ['Fira+Code']
			},
			colors: {
				darkGray: 'rgb(38, 36, 36)', 
				lightGray: 'rgb(70, 71, 70)' 
			},
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
