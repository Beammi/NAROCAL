/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

    // for flowbite
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#AA5E7F',
        background: '#FEFEFE',
        accent: '#00337C',
        alternative: '#FFFFFF',
        mock: '#D9D9D9',
        test: '#F9F3F3',
      },
    },
    screens:{
      phone: '150px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  plugins: [require("daisyui"),
              require('@tailwindcss/typography'),
              require('flowbite/plugin'),],

  daisyui: {
    themes:[
      {
        mytheme: {
          "primary": '#000000',
          "secondary": '#AA5E7F',
          "background": '#FEFEFE',
          "accent": '#00337C',
          "alternative": '#FFFFFF',
          "mock": '#D9D9D9',
        },
      },
    ],
  },
}
