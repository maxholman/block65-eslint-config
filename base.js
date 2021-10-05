module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },

  // plugins: ['import'],

  overrides: [
    // rules for javascript files only
    {
      files: ['*.cjs', '*.js', '*.jsx'],
      extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
      rules: { 'import/no-unresolved': 2 },
    },

    // rules for typescript files only
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],

      // // this is not necessarily needed, but it's being overridden somewhere
      // // TODO: find out where/why
      // settings: {
      //   'import/resolver': {
      //     node: {
      //       extensions: ['.js', '.json'],
      //     },
      //   },
      // },
    },

    // Overrides for any generic TS or JS eslint rules
    {
      files: ['*.ts', '*.cjs', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'no-param-reassign': [
          'error',
          { ignorePropertyModificationsFor: ['el'] },
        ],
      },
    },

    // Overrides for any TS or JS import plugin rules
    {
      files: ['*.ts', '*.cjs', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'import/prefer-default-export': ['off'],
        'import/extensions': [2, 'ignorePackages'],
      },
    },

    // Disallow common js
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'import/no-commonjs': [2],
      },
    },

    // Overrides for any Typescript eslint rules
    {
      files: ['*.ts', '*.tsx'],
      rules: {
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

    // Overrides only for config and bin js files
    {
      files: [
        '*.config.js',
        '*-config.js',
        '*.config.cjs',
        '*-config.cjs',
        '*.config.ts',
        '*-config.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },

    // Overrides only for test runners and supporting files
    {
      files: [
        'ava.config.js',
        'jest*.config.js',
        'jest*.config.cjs',
        '*.test.ts',
        'jest-environment/*.js',
        '__mocks__/**/*.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
