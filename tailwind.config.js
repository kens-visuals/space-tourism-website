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
        bellefair: ['Bellefair', 'serif'],
        barlow: ['Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '9.375rem',
        'heading-2': '6.25rem',
        'heading-3': '4.375rem',
        'heading-4': '3.5rem',
        'heading-5': ['1.75rem', { letterSpacing: '0.2969rem' }],
        'subheading-1': '1.75rem',
        'subheading-1': ['0.875rem', { letterSpacing: '0.1469rem' }],
        nav: ['1rem', { letterSpacing: '0.1688rem' }],
      },
    },
  },
  plugins: [],
};
