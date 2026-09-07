/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        clamp: 'clamp(3rem, 10vw, 8rem)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      colors: {
        chestnut: '#571509',
        'aged-ochre': '#9A460A',
        'saddle-tan': '#E8965A',
        'espresso-noir': '#1B1310',
        darkwood: {
          100: '#471300',
          200: '#3B0F00',
          300: '#2E0C00',
        },
        'antique-ivory': {
          100: '#F6F6F6',
          200: '#E8E8E8',
          300: '#DBDBDB',
        },
        travertine: {
          100: '#EDE1D3',
          200: '#E0D5C8',
          300: '#D4C9BD',
        },
        'burnished-gold': {
          light: '#CFA360',
          mid: '#D8AE68',
          deep: '#987039',
        },
        yellow: {
          100: '#EDE1D3',
          200: '#E8965A',
        },
        blue: {
          100: '#471300',
          200: '#2E0C00',
          300: '#3B0F00',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
