/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pro: {
          bg: '#f8fafc',
          white: '#ffffff',
          slate: '#0f172a',
          muted: '#475569',
          border: '#e2e8f0',
          green: '#10b981',
          greenHover: '#059669',
          greenLight: '#ecfdf5',
          mint: '#059669',
          cyan: '#0284c7',
        },
        webfx: {
          navy: '#0f172a',
          dark: '#f8fafc',
          surface: '#ffffff',
          surfaceHover: '#f1f5f9',
          blue: '#10b981',
          blueHover: '#059669',
          orange: '#10b981',
          orangeHover: '#059669',
          cyan: '#0284c7',
          emerald: '#10b981',
          border: '#e2e8f0',
        },
        seo: {
          bg: '#ffffff',
          card: '#ffffff',
          border: '#e2e8f0',
          emerald: '#10b981',
          cyan: '#0284c7',
          accent: '#10b981',
          purple: '#059669',
          dark: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};
