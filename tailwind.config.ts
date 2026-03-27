import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        slate: {
          950: '#0A0E1A',
        },
      },
    },
  },
  plugins: [],
}

export default config
