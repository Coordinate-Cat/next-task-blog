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
      height: {
        150: '150px',
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
