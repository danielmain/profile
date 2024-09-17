module.exports = {
  content: [
    './src/**/*.{rs,html,css}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        '.prose': {
          // ... (keep all existing prose styles)
        },
        '.prose h1': {
          '@apply text-primary': {},
        },
        '.prose h2, .prose h3, .prose h4': {
          '@apply text-secondary': {},
        },
        '.prose a': {
          '@apply text-secondary hover:text-primary': {},
        },
        '.prose ul': {
          '@apply bg-base-200 border border-base-300 rounded-lg shadow-lg p-10 m-0': {},
        },
        '.prose strong': {
          '@apply text-accent': {},
        },
        '.prose ul > li::before': {
          '@apply bg-secondary': {},
        },
        '.prose ol > li::before': {
          '@apply text-secondary': {},
        },
        // Add this new utility for hiding scrollbars
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    },
  ],
  daisyui: {
    themes: ['dracula'],
  },
}
