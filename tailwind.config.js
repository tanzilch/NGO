/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      'max-width': '1280px',
      center: true,
      padding: {
        DEFAULT: '1rem', // Default padding for all breakpoints
        sm: '2rem',      // Padding for sm screens and up
        md: '3rem',      // Padding for md screens and up
        lg: '4rem',      // Padding for lg screens and up
        xl: '5rem',      // Padding for xl screens and up
      },
    },
    
    extend: {
      backgroundImage: {
        headerBg: "url('/assets/images/headerBg.png')",
        aboutBg: "url('/assets/images/AboutBg.png')"
        // buttonPlay: "url('/assets/icons/playIcon.png')",
      },


    },
    fontFamily: {
      Roboto: ["Roboto", "sans"],
      Courgette: ["Courgette", "verdana"],
    },


  },
  plugins: [],
};
