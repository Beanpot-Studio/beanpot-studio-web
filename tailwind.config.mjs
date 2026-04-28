/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        // Parchment: warm, slightly desaturated (Direction B: harbor + parchment)
        paper:
          'linear-gradient(180deg, #f3f0e9 0%, #f8f6f1 42%, #ebe6dc 100%)',
      },
      colors: {
        // Direction B: muted umber primary, brick secondary, harbor accent
        primary: {
          50: '#f5f0e8',
          100: '#e8e0d3',
          200: '#d0c2ab',
          300: '#b2a17f',
          400: '#958060',
          500: '#7a674d',
          600: '#64543f',
          700: '#524333',
          800: '#43362c',
          900: '#372d26',
          950: '#1a1613',
        },
        secondary: {
          50: '#f6f0ed',
          100: '#e8dbd5',
          200: '#d0b6ab',
          300: '#b28a7c',
          400: '#9a6b5b',
          500: '#84564a',
          600: '#6c453b',
          700: '#5a3a31',
          800: '#4a3129',
          900: '#3c2822',
          950: '#21140f',
        },
        // Buttons: primary = sage; cards/text still use `primary` (parchment/umber)
        sage: {
          50: '#f2f4f0',
          100: '#e0e5dc',
          200: '#c2cdbb',
          300: '#9caa95',
          400: '#788a74',
          500: '#5b6d58',
          600: '#4a5a48',
          700: '#3b4839',
          800: '#313b30',
          900: '#2a3129',
          950: '#141814',
        },
        accent: {
          50: '#eef2f2',
          100: '#d3dedd',
          200: '#afc2c1',
          300: '#869f9e',
          400: '#638180',
          500: '#4c6967',
          600: '#3e5756',
          700: '#334847',
          800: '#2b3b3a',
          900: '#243130',
          950: '#121a19',
        },
        success: {
          50: '#f4faf4',
          100: '#e3f0e3',
          200: '#c8e0c6',
          300: '#9cc596',
          400: '#6fa368',
          500: '#4a8246',
          600: '#3a6835',
          700: '#30532d',
          800: '#294327',
          900: '#233822',
          950: '#111c10',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#6b2f0a',
          950: '#3a1605',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // High-contrast label on solid sage and brick; avoids pure #fff
        'btn-on': '#fffcf7',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      // Matches DESIGN.md: fluid marketing headings; body stays 1rem in global.css
      fontSize: {
        'display-1': [
          'clamp(2.25rem,5vw,3.75rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ],
        'display-2': [
          'clamp(1.875rem,3vw,2.25rem)',
          { lineHeight: '1.2', letterSpacing: '-0.02em' },
        ],
        'display-3': [
          'clamp(1.375rem,2.2vw,1.875rem)',
          { lineHeight: '1.25', letterSpacing: '-0.01em' },
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(40, 35, 32, 0.06), 0 10px 20px -2px rgba(40, 35, 32, 0.04)',
        // Slightly cool-green tint for craft lift (pairs with sage buttons)
        'craft': '2px 3px 0 0 rgba(42, 50, 41, 0.1)',
        'craft-sm': '1px 2px 0 0 rgba(42, 50, 41, 0.12)',
        'craft-hover': '3px 4px 0 0 rgba(42, 50, 41, 0.16)',
      },
    },
  },
  plugins: [],
}
