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
      backgroundImage: {
        main: "url('https://res.cloudinary.com/dr26wooar/image/upload/v1711363534/make4cycle/main.jpg')",
        dropbox:
          "url('https://res.cloudinary.com/dr26wooar/image/upload/v1725770155/make4cycle/dropbox.png')",
      },
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
        ivory: '#e2e5c1',
      },
    },
  },
  plugins: [],
};
export default config;
