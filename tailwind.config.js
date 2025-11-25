/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#05070d',
        ink: '#0b1324',
        cyanAccent: '#5bd4ff',
        slateSoft: '#9da8bb',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        panel: '0 15px 60px rgba(5, 10, 20, 0.7)',
      },
    },
  },
  plugins: [],
};
