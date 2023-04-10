const { allJsRules, esmRules, allTsWildcards } = require('./common.js');

/** @type {import('eslint').BaseConfig} */
module.exports = {
  overrides: [
    {
      files: [...allTsWildcards],

      env: {
        es2022: true,
      },

      parser: '@typescript-eslint/parser',

      parserOptions: {
        ecmaVersion: 2022, // so it doesn't barf on things like import.meta.url
        sourceType: 'module',
      },

      plugins: ['@typescript-eslint', 'import' /* , 'unicorn' */],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/recommended',
        // 'plugin:unicorn/recommended',
        // NOTE: this is eslint-config-prettier which turns OFF rules
        'prettier',
      ],

      settings: {
        //  See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        'import/parsers': {
          '@typescript-eslint/parser': [...allTsWildcards],
        },

        'import/resolver': {
          // alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          typescript: true,
          // node: true,
        },
      },

      rules: {
        ...allJsRules,
        ...esmRules,

        // these should all be covered by typescript itself
        'import/namespace': 'off',
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',

        '@typescript-eslint/triple-slash-reference': [
          'error',
          {
            path: 'never',
            types: 'prefer-import',
            lib: 'always',
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
  ],
};
