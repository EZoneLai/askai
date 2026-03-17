/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#060D1A',
          800: '#0E1929',
          700: '#162236',
          600: '#1E2F4A',
        },
        brand: {
          amber:       '#F59E0B',
          'amber-lt':  '#FCD34D',
          'amber-dk':  '#D97706',
          cyan:        '#06B6D4',
          'cyan-lt':   '#67E8F9',
          'cyan-dk':   '#0891B2',
        },
        ink: {
          100: '#F5F0E8',
          300: '#C4BBAB',
          500: '#8393A7',
          700: '#475569',
        },
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        photo: '12px',
      },
    },
  },
  plugins: [],
}
