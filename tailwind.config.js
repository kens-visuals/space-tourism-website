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
        quaternary: '#383B4B',
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
        'subheading-3': '1.5rem',
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
        'destination-mobile':
          "url('/images/destination/background-destination-mobile.jpg')",
        'destination-tablet':
          "url('/images/destination/background-destination-tablet.jpg')",
        'destination-desktop':
          "url('/images/destination/background-destination-desktop.jpg')",
        'crew-mobile': "url('/images/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/images/crew/background-crew-tablet.jpg')",
        'crew-desktop': "url('/images/crew/background-crew-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
