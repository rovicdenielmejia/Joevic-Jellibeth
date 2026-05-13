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
          50: '#F7F7F5',
          100: '#EFEDE8',
          200: '#E8E3DB',
          300: '#DDD7CF',
        },
        rose: {
          50: '#F7F7F5',
          100: '#EFEDE8',
          200: '#E8E3DB',
          300: '#DDD7CF',
          400: '#CFC8BE',
          500: '#B8B0A6',
        },
        lilac: {
          100: '#EFEDE8',
          200: '#E8E3DB',
          300: '#DDD7CF',
          400: '#CFC8BE',
        },
        mint: {
          100: '#EFEDE8',
          200: '#E8E3DB',
          300: '#DDD7CF',
          400: '#CFC8BE',
        },
        butter: {
          100: '#F7F7F5',
          200: '#EFEDE8',
          300: '#E8E3DB',
        },
        sage: {
          300: '#DDD7CF',
          400: '#CFC8BE',
        },
        taupe: {
          300: '#DDD7CF',
          400: '#8A847E',
        },
        gold: {
          400: '#CFC8BE',
          500: '#B8B0A6',
        },
        blush: '#E8E3DB',
        warmGold: '#CFC8BE',
        primary: '#5E5A57',
        secondary: '#8A847E',
        border: '#DDD7CF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Bodoni Moda', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Lora', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(94, 90, 87, 0.08)',
        'soft-lg': '0 12px 36px rgba(94, 90, 87, 0.12)',
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