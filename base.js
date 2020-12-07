module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  overrides: [
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      extends: ['plugin:prettier/recommended', 'prettier'],
    },
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      extends: ['plugin:prettier/recommended', 'prettier/@typescript-eslint'],
      rules: {
        'import/prefer-default-export': ['off'],
        'no-param-reassign': [
          'error',
          { ignorePropertyModificationsFor: ['el'] },
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
      files: [
        '*.config.js',
        '*-config.js',
        '*.config.ts',
        '*-config.ts',
        'bin/*.js',
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
    {
      files: [
        'jest*.config.js',
        '*.test.ts',
        'jest-environment/*.js',
        '__mocks__/**/*.ts',
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
