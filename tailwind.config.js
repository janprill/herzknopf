module.exports = {
  theme: {
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    fontFamily: {
      'fira': ['Fira Sans', 'sans serif'],
    },
    height: {
      'xl': '36rem',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-typography'),
  ],
}
