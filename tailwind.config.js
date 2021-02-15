module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#f5f4f4',
          300: '#1a1a1a80',
          400: '#1a1a1a99',
          500: '#1a1a1ae6',
          900: '#111'
        },
        purple: {
          500: '#8e66a3'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
