const {
  allJsWildcards,
  allTsWildcards,
  allJsRules,
  esmRules,
} = require('./common.js');

module.exports = {
  env: {
    es2022: true,
  },

  parserOptions: {
    ecmaVersion: 2022, // so it doesn't barf on things like import.meta.url
    sourceType: 'module',
  },

  overrides: [
    // PART 1: NO TS, NO REACT
    {
      files: [...allJsWildcards],

      extends: [
        'airbnb',
        'plugin:import/recommended',
        // 'plugin:unicorn/recommended',
        // NOTE: this is eslint-config-prettier which turns OFF rules
        'prettier',
      ],

      rules: {
        ...allJsRules,
        ...esmRules,

        // these should all be covered by typescript itself
        'import/namespace': 'off',
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
      },
    },

    // PART 2: ONLY TS, NO REACT
    {
      files: [...allTsWildcards],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        // 'plugin:import/recommended',
        // 'plugin:unicorn/recommended',
        // NOTE: this is eslint-config-prettier which turns OFF rules
        'prettier',
      ],

      settings: {
        //  See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        // 'import/parsers': {
        //   '@typescript-eslint/parser': [...allTsWildcards],
        // },

        'import/resolver': {
          // alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          typescript: true,
          // node: true,
        },
      },

      rules: {
        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never',
            types: 'prefer-import',
            lib: 'always',
          },
        ],

        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            fixStyle: 'inline-type-imports',
          },
        ],

        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
      },
    },

    // PART 3: ONLY TS REACT
    {
      files: [...allTsWildcards],

      extends: ['airbnb/hooks', 'plugin:react/jsx-runtime'],

      settings: {
        react: {
          version: 'detect',
        },
      },

      rules: {
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],

        'react/jsx-curly-brace-presence': [
          1,
          { props: 'never', children: 'never', propElementValues: 'always' },
        ],

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

      plugins: ['formatjs', 'react-refresh'],

      rules: {
        'react-refresh/only-export-components': 'warn',

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
