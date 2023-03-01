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
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#AA5E7F',
        background: '#FEFEFE',
        accent: '#00337C',
        alternative: '#FFFFFF',
        mock: '#D9D9D9',
      },
    },
  },
  plugins: [require("daisyui")],
}
