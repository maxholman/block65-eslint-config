const { allJsWildcards, allTsWildcards } = require('./common.js');

module.exports = {
  overrides: [
    {
      files: [...allJsWildcards, ...allTsWildcards],

      extends: [
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
      ],

      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: {
        'react/jsx-curly-brace-presence': [
          'warn',
          { props: 'never', children: 'never' },
        ],

        // no need with typescript
        'react/prop-types': 'off',

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
      },
    },

    // FormatJS / react-intl
    {
      files: [...allJsWildcards, ...allTsWildcards],

      plugins: ['formatjs'],

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
        // 'jsx-a11y/anchor-is-valid': 0,
      },
    },
  ],
};
