module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        secondary: '#D0D6F9',
        tertiary: '#ffffff',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['9.375rem', '1.1'],
        'heading-2': ['6.25rem', '1.1'],
        'heading-3': ['4.375rem', '1.1'],
        'heading-4': ['3.5rem', '1.1'],
        paragraph: ['0.9375rem', '1.5625rem'],
        'heading-5': '1.75rem',
        'subheading-1': '1.75rem',
        'subheading-2': '0.875rem',
        nav: '1rem',
      },
      letterSpacing: {
        primary: '0.2969rem',
        secondary: '0.1469rem',
        tertiary: '0.1688rem',
      },
      backgroundImage: {
        'home-mobile': "url('/images/home/background-home-mobile.jpg')",
        'home-tablet': "url('/images/home/background-home-tablet.jpg')",
        'home-desktop': "url('/images/home/background-home-desktop.jpg')",
      },
      width: {
        // mobile: '20.4375rem',
      },
    },
  },
  plugins: [],
};
