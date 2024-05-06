import twTypography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

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
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ...themeColors(),
      },
      fontFamily: {
        sans: ["smiley-sans"],
      },
      typography: ({ theme }) => {
        return {
          md: {
            //tertiary
            css: {
              "--tw-prose-body": "var(--md-sys-color-primary)",
              "--tw-prose-headings": "var(--md-sys-color-primary)",
              "--tw-prose-lead": "var(--md-sys-color-primary)",
              "--tw-prose-links": "var(--md-sys-color-primary)",
              "--tw-prose-bold": "var(--md-sys-color-primary)",
              "--tw-prose-counters": "var(--md-sys-color-primary)",
              "--tw-prose-bullets": "var(--md-sys-color-primary)",
              "--tw-prose-hr": "var(--md-sys-color-primary)",
              "--tw-prose-quotes": "var(--md-sys-color-primary)",
              "--tw-prose-quote-borders": "var(--md-sys-color-primary)",
              "--tw-prose-captions": "var(--md-sys-color-primary)",
              "--tw-prose-code": "var(--md-sys-color-primary)",
              "--tw-prose-pre-code": "var(--md-sys-color-primary)",
              "--tw-prose-pre-bg": "var(--md-sys-color-primary)",
              "--tw-prose-th-borders": "var(--md-sys-color-primary)",
              "--tw-prose-td-borders": "var(--md-sys-color-primary)",
              "--tw-prose-invert-body": "var(--md-sys-color-primary)",
              "--tw-prose-invert-headings": "var(--md-sys-color-primary)",
              "--tw-prose-invert-lead": "var(--md-sys-color-primary)",
              "--tw-prose-invert-links": "var(--md-sys-color-primary)",
              "--tw-prose-invert-bold": "var(--md-sys-color-primary)",
              "--tw-prose-invert-counters": "var(--md-sys-color-primary)",
              "--tw-prose-invert-bullets": "var(--md-sys-color-primary)",
              "--tw-prose-invert-hr": "var(--md-sys-color-primary)",
              "--tw-prose-invert-quotes": "var(--md-sys-color-primary)",
              "--tw-prose-invert-quote-borders": "var(--md-sys-color-primary)",
              "--tw-prose-invert-captions": "var(--md-sys-color-primary)",
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code": "var(--md-sys-color-primary)",
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": "var(--md-sys-color-primary)",
              "--tw-prose-invert-td-borders": "var(--md-sys-color-primary)",
            },
          },
        };
      },
    },
  },
  plugins: [typography, twTypography()],
};
