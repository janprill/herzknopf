module.exports = {
  theme: {
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwindcss-typography'),
  ],
}
