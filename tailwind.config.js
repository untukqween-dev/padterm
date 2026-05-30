/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: '#0d1117',
          fg: '#e6edf3',
          cursor: '#58a6ff',
          selection: '#388bfd',
        },
      },
      fontFamily: {
        mono: ['Monaco', 'Menlo', 'Consolas', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
