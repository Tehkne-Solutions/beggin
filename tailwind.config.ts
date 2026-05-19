import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beggin: {
          paper: '#f8f1e3',
          paperSoft: '#fbf7ee',
          ink: '#111315',
          muted: '#6f685c',
          red: '#e33731',
          gold: '#b99a5d',
          sage: '#dfe4cf',
          line: '#d8c8a6',
        },
      },
      fontFamily: {
        serifDisplay: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sansUi: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(38, 28, 14, 0.12)',
      },
      keyframes: {
        cloudTrack: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        sealSwing: {
          '0%, 100%': { transform: 'translate3d(-4px, 0, 0) rotate(-3deg)' },
          '22%': { transform: 'translate3d(5px, -3px, 0) rotate(2deg)' },
          '51%': { transform: 'translate3d(-2px, 2px, 0) rotate(-1deg)' },
          '77%': { transform: 'translate3d(3px, -1px, 0) rotate(3deg)' },
        },
        botanicalFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) rotate(-1deg)' },
          '50%': { transform: 'translate3d(10px, -8px, 0) rotate(1.5deg)' },
        },
        bottleDrift: {
          '0%, 100%': { transform: 'translate3d(-10px, 0, 0) rotate(-0.55deg)' },
          '50%': { transform: 'translate3d(10px, -4px, 0) rotate(0.55deg)' },
        },
      },
      animation: {
        cloudTrack: 'cloudTrack var(--wind-speed, 70s) linear infinite',
        sealSwing: 'sealSwing 6.8s ease-in-out infinite',
        botanicalFloat: 'botanicalFloat 7s ease-in-out infinite',
        bottleDrift: 'bottleDrift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
