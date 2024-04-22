import twTypography from "@tailwindcss/typography";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        sans: ["smiley-sans"],
      },
      typography: ({ theme }) => {
        return {
          md: {
            css: {
              "--tw-prose-body": "var(--md-sys-color-background)",
              "--tw-prose-headings": "var(--md-sys-color-primary)",
              "--tw-prose-lead": "var(--md-sys-color-secondary)",
              "--tw-prose-links": "var(--md-sys-color-primary)",
              "--tw-prose-bold": "var(--md-sys-color-primary)",
              "--tw-prose-counters": "var(--md-sys-color-secondary)",
              "--tw-prose-bullets": "var(--md-sys-color-primary-container)",
              "--tw-prose-hr": "var(--md-sys-color-primary-container)",
              "--tw-prose-quotes": "var(--md-sys-color-primary)",
              "--tw-prose-quote-borders":
                "var(--md-sys-color-primary-container)",
              "--tw-prose-captions": "var(--md-sys-color-primary)",
              "--tw-prose-code": "var(--md-sys-color-primary)",
              "--tw-prose-pre-code": "var(--md-sys-color-primary-container)",
              "--tw-prose-pre-bg": "var(--md-sys-color-primary)",
              "--tw-prose-th-borders": "var(--md-sys-color-primary-container)",
              "--tw-prose-td-borders": "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-body": "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-headings": theme("colors.white"),
              "--tw-prose-invert-lead": "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-links": theme("colors.white"),
              "--tw-prose-invert-bold": theme("colors.white"),
              "--tw-prose-invert-counters":
                "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-bullets": "var(--md-sys-color-secondary)",
              "--tw-prose-invert-hr": "var(--md-sys-color-primary)",
              "--tw-prose-invert-quotes":
                "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-quote-borders": "var(--md-sys-color-primary)",
              "--tw-prose-invert-captions":
                "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-code": theme("colors.white"),
              "--tw-prose-invert-pre-code":
                "var(--md-sys-color-primary-container)",
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": "var(--md-sys-color-secondary)",
              "--tw-prose-invert-td-borders": "var(--md-sys-color-primary)",
            },
          },
        };
      },
    },
  },
  plugins: [twTypography(), nextui()],
};
