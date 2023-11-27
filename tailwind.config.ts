/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontSize: {
        headline1: ['2.25rem', { fontWeight: '700' }],
        headline2: ['1.75rem', { fontWeight: '700' }],
        headline3: ['1.125rem', { fontWeight: '600' }],
        headline4: ['1.125rem', { fontWeight: '500' }],
        'title-lg': ['1.125rem', { fontWeight: '700' }],
        'title-md': ['1rem', { fontWeight: '600' }],
        'title-sm': ['0.875rem', { fontWeight: '600' }],
        'body-2xl': ['1.25rem', { fontWeight: '700' }],
        'body-xl': ['1.25rem', { fontWeight: '500' }],
        'body-lg': ['1.125rem', { fontWeight: '600' }],
        'body-base': ['0.875rem', { fontWeight: '500' }],
        'body-md': ['1rem', { fontWeight: '500' }],
        'body-sm': ['0.8125rem', { fontWeight: '600' }],
        'body-xs': ['0.75rem', { fontWeight: '700' }],
        'body-mini': ['0.6875rem', { fontWeight: '600' }],
        'body-min': ['0.625rem', { fontWeight: '500' }],
        'button-lg': ['1.125rem', { fontWeight: '500' }],
        'button-base': ['1rem', { fontWeight: '500' }],
        'button-md': ['0.875rem', { fontWeight: '600' }],
        'button-sm': ['0.75rem', { fontWeight: '600' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
