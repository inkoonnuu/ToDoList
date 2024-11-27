/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      letterSpacing:{
        wide:'3px',
        wider:'0.3rem',
      }
    },

  //   screens: {
  //     'sm': '640px',
  //     'md': '768px',
  //     'lg': '1024px',
  //     'xl': '1280px',
  //     '2xl': '1536px',
  //     // Add custom breakpoints if needed
  //     'xxl': '1600px', // Example of custom breakpoint
  //   },
  },
  plugins: [
    
  ],
}