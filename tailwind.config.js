/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens:{
      xsm: '380px',
      xm: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
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
       
      },
    
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            minWidth: '768px',
          },
          '@screen lg': {
            minWidth: '1024px',
          },
          '@screen xl': {
            minWidth: '1170px',
          },

        }
      })
    }
  ],
}
