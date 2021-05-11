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
      files: ['*.js', '*.jsx'],
      extends: ['airbnb/base', 'plugin:prettier/recommended', 'prettier'],
    },

    // rules for typescript files only
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],

      // this is not necessarily needed, but it's being overridden somewhere
      // TODO: find out where/why
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
          },
        },
      },
    },

    // Overrides for any generic TS or JS eslint rules
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'no-param-reassign': [
          'error',
          { ignorePropertyModificationsFor: ['el'] },
        ],
      },
    },

    // Overrides for any TS or JS import plugin rules
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'import/prefer-default-export': ['off'],
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
      files: ['*.config.js', '*-config.js', '*.config.ts', '*-config.ts'],
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

    // Overrides only for jest
    {
      files: [
        'jest*.config.js',
        '*.test.ts',
        'jest-environment/*.js',
        '__mocks__/**/*.ts',
      ],
      env: {
        jest: true,
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
