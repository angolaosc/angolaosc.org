import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "motivations-pattern": "url('/black-logo.svg/')",
      },
       colors: {
        'bgd': '#182138',
         'link': '#ffff8a',
         'lhover': '#ffffff',
         'btc': '#000000',
         "btn": "#F87171"
      },
    },
  },
  darkSelector: '.dark',
  plugins: [],
};
export default config;
