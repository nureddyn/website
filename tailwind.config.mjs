import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Oswald", ...defaultTheme.fontFamily.sans],
  			serif: ["EB Garamond", ...defaultTheme.fontFamily.serif],
  		},
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
