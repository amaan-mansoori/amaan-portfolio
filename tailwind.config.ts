import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'], // we will enforce dark in layout
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Arial']
      },
      colors: {
        brand: {
          50: '#e9f2ff',
          100: '#cfe4ff',
          200: '#9fcaff',
          300: '#6fb0ff',
          400: '#3f96ff',
          500: '#0f7cff',
          600: '#0a5fcc',
          700: '#074699',
          800: '#052e66',
          900: '#031733'
        }
      },
      boxShadow: {
        'glow': '0 0 30px rgba(63,150,255,.35)'
      },
      backgroundImage: {
        'radial-premium': 'radial-gradient(1200px 600px at 20% -10%, rgba(15,124,255,0.25), transparent 60%), radial-gradient(800px 400px at 80% 10%, rgba(0,198,255,0.18), transparent 60%), radial-gradient(900px 500px at 50% 120%, rgba(28,28,40,1), rgba(8,11,22,1))',
        'noise': "url('/noise.png')"
      }
    },
  },
  plugins: [],
}
export default config
