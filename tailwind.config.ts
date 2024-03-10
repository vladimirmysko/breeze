import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      sans: ['var(--font-inter-display)'],
    },
    fontSize: {
      '4xs': ['0.6875rem', { lineHeight: '0.8125rem', letterSpacing: '0.01em' }],
      '3xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
      '2xs': ['0.8125rem', { lineHeight: '1.125rem', letterSpacing: '0.01em' }],
      xs: ['0.9375rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
      sm: ['1rem', { lineHeight: '1.3125rem', letterSpacing: '0.01em' }],
      base: ['1.0625rem', { lineHeight: '1.375rem', letterSpacing: '0.01em' }],
      lg: ['1.25rem', { lineHeight: '1.5625rem', letterSpacing: '-0.01em' }],
      xl: ['1.375rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
      '2xl': ['1.75rem', { lineHeight: '2.125rem', letterSpacing: '-0.01em' }],
      '3xl': ['2.125rem', { lineHeight: '2.5625rem', letterSpacing: '-0.01em' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    extend: {},
  },
  plugins: [typography, forms],
};

export default config;
