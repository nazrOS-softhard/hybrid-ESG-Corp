import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        h: {
          bg:      '#080808',
          surface: '#0f0f0f',
          border:  '#1a1a1a',
          muted:   '#404040',
          text:    '#e8e8e8',
          dim:     '#707070',
          accent:  '#00D4B4',
        }
      },
      letterSpacing: {
        widest2: '0.25em',
      }
    },
  },
  plugins: [],
}
export default config
