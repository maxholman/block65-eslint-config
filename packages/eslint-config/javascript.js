const { allJsRules, esmRules, allJsWildcards } = require('./common.js');

/** @type {import('eslint').BaseConfig} */
module.exports = {
  overrides: [
    {
      files: [...allJsWildcards],

      env: {
        es2022: true,
      },

      parserOptions: {
        ecmaVersion: 2022, // so it doesn't barf on things like import.meta.url
        sourceType: 'module',
      },

      plugins: ['import' /* , 'unicorn' */],
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
      },
    },

    // // Disallow common js
    // {
    //   files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
    //   rules: {
    //     'import/no-commonjs': [2],
    //   },
    // },

    {
      files: [
        '*.config.js',
        '*-config.js',
        '*.config.cjs',
        '*-config.cjs',
        '*.config.ts',
        '*-config.ts',
        '.*rc.cjs',
        '*.test.ts',
        'jest-*.js',
        '__mocks__/**/*.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        'no-console': 'off',

        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
          },
        ],
      },
    },
  ],
};
