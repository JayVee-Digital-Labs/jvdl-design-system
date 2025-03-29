/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-font-color': '#1e1e1e',
        'primary-font-white': '#fff',
        primary: '#2ea885'
      },
      fontFamily: {
        'dm-sans': "'DM Sans', sans-serif"
      }
    }
  },
  plugins: []
};
