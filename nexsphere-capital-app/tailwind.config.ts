import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'custom-white': '#fffaf4', // Ajoutez votre couleur personnalisée ici
        'custom-green':'#0f4023',
      },
      textColor: {
        'custom-green': '#0f4023',
      },
      gridTemplateRows: {
        '9':'repeat(9,minmax(0,1fr))',
        '10':'repeat(10,minmax(0,1fr))',
        '11':'repeat(11,minmax(0,1fr))',
        '12':'repeat(12,minmax(0,1fr))',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      }
    },
  },
  plugins: [],
}
export default config



