const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
