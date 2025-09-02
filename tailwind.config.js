/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Background Colors
        background: {
          DEFAULT: '#0b0f1a',
          secondary: '#0d1117',
          tertiary: '#0f172a',
        },
        // Primary Accent Colors (Bright Blue Gradients)
        primary: {
          DEFAULT: '#007bff',
          light: '#00bfff',
          bright: '#1e90ff',
        },
        // Secondary Accent Colors (Cyan/Teal)
        secondary: {
          DEFAULT: '#00e0ff',
          bright: '#0ff',
        },
        // Typography Colors
        text: {
          white: '#ffffff',
          light: '#a0aec0',
          muted: '#cbd5e1',
          highlight: '#00bfff',
        },
        // Legacy colors for backward compatibility
        accent: {
          blue: '#007bff',
          cyan: '#00e0ff',
        },
        // Component-specific colors
        card: {
          DEFAULT: '#0d1117',
          hover: '#0f172a',
        },
        border: {
          DEFAULT: '#1e293b',
          focus: '#00bfff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00bfff, 0 0 10px #00bfff, 0 0 15px #00bfff' },
          '100%': { boxShadow: '0 0 10px #00bfff, 0 0 20px #00bfff, 0 0 30px #00bfff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 123, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 123, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(0, 123, 255, 0.5)',
      },
    },
  },
  plugins: [],
}

