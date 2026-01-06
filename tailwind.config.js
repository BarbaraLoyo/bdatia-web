/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'night': '#0F172A',
        'surface': '#F8F6F2',
        'text-dark': '#111827',
        'text-light': '#F9FAFB',
        'muted': '#9CA3AF',
        'brand': '#7A1F2B',
        'accent': '#C9A24D',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
