/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        Background: '#0D0D2B',
        ButtonColor: '#3671E9',
        SubscribeBtn: '#0D0D2B',
        BorderColor: '#F2F2F2',
        textColor: '#E0E0E0',
        textdim: '#828282',
        White: '#FFFFFF',
        LightBlue: 'rgba(255, 255, 255, 0.1)',
        BorderBlue: 'rgba(255, 255, 255, 0.4)',
        SecondaryBlue: '#2B076E',
      },
    },

    fontFamily: {
      Rubik: ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
};
