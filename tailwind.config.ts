import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    extend: {
      backgroundImage: {},
      fontFamily: {
        sans: ['Goorm Sans', 'sans-serif'],
      },
      colors: {
        'dark-green': '#1c3732',
        'deep-green': '#2c5d4a',
        olive: '#4a855b',
        green: '#78ad65',
        chartreuse: '#b2d46b',
        yellow: '#f9f871',
      },
    },
  },
  plugins: [],
};
export default config;
