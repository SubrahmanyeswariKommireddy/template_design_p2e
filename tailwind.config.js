/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2702FF',
        signin:'#000F33',
        grey:'#656C80',
        green:'#00AC4F',
        red:'#FD3737',
        yellow:'#f7931a',
        cblue:'#687ee3',
        bggrey:'#f8f8f8'
      },
      fontFamily: {
        poppins: ['Poppins', 'Helvetica'],
      },
      fontWeight: {
        custom: 575, // Your custom font weight value
      },
    },
  },
  plugins: [],
}

