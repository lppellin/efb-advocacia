/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // App1 tokens (dark theme)
        background: '#0D0D12',
        primary: '#FAF8F5',
        accent: '#C9A84C',
        dark: '#2A2A35',
        // App3 tokens (light institutional)
        cream: '#F4F0E8',
        forest: '#1A3A28',
        gold: '#B8860B',
        parchment: '#EDE8DC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        drama: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}

