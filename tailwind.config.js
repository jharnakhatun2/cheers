/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '250px',
      sm: '390px',
      md: '650px',
    },
    container: {
      center: true,
      padding: '0.25rem',
      screens: {
        md: '700px',
      },
    },
    extend: {
      fontFamily: {
        poppins: 'var(--poppins)',
        bowlby: 'var(--bowlby)',
        inter: 'var(--inter)',
      },
      fontSize: {
        sm: '0.625rem',
        base: '0.75rem',
        lg: '0.9375rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        yellow: {
          DEFAULT: 'hsl(var(--yellow))',
          foreground: 'hsl(var(--yellow-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
