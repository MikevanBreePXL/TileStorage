/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  themes: [
    {
      mytheme: {
        "primary": "#073077",
        "secondary": "#3b82f6",
        "accent": "#22d3ee",
        "neutral": "#073077",
        "base-100": "#363636",
        "info": "#3b82f6",
        "success": "#00ff00",
        "warning": "#f59e0b",
        "error": "#ff0000",
        },
      },
    ],
  plugins: [require('daisyui')],
}

