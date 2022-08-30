/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      xsm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: ({
      'primary': '#217BF4',
      'secondary': '#ffffff',
    }),
    fontFamily: {
      'Inter': ["Inter", "sans-serif"],
     },
    container: {
      center: true,
      padding: {
        DEFAULT: '0',
       xsm: '',
      },
    
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xsm': {
            maxWidth: '100%',
          },
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            maxWidth: '728px',
          },
          '@screen lg': {
            maxWidth: '984px',
          },
          '@screen xl': {
            maxWidth: '1170px',
          },

        }
      })
    }
  ],
}
