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
        'dark-green': '#112324',
        'deep-green': '#164c45',
        olive: '#30785c',
        green: '#62a568',
        chartreuse: '#a5d16c',
        yellow: '#f9f871',
      },
    },
  },
  plugins: [],
};
export default config;
