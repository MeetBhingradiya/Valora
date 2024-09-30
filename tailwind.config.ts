/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#334381', // Example of your orange primary color
      },
    },
  },
  plugins: [],
}