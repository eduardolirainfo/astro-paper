// const defaultTheme =   require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */

// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

module.exports = {
  important: true,
  mode: 'jit',
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],  
  theme: {
		extend: {},
	},
  // theme: {
  //   fontFamily: {
  //     display: ["Poppins", ...defaultTheme.fontFamily.sans],
  //     body: ["Poppins", ...defaultTheme.fontFamily.sans],
  //   },
  //   extend: {
  //     fontFamily: {
  //       mono: ["Poppins", ...defaultTheme.fontFamily.mono],
  //     },
  //   },
  //   screens: {
  //     sm: "640px",
  //     md: "768px",
  //     lg: "1024px",
  //     xl: "1280px",
  //   },
    
  //   // extend: {
  //   textColor: {
  //     skin: {
  //       base: withOpacity("--color-text-base"),
  //       accent: withOpacity("--color-accent"),
  //       inverted: withOpacity("--color-fill"),
  //     },
  //   },
  //   backgroundColor: {
  //     skin: {
  //       fill: withOpacity("--color-fill"),
  //       accent: withOpacity("--color-accent"),
  //       inverted: withOpacity("--color-text-base"),
  //       card: withOpacity("--color-card"),
  //       "card-muted": withOpacity("--color-card-muted"),
  //     },
  //   },
  //   outlineColor: {
  //     skin: {
  //       fill: withOpacity("--color-accent"),
  //     },
  //   },
  //   borderColor: {
  //     skin: {
  //       line: withOpacity("--color-border"),
  //       fill: withOpacity("--color-text-base"),
  //       accent: withOpacity("--color-accent"),
  //     },
  //   },
  //   fill: {
  //     skin: {
  //       base: withOpacity("--color-text-base"),
  //       accent: withOpacity("--color-accent"),
  //     },
  //     transparent: "transparent",
  //   },
  
  // },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: true,
    darkTheme: "dark", 
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
	  }
};


	