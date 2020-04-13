module.exports = {
  theme: {
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    fontFamily: {
      'fira': ['Fira Sans', 'sans serif'],
      'fira-cond': ['Fira Sans Condensed', 'sans serif'],
    },
    height: {
      'sm': '6rem',
      'md': '12rem',
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
