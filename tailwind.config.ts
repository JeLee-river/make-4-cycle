import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        sans: ['Goorm Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
