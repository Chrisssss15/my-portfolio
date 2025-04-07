/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '35ch' }, // pas aan op lengte van je tekst
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#ECA400' },
        },
      },
      animation: {
        typing: 'typing 3s steps(35, end) forwards',
        blink: 'blink 0.8s step-end infinite',
      },
    },
  },
  plugins: [],
}
