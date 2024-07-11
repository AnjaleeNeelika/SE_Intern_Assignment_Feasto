const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'primary-theme-color': '#E52D3C',
        }
      },
    },
    plugins: [
        addIconSelectors(['material-symbols', 'tabler', 'fluent', 'mdi']),
    ],
}