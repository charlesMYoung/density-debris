
import plugin from "tailwindcss/plugin";
import twTypography from '@tailwindcss/typography'

const themeColors = () => {
	return [
		"primary",
		"on-primary",
		"primary-container",
		"on-primary-container",
		"error",
		"on-error",
		"error-container",
		"on-error-container",
		"secondary",
		"on-secondary",
		"secondary-container",
		"on-secondary-container",
		"surface",
		"on-surface",
		"surface-variant",
		"on-surface-variant",
		"tertiary",
		"on-tertiary",
		"tertiary-container",
		"on-tertiary-container",
		"background",
		"on-background",
		"outline",
		"shadow",
		"inverse-on-surface",
		"inverse-primary",
		"inverse-surface",
	].reduce((total, item) => {
		total[`${item}`] = `var(--md-sys-color-${item})`;
		return total;
	}, {});
};

const fontUnit = (/** @type {number} */ size) => {
	return `${size / 16}rem`;
};

const typography = plugin(({ addComponents, theme }) => {
	addComponents({
		".dp-lg": {
			lineHeight: fontUnit(64),
			fontSize: fontUnit(57),
			fontWeight: 400,
		},
		".dp-md": {
			lineHeight: fontUnit(52),
			fontSize: fontUnit(45),
			fontWeight: 400,
		},
		".dp-sm": {
			lineHeight: fontUnit(44),
			fontSize: fontUnit(36),
			fontWeight: 400,
		},
		".hl-lg": {
			lineHeight: fontUnit(40),
			fontSize: fontUnit(32),
			fontWeight: 400,
		},
		".hl-md": {
			lineHeight: fontUnit(36),
			fontSize: fontUnit(28),
			fontWeight: 400,
		},
		".hl-sm": {
			lineHeight: fontUnit(32),
			fontSize: fontUnit(24),
			fontWeight: 400,
		},
		".title-lg": {
			lineHeight: fontUnit(28),
			fontSize: fontUnit(22),
			fontWeight: 400,
		},
		".title-md": {
			lineHeight: fontUnit(24),
			fontSize: fontUnit(16),
			fontWeight: 500,
			letterSpacing: fontUnit(0.15),
		},
		".title-sm": {
			lineHeight: fontUnit(20),
			fontSize: fontUnit(14),
			fontWeight: 500,
			letterSpacing: fontUnit(0.1),
		},
		".label-lg": {
			lineHeight: fontUnit(20),
			fontSize: fontUnit(14),
			fontWeight: 400,
			letterSpacing: fontUnit(0.1),
		},
		".label-md": {
			lineHeight: fontUnit(16),
			fontSize: fontUnit(12),
			fontWeight: 500,
			letterSpacing: fontUnit(0.5),
		},
		".label-sm": {
			lineHeight: fontUnit(6),
			fontSize: fontUnit(11),
			fontWeight: 500,
			letterSpacing: fontUnit(0.5),
		},
		".body-lg": {
			lineHeight: fontUnit(24),
			fontSize: fontUnit(16),
			fontWeight: 500,
			letterSpacing: fontUnit(0.15),
		},
		".body-md": {
			lineHeight: fontUnit(20),
			fontSize: fontUnit(14),
			fontWeight: 500,
			letterSpacing: fontUnit(0.25),
		},
		".body-sm": {
			lineHeight: fontUnit(16),
			fontSize: fontUnit(12),
			fontWeight: 500,
			letterSpacing: fontUnit(0.4),
		},
	});
});


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				...themeColors(),
			},
			fontFamily: {
				sans: ['smiley-sans'],
			},
			typography: ({ theme }) => {
				return {
					pink: {
						css: {
							'--tw-prose-body': 'var(--md-sys-color-background)',
							'--tw-prose-headings': 'var(--md-sys-color-primary)',
							'--tw-prose-lead': 'var(--md-sys-color-secondary)',
							'--tw-prose-links': theme('colors.pink[900]'),
							'--tw-prose-bold': theme('colors.pink[900]'),
							'--tw-prose-counters': theme('colors.pink[600]'),
							'--tw-prose-bullets': theme('colors.pink[400]'),
							'--tw-prose-hr': theme('colors.pink[300]'),
							'--tw-prose-quotes': theme('colors.pink[900]'),
							'--tw-prose-quote-borders': theme('colors.pink[300]'),
							'--tw-prose-captions': theme('colors.pink[700]'),
							'--tw-prose-code': theme('colors.pink[900]'),
							'--tw-prose-pre-code': theme('colors.pink[100]'),
							'--tw-prose-pre-bg': theme('colors.pink[900]'),
							'--tw-prose-th-borders': theme('colors.pink[300]'),
							'--tw-prose-td-borders': theme('colors.pink[200]'),
							'--tw-prose-invert-body': theme('colors.pink[200]'),
							'--tw-prose-invert-headings': theme('colors.white'),
							'--tw-prose-invert-lead': theme('colors.pink[300]'),
							'--tw-prose-invert-links': theme('colors.white'),
							'--tw-prose-invert-bold': theme('colors.white'),
							'--tw-prose-invert-counters': theme('colors.pink[400]'),
							'--tw-prose-invert-bullets': theme('colors.pink[600]'),
							'--tw-prose-invert-hr': theme('colors.pink[700]'),
							'--tw-prose-invert-quotes': theme('colors.pink[100]'),
							'--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
							'--tw-prose-invert-captions': theme('colors.pink[400]'),
							'--tw-prose-invert-code': theme('colors.white'),
							'--tw-prose-invert-pre-code': theme('colors.pink[300]'),
							'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
							'--tw-prose-invert-th-borders': theme('colors.pink[600]'),
							'--tw-prose-invert-td-borders': theme('colors.pink[700]'),
						}
					}
				}
			}
		},
	},
	plugins: [typography, twTypography()],
}
