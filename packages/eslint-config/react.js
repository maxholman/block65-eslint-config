const base = require('./base.js');

module.exports = {
  ...base,
  extends: ['plugin:react-hooks/recommended', 'plugin:react/recommended'],
  plugins: ['formatjs'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        // React 17 is mandated
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        'react/jsx-curly-brace-presence': [
          'warn',
          { props: 'never', children: 'never' },
        ],

        // no need with typescript
        'react/prop-types': ['off'],

        // no need with typescript
        'react/jsx-props-no-spreading': [
          'off',
          {
            html: 'ignore',
            custom: 'ignore',
            explicitSpread: 'ignore',
            exceptions: [],
          },
        ],

        // for css specificity, ensure css is included before any other imports
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: './*.scss',
                group: 'parent',
                patternOptions: { matchBase: true },
                position: 'before',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.stories.ts', '*.stories.tsx'],
      rules: {
        'react/jsx-props-no-spreading': [
          'error',
          {
            exceptions: ['Template'],
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      rules: {
        // Recommended defaults - see https://formatjs.io/docs/tooling/linter/
        'formatjs/enforce-description': ['error', 'literal'],
        'formatjs/enforce-default-message': ['error', 'literal'],
        'formatjs/enforce-placeholders': 'error',
        'formatjs/no-multiple-whitespaces': 'error',
        'formatjs/no-multiple-plurals': 'error',
        'formatjs/enforce-plural-rules': [
          2,
          {
            one: true,
            other: true,
            zero: false,
          },
        ],

        // typescript pretty much takes care of this
        'jsx-a11y/anchor-is-valid': 0,
      },
    },
    ...base.overrides,
  ],
};
