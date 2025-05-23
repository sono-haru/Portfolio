/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /border-\[#.*\]/, 
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        kiwi: ['Kiwi Maru', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
}

