/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#A7D8F0', // Light blue
        secondary: '#5B9BD5', // Darker blue
        textDark: '#222222', // Black
        textLight: '#FFFFFF', // White
        accent: '#333333', // Dark gray
      }
    }
  },
  plugins: []
}
