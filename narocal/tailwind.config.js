/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#AA5E7F',
      background: '#FEFEFE',
      emphasize: '#00337C',
      alternative: '#FFFFFF',
      mock: '#D9D9D9',
    },
    extend: {},
  },
  plugins: [],
}
