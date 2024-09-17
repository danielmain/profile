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
          '--tw-prose-body': theme('colors.base-content'),
          '--tw-prose-headings': theme('colors.primary'),
          '--tw-prose-lead': theme('colors.secondary'),
          '--tw-prose-links': theme('colors.primary'),
          '--tw-prose-bold': theme('colors.base-content'),
          '--tw-prose-counters': theme('colors.base-content'),
          '--tw-prose-bullets': theme('colors.base-content'),
          '--tw-prose-hr': theme('colors.base-300'),
          '--tw-prose-quotes': theme('colors.secondary'),
          '--tw-prose-quote-borders': theme('colors.secondary'),
          '--tw-prose-captions': theme('colors.base-content'),
          '--tw-prose-code': theme('colors.secondary'),
          '--tw-prose-pre-code': theme('colors.base-content'),
          '--tw-prose-pre-bg': theme('colors.base-300'),
          '--tw-prose-th-borders': theme('colors.base-300'),
          '--tw-prose-td-borders': theme('colors.base-200'),
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
          '@apply bg-base-200 border border-base-300 rounded-lg shadow-lg pl-10 p-6 ml-6 mr-6': {},
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
      })
    },
  ],
  daisyui: {
    themes: ['dracula'],
  },
}
