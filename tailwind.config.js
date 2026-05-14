/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
    },
  },
  plugins: [],
}
