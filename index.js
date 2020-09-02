const extendsBase = ['airbnb-base', 'prettier'];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: true,
    //   },
    // ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        ...extendsBase,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
            js: 'always',
            jsx: 'always',
          },
        ],
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
    {
      files: ['*.js', '*.jsx'],
      extends: [...extendsBase, 'eslint:recommended'],
      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'always',
            tsx: 'always',
            js: 'never',
            jsx: 'never',
          },
        ],
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      // extends: extendsBase,
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.config.js', '*-config.js'],
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
    {
      files: [
        'jest*.config.js',
        '__tests__/**/*.test.ts',
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
