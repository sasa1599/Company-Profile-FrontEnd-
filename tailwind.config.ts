import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerImg: "url('/hero2 (1) (1).png')",
        historyImg: "url('/History.jpeg')",
        aboutImg:"url('/about-navbar (1) (1).png')",
        aboutusImg:"url('/hero.jpeg')",
        'earth-tone-gradient': 'linear-gradient(135deg, #a67f59, #c9a66b, #826a4a, #b5895d, #8b956d)',
        teamImg: "url('/team2.webp')",
        productIMG: "url('/product-background(1).webp')",
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "earth-1": "#a67f59",
        "earth-2": "#c9a66b", 
        "earth-3": "#826a4a", 
        "earth-4": "#b5895d", 
        "earth-5": "#8b956d", 
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require('daisyui'),
  ],
};
export default config;
