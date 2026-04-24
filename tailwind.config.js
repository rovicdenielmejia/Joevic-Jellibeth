/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDFB',
          100: '#FDF6F7',
          200: '#F8EFF3',
          300: '#F2E6EB',
        },
        rose: {
          50: '#FFF6F8',
          100: '#FDECF2',
          200: '#FADCE7',
          300: '#F1BED2',
          400: '#E7A8C3',
          500: '#D289AC',
        },
        lilac: {
          100: '#F4EEFF',
          200: '#E7DBFF',
          300: '#D8C6F8',
          400: '#C4A9EB',
        },
        mint: {
          100: '#ECFBF5',
          200: '#D7F5EA',
          300: '#BDEAD9',
          400: '#9ED9C2',
        },
        butter: {
          100: '#FFF8E8',
          200: '#FDEFC8',
          300: '#F5DFA4',
        },
        sage: {
          300: '#BCD3B4',
          400: '#9FBE97',
        },
        taupe: {
          300: '#DCCFCE',
          400: '#BEAEAD',
        },
        gold: {
          400: '#D39D7A',
          500: '#BC8360',
        },
        blush: '#F1BED2',
        warmGold: '#D39D7A',
        primary: '#5B4A62',
        secondary: '#8A768F',
        border: '#EEDFE6',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 20px rgba(145, 117, 157, 0.12)',
        'soft-lg': '0 14px 32px rgba(145, 117, 157, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}