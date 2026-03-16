/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { DEFAULT: '#e8390a', alt: '#f14c1d' },
        ink: { DEFAULT: '#0f0e0d', soft: '#1a1918', 3: '#7a7268' },
        cream: { DEFAULT: '#f4f0e8', deep: '#ede8e0', 2: '#ede8e0' },
        green: { DEFAULT: '#0e7a45' },
        amber: { DEFAULT: '#e89a0a' },
      },
      fontFamily: {
        sans: ['IBM Plex Sans Arabic', 'Syne', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        ibm: ['IBM Plex Sans Arabic', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'rgba(15, 14, 13, 0.1)',
      }
    },
  },
  plugins: [],
}
