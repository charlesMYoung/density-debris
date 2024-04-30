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
              "--tw-prose-body": "hsl(var(--nextui-primary-800))",
              "--tw-prose-headings": "hsl(var(--nextui-primary-900))",
              "--tw-prose-lead": "hsl(var(--nextui-primary-700))",
              "--tw-prose-links": "hsl(var(--nextui-primary-900))",
              "--tw-prose-bold": "hsl(var(--nextui-primary-900))",
              "--tw-prose-counters": "hsl(var(--nextui-primary-600))",
              "--tw-prose-bullets": "hsl(var(--nextui-primary-400))",
              "--tw-prose-hr": "hsl(var(--nextui-primary-300))",
              "--tw-prose-quotes": "hsl(var(--nextui-primary-900))",
              "--tw-prose-quote-borders": "hsl(var(--nextui-primary-300))",
              "--tw-prose-captions": "hsl(var(--nextui-primary-700))",
              "--tw-prose-code": "hsl(var(--nextui-primary-900))",
              "--tw-prose-pre-code": "hsl(var(--nextui-primary-100))",
              "--tw-prose-pre-bg": "hsl(var(--nextui-primary-900))",
              "--tw-prose-th-borders": "hsl(var(--nextui-primary-300))",
              "--tw-prose-td-borders": "hsl(var(--nextui-primary-200))",
              "--tw-prose-invert-body": "hsl(var(--nextui-primary-200))",
              "--tw-prose-invert-headings": "hsl(var(--nextui-primary-900))",
              "--tw-prose-invert-lead": "hsl(var(--nextui-primary-300))",
              "--tw-prose-invert-links": "hsl(var(--nextui-primary-900))",
              "--tw-prose-invert-bold": "hsl(var(--nextui-primary-900))",
              "--tw-prose-invert-counters": "hsl(var(--nextui-primary-400))",
              "--tw-prose-invert-bullets": "hsl(var(--nextui-primary-600))",
              "--tw-prose-invert-hr": "hsl(var(--nextui-primary-700))",
              "--tw-prose-invert-quotes": "hsl(var(--nextui-primary-100))",
              "--tw-prose-invert-quote-borders":
                "hsl(var(--nextui-primary-700))",
              "--tw-prose-invert-captions": "hsl(var(--nextui-primary-400))",
              "--tw-prose-invert-code": "hsl(var(--nextui-primary-900))",
              "--tw-prose-invert-pre-code": "hsl(var(--nextui-primary-300))",
              "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
              "--tw-prose-invert-th-borders": "hsl(var(--nextui-primary-600))",
              "--tw-prose-invert-td-borders": "hsl(var(--nextui-primary-700))",
            },
          },
        };
      },
    },
  },
  plugins: [twTypography(), nextui()],
};
