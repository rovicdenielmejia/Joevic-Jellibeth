/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#E8F5F0',
          100: '#D1EBE1',
          200: '#A3D7C3',
          300: '#75C3A5',
          400: '#47AF87',
          500: '#199B69',
          600: '#0B3D2E',
          700: '#093126',
          800: '#07251E',
          900: '#051916',
        },
        gold: {
          50: '#FDF9EE',
          100: '#FAF0D4',
          200: '#F5E1A9',
          300: '#F0D27E',
          400: '#EBC353',
          500: '#D4A45C',
          600: '#C6A45C',
          700: '#A88A4D',
          800: '#8A703E',
          900: '#6C562F',
        },
        ivory: {
          50: '#FDFCF8',
          100: '#F5F1E8',
          200: '#EBE4D4',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(11, 61, 46, 0.08)',
        'soft-lg': '0 8px 40px rgba(11, 61, 46, 0.12)',
        'glow': '0 0 30px rgba(198, 164, 92, 0.3)',
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