import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "cl-base": "#fffaf4",
        "cl-green-0": "#f0f1ec",
        "cl-green-1" : "#108f3f",
        "cl-green-2" : "#0f4023",
        "cl-green-3" : "#050f09",
      }
    },
  },
  plugins: [],
}
export default config
