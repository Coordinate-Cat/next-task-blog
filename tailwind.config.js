/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '15px': '15px',
      },
      width: {
        90: '90%',
      },
      maxWidth: {
        '1200px': '1200px',
      },
      screens: {
        tablet: '769px',
        // => @media (min-width: 769px) { ... }

        laptop: '1201px',
      },
    },
  },
  plugins: [],
};
