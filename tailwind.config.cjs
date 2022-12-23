const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: { 
    fontFamily: {
      display: ["Inter", ...defaultTheme.fontFamily.sans],
      body: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        gray: colors.zinc,
      },
      fontFamily: {
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        tight: "-0.015em",
      },
      lineHeight: {
        tighter: "1.1111111",
      },
      screens: {
        tablet: "520px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": colors.gray[700],
            "--tw-prose-headings": colors.gray[900],
            "--tw-prose-lead": colors.gray[600],
            "--tw-prose-links": colors.gray[900],
            "--tw-prose-bold": colors.gray[900],
            "--tw-prose-counters": colors.gray[500],
            "--tw-prose-bullets": colors.gray[300],
            "--tw-prose-hr": colors.gray[200],
            "--tw-prose-quotes": colors.gray[900],
            "--tw-prose-quote-borders": colors.gray[200],
            "--tw-prose-captions": colors.gray[500],
            "--tw-prose-code": "#1a1b26",
            "--tw-prose-invert-pre-code": "#a9b1d6",
            "--tw-prose-invert-pre-bg": "#1a1b26",
            "--tw-prose-th-borders": colors.gray[300],
            "--tw-prose-td-borders": colors.gray[200],
            "--tw-prose-invert-body": colors.gray[400],
            "--tw-prose-invert-headings": colors.gray[100],
            "--tw-prose-invert-lead": colors.gray[500],
            "--tw-prose-invert-links": colors.gray[100],
            "--tw-prose-invert-bold": colors.gray[100],
            "--tw-prose-invert-counters": colors.gray[500],
            "--tw-prose-invert-bullets": colors.gray[700],
            "--tw-prose-invert-hr": colors.gray[800],
            "--tw-prose-invert-quotes": colors.gray[200],
            "--tw-prose-invert-quote-borders": colors.gray[800],
            "--tw-prose-invert-captions": colors.gray[500],
            "--tw-prose-invert-code": "#a9b1d6",
            "--tw-prose-invert-pre-code": "#a9b1d6",
            "--tw-prose-invert-pre-bg": "#1a1b26",
            "--tw-prose-invert-th-borders": colors.gray[700],
            "--tw-prose-invert-td-borders": colors.gray[800],
          },
        },
      }),
    },
       textColor: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-fill"),
      },
    },
    backgroundColor: {
      skin: {
        fill: withOpacity("--color-fill"),
        accent: withOpacity("--color-accent"),
        inverted: withOpacity("--color-text-base"),
        card: withOpacity("--color-card"),
        "card-muted": withOpacity("--color-card-muted"),
        a: withOpacity("--background-card-accent"),
      },
    },
    outlineColor: {
      skin: {
        fill: withOpacity("--color-accent"),
      },
    },
    borderColor: {
      skin: {
        line: withOpacity("--color-border"),
        fill: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
    },
    fill: {
      skin: {
        base: withOpacity("--color-text-base"),
        accent: withOpacity("--color-accent"),
      },
      transparent: "transparent",
    },
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
