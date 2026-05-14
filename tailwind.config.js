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
          50: '#F8F8F4',
          100: '#F1F3ED',
          200: '#E6EADF',
          300: '#D7DECD',
        },
        rose: {
          50: '#FBF4F3',
          100: '#F7EBE8',
          200: '#F0DFDA',
          300: '#E7CCC4',
          400: '#DBB4A8',
          500: '#C99C8E',
        },
        lilac: {
          100: '#EEF3EA',
          200: '#E2EBDD',
          300: '#D2E0C8',
          400: '#BDD1B0',
        },
        mint: {
          100: '#EEF3EA',
          200: '#E2EBDD',
          300: '#CDDCC3',
          400: '#B6CBA9',
        },
        butter: {
          100: '#F8F8F4',
          200: '#F1F3ED',
          300: '#E6EADF',
        },
        sage: {
          300: '#BFD0B3',
          400: '#9FB58F',
        },
        taupe: {
          300: '#D7DECD',
          400: '#78856F',
        },
        gold: {
          400: '#C8B690',
          500: '#AF9D75',
        },
        blush: '#F0DFDA',
        warmGold: '#AF9D75',
        primary: '#4D5F47',
        secondary: '#7B8674',
        border: '#D5DECC',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Bodoni Moda', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Lora', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 24px rgba(77, 95, 71, 0.1)',
        'soft-lg': '0 14px 36px rgba(77, 95, 71, 0.16)',
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