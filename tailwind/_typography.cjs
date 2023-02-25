const defaultTypographyStyles = require('@tailwindcss/typography/src/styles')

module.exports = ({ theme }) => ({
  DEFAULT: {
    css: {
      h2: {
        color: theme('colors.primary.500'),
        scrollMarginTop: theme('spacing.8'),
      },
      h3: {
        scrollMarginTop: theme('spacing.8'),
      },
      blockquote: {
        borderWidth: `1px`,
        borderColor: 'var(--tw-prose-quote-borders)',
        padding: '1.2em 1.6em',
        fontWeight: '400',
        fontStyle: 'normal',
        backgroundColor: 'var(--tw-prose-quote-bg)',
        '& p:first-of-type': {
          marginTop: 0,
          '&::before': {
            content: 'none',
          },
        },
        '& p:last-of-type': {
          marginBottom: 0,
          '&::after': {
            content: 'none',
          },
        },
        '& code': {
          color: 'var(--tw-prose-code)',
        },
      },
      code: {
        fontWeight: '500',
      },
      pre: {
        maxWidth: `calc(100vw - ${theme('spacing.4')} * 2)`,
        '@supports (max-width: min(calc(100vw - 2rem), 70ch))': {
          maxWidth: `min(calc(100vw - ${theme(
            'spacing.4',
          )} * 2), 70ch)`,
        },
        borderRadius: 0,
        borderWidth: `1px`,
        borderColor: 'var(--tw-prose-pre-borders)',
        '& .function': {
          color: 'var(--tw-prose-pre-code-function)',
        },
        '& .string': {
          color: 'var(--tw-prose-pre-code-string)',
        },
        '& .property': {
          color: 'var(--tw-prose-pre-code-property)',
        },
        '& .comment': {
          color: 'var(--tw-prose-pre-code-comment)',
        },
        '& .operator, & .punctuation': {
          color: 'var(--tw-prose-pre-code-dimmed)',
        },
        '& .boolean': {
          color: 'var(--tw-prose-pre-code-boolean)',
        },
      },
    },
  },
  invert: {
    css: {
      ...defaultTypographyStyles.invert.css,
      '--tw-prose-quote-bg': 'var(--tw-prose-invert-quote-bg)',
      '--tw-prose-pre-borders': 'var(--tw-prose-invert-pre-borders)', // prettier-ignore
      '--tw-prose-pre-code-function': 'var(--tw-prose-invert-pre-code-function)', // prettier-ignore
      '--tw-prose-pre-code-string': 'var(--tw-prose-invert-pre-code-string)', // prettier-ignore
      '--tw-prose-pre-code-comment': 'var(--tw-prose-invert-pre-code-comment)', // prettier-ignore
      '--tw-prose-pre-code-dimmed': 'var(--tw-prose-invert-pre-code-dimmed)', // prettier-ignore
      '--tw-prose-pre-code-property': 'var(--tw-prose-invert-pre-code-property)', // prettier-ignore
      '--tw-prose-pre-code-boolean': 'var(--tw-prose-invert-pre-code-boolean)', // prettier-ignore
    },
  },
  gray: {
    css: {
      ...defaultTypographyStyles[require('./vars/_colors.cjs').gray]
        .css,
      ...{
        '--tw-prose-body': theme('colors.gray[800]'),
        '--tw-prose-headings': theme('colors.gray[900]'),
        '--tw-prose-lead': theme('colors.gray[600]'),
        '--tw-prose-links': theme('colors.gray[900]'),
        '--tw-prose-bold': theme('colors.gray[900]'),
        '--tw-prose-code': theme('colors.gray[900]'),
        '--tw-prose-quotes': theme('colors.gray[900]'),
        '--tw-prose-quote-bg': theme('colors.gray[200]'),
        '--tw-prose-pre-borders': theme('colors.gray[200]'),
        '--tw-prose-pre-code-function': theme('colors.secondary[500]'), // prettier-ignore
        '--tw-prose-pre-code-string': theme('colors.primary[500]'), // prettier-ignore
        '--tw-prose-pre-code-comment': theme('colors.gray[500]'), // prettier-ignore
        '--tw-prose-pre-code-dimmed': theme('colors.gray[400]'), // prettier-ignore
        '--tw-prose-pre-code-property': theme('colors.secondary[500]'), // prettier-ignore
        '--tw-prose-pre-code-boolean': theme('colors.sky[500]'), // prettier-ignore
        '--tw-prose-invert-body': theme('colors.gray[400]'),
        '--tw-prose-invert-headings': theme('colors.gray[300]'),
        '--tw-prose-invert-lead': theme('colors.gray[300]'),
        '--tw-prose-invert-links': theme('colors.gray[300]'),
        '--tw-prose-invert-bold': theme('colors.gray[300]'),
        '--tw-prose-invert-code': theme('colors.gray[300]'),
        '--tw-prose-invert-quotes': theme('colors.gray[400]'),
        '--tw-prose-invert-quote-bg': theme('colors.gray[800]'), // prettier-ignore
        '--tw-prose-invert-pre-borders': theme('colors.gray[800]'), // prettier-ignore
        '--tw-prose-invert-pre-code-function': theme('colors.secondary[500]'), // prettier-ignore
        '--tw-prose-invert-pre-code-string': theme('colors.primary[500]'), // prettier-ignore
        '--tw-prose-invert-pre-code-property': theme('colors.secondary[500]'), // prettier-ignore
        '--tw-prose-invert-pre-code-boolean': theme('colors.sky[500]'), // prettier-ignore
        '--tw-prose-invert-pre-code-comment': theme('colors.gray[400]'), // prettier-ignore
        '--tw-prose-invert-pre-code-dimmed': theme('colors.gray[500]'), // prettier-ignore
      },
    },
  },
})
