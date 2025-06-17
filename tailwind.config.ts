import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-from': '#0F4537',
        'primary-to': '#2E6656',
        accent: '#FA6F42',
        'accent-hover': '#F8753D',
        'btn-primary': '#FA6F42',
        'btn-hover': '#F8753D',
        'bg-cta-from': '#0F4537',
        'bg-cta-to': '#2E6656',
        'content-bg': '#F4F9F7',
        'card-bg': '#FAFAFA',
        'card-bg-alt': '#F1F1F1',
        'text-heading': '#000000',
        'text-paragraph': '#4A4A4A',
      },
    },
  },
  plugins: [],
};

export default config;
