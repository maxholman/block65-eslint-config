module.exports = {
  // env: {
  //   es6: true,
  // },
  // parserOptions: {
  //   ecmaVersion: 2018,
  // },

  parserOptions: {
    ecmaVersion: 2022, // so it doesn't barf on things like import.meta.url
    sourceType: 'module',
  },

  overrides: [
    // rules for javascript files only
    {
      files: ['*.cjs', '*.mjs', '*.js', '*.jsx'],
      extends: ['airbnb-base', 'prettier'],
    },

    // TYPESCRIPT files ONLY
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2022, // so it doesn't barf on things like import.meta.url
        allowAutomaticSingleRunInference: true,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:import/typescript',
        'prettier',
      ],

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
      files: ['*.ts', '*.cjs', '*.mjs', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'no-param-reassign': [
          'error',
          { ignorePropertyModificationsFor: ['el'] },
        ],
        quotes: [`error`, 'single', { avoidEscape: true }],
      },
    },

    // Overrides for any TS or JS import plugin rules
    {
      files: ['*.ts', '*.cjs', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'import/prefer-default-export': ['off'],
        'import/extensions': [2, 'ignorePackages'],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
            },
          },
        ],
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
        '.eslintrc.cjs',
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
      files: ['*.test.ts', 'jest-environment/*.js', '__mocks__/**/*.ts'],
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

    // allows dev dependencies in devops and infra dirs
    {
      files: ['**/devops/**/*.ts', '**/infra/**/*.ts'],
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
